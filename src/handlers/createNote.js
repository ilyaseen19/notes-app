import { notesBaseUrl } from "../libs/endpoints";

const _createNote = async (data) => {
  let result = {};
  try {
    const url = notesBaseUrl + "createNote";

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        noteBody: data.message,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        result = res;
      });
  } catch (error) {
    console.log(error);
    result = { success: 0, message: "Internet connection error" };
  }

  return result;
};

export default _createNote;
