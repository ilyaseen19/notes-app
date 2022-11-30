import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider(props) {
  const [isLogged, setIsLogged] = React.useState(false);

  const _login = async (data) => {
    setIsLogged(true);
  };
  return (
    <AuthContext.Provider value={{ isLogged, _login }}>
      {props.children}
    </AuthContext.Provider>
  );
}
