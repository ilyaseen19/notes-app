import React from "react";
import AppContextProvider from "../context/appContext";
import { AuthContext } from "../context/authContext";
import MainApp from "./app";
import Auth from "./auth";

export default function Main() {
  const { isLogged } = React.useContext(AuthContext);

  if (!isLogged) return <Auth />;

  return (
    <AppContextProvider>
      <MainApp />
    </AppContextProvider>
  );
}
