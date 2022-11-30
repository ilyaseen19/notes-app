import React from "react";
import { AuthContext } from "../libs/context/authContext";
import MainApp from "./app";
import Auth from "./auth";

export default function Main() {
  const { isLogged } = React.useContext(AuthContext);

  if (!isLogged) return <Auth />;

  return <MainApp />;
}
