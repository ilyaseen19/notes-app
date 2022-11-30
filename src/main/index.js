import React from "react";
import AppContextProvider from "../context/appContext";
import { AuthContext } from "../context/authContext";
import MainApp from "./app";
import Auth from "./auth";

export default function Main() {
  const { isLogged, user, setIsLogged, setUser, _logOut } =
    React.useContext(AuthContext);

  React.useEffect(() => {
    _getUser();
  }, []);

  const _getUser = async () => {
    let us = localStorage.getItem("user");
    let user = await JSON.parse(us);

    if (user) {
      setIsLogged(true);
      setUser(user);
    }
  };

  if (!isLogged) return <Auth />;

  return (
    <AppContextProvider>
      <MainApp user={user} onLogOut={_logOut} />
    </AppContextProvider>
  );
}
