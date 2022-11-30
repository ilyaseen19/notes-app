import React from "react";
import { useHistory } from "react-router-dom";
import _createNewUser from "../handlers/createUser";
import _signIn from "../handlers/login";

export const AuthContext = React.createContext();

export default function AuthContextProvider(props) {
  const history = useHistory();

  const [err, setErr] = React.useState({
    type: "",
    msg: "",
    show: false,
  });
  const [isLogged, setIsLogged] = React.useState(false);

  const [user, setUser] = React.useState(false);

  const [input, setInput] = React.useState({
    userName: "",
    password: "",
  });

  const [loader, setLoader] = React.useState(false);

  const _login = async (data) => {
    if (input.userName === "" || input.password === "")
      return setErr({
        ...err,
        type: "warning",
        msg: "both fields are required",
        show: true,
      });

    setLoader(true);

    let res = await _signIn(input);

    setLoader(false);

    if (res.success === 0)
      return setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

    res.data.isLogged = true;

    setUser(res.data);

    localStorage.setItem("user", JSON.stringify(res.data));

    setInput({
      ...input,
      userName: "",
      password: "",
    });

    return setIsLogged(true);
  };

  const _closeAlert = () => {
    setErr({
      ...err,
      show: false,
      msg: "",
      type: "",
    });
  };

  const _handleOnchange = (data) => {
    if (data.field === "userName")
      return setInput({
        ...input,
        userName: data.value,
      });

    if (data.field === "pass")
      return setInput({
        ...input,
        password: data.value,
      });
  };

  const _register = async () => {
    if (input.userName === "" || input.password === "")
      return setErr({
        ...err,
        type: "warning",
        msg: "both fields are required",
        show: true,
      });

    setLoader(true);

    let res = await _createNewUser(input);

    setLoader(false);

    if (res.success === 0)
      return setErr({
        ...err,
        type: "error",
        msg: res.message,
        show: true,
      });

    setInput({
      ...input,
      userName: "",
      password: "",
    });

    return history.push("/");
  };

  const _logOut = () => {
    localStorage.removeItem("user");
    setUser({});
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        _login,
        _handleOnchange,
        input,
        _register,
        loader,
        err,
        _closeAlert,
        setIsLogged,
        setUser,
        user,
        _logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
