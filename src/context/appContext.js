import React from "react";
import _createNote from "../handlers/createNote";
import _getnotes from "../handlers/fetchNotes";
import _delNote from "../handlers/removeNotes";
import _editNote from "../handlers/updateNote";
import _sortLoans from "../libs/sortLoans";

export const AppContext = React.createContext();

export default function AppContextProvider(props) {
  const [title, setTitle] = React.useState({});

  const [note, setNote] = React.useState({
    title: "",
    message: "",
    notes: [],
    createNoteLoader: false,
    getNoteLoader: false,
  });

  const [editNote, setEditNote] = React.useState({
    title: "",
    message: "",
  });

  const [err, setErr] = React.useState({
    type: "",
    msg: "",
    show: false,
  });

  React.useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setNote({
      ...note,
      getNoteLoader: true,
    });

    const res = await _getnotes();

    setNote({
      ...note,
      getNoteLoader: false,
    });

    if (res.success === 0) {
      setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

      setNote({
        ...note,
        notes: [],
      });

      return;
    }

    let sorted = await _sortLoans(res.data);

    res.data = sorted;

    setNote({
      ...note,
      getNoteLoader: false,
      notes: res.data,
    });
  };

  const _handleOnchange = async (data) => {
    if (data.field === "title")
      return setNote({
        ...note,
        title: data.value,
      });

    if (data.field === "body")
      return setNote({
        ...note,
        message: data.value,
      });
  };

  const _handleSave = async () => {
    if (note.title === "" || note.message === "")
      return setErr({
        ...err,
        type: "warning",
        msg: "all fields are required",
        show: true,
      });

    setNote({
      ...note,
      createNoteLoader: true,
    });

    const res = await _createNote({ title: note.title, message: note.message });

    setNote({
      ...note,
      createNoteLoader: false,
    });

    if (res.success === 0)
      return setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

    setErr({
      ...err,
      type: "success",
      msg: res.message,
      show: true,
    });

    setNote({
      ...note,
      title: "",
      message: "",
    });

    await fetchNotes();
  };

  const _closeAlert = () => {
    setErr({
      ...err,
      show: false,
      msg: "",
      type: "",
    });
  };

  const _removeNote = async (id) => {
    setNote({
      ...note,
      createNoteLoader: true,
    });

    const res = await _delNote(id);

    setNote({
      ...note,
      createNoteLoader: false,
    });

    if (res.success === 0)
      return setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

    setErr({
      ...err,
      type: "success",
      msg: res.message,
      show: true,
    });

    await fetchNotes();
  };

  const _openEdit = (data) => {
    setTitle(data);
  };

  const _closeEdit = () => {
    setTitle({});
  };

  const _handleEdit = (data) => {
    if (data.field === "title") {
      editNote.title = data.value;
      setEditNote({
        ...editNote,
        title: data.value,
      });
    }

    if (data.field === "body") {
      editNote.message = data.value;
      setEditNote({
        ...editNote,
        message: data.value,
      });
    }

    _editNote({ newData: editNote, oldData: title });
  };

  return (
    <AppContext.Provider
      value={{
        note,
        _handleOnchange,
        _handleSave,
        err,
        _closeAlert,
        _removeNote,
        _openEdit,
        title,
        editNote,
        _closeEdit,
        _handleEdit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
