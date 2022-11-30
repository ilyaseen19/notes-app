import { notesBaseUrl } from "../libs/endpoints";

const _delNote = async (_id) => {
  let result = {};
  try {
    const url = notesBaseUrl + "removeNote/" + _id;

    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        result = res;
      });
  } catch (error) {
    console.log(error);
    result = { success: 0, message: "Cannot connect to server" };
  }

  return result;
};

export default _delNote;
