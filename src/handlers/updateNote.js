import { notesBaseUrl } from "../libs/endpoints";

const _editNote = (data) => {
  const { newData, oldData } = data;
  try {
    const url = notesBaseUrl + "updateNote/" + oldData._id;

    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: newData.title === "" ? oldData.title : newData.title,
        noteBody: newData.message === "" ? oldData.note : newData.message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default _editNote;
