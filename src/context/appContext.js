import React from "react";
import _getnotes from "../handlers/fetchNotes";

export const AppContext = React.createContext();

export default function AppContextProvider(props) {
  const [note, setNote] = React.useState({
    title: "",
    message: "",
    notes: [],
    createNoteLoader: false,
    getNoteLoader: false,
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

    if (res.success === 0)
      return setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

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

  const _handleSave = async () => {};

  return (
    <AppContext.Provider value={{ note, _handleOnchange, _handleSave }}>
      {props.children}
    </AppContext.Provider>
  );
}
