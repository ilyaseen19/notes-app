import { usersBaseUrl } from "../libs/endpoints";

const _signIn = async (data) => {
  let result = {};
  try {
    const url = usersBaseUrl + "login";

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: data.userName,
        password: data.password,
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

export default _signIn;
