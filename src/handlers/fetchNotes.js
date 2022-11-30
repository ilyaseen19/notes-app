import { notesBaseUrl } from "../libs/endpoints";

const _getnotes = async () => {
  let res = {};
  try {
    let url = notesBaseUrl + "getNotes";

    let res = await fetch(url);
    let feedback = await res.json();
    res = feedback;
  } catch (error) {
    console.log(error);
    res = { success: 0, message: "Internet connection error" };
  }

  return res;
};

export default _getnotes;
