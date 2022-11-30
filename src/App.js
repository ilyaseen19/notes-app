import AuthContextProvider from "./libs/context/authContext";
import Main from "./main";

function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}

export default App;
