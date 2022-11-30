import { notesBaseUrl } from "../libs/endpoints";

const _getnotes = async () => {
  let result = {};
  try {
    let url = notesBaseUrl + "getNotes";

    let res = await fetch(url).catch((err) => {
      if (err) return (result = { success: 0, message: "Failed to fetch" });
    });
    let feedback = await res.json();
    result = feedback;
  } catch (error) {
    console.log(error);
    result = { success: 0, message: "Internet connection error" };
  }

  return result;
};

export default _getnotes;
