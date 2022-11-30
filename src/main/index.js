import MainApp from "./app";
import Auth from "./auth";

export default function Main() {
  const isLogged = false;
  if (!isLogged) return <Auth />;

  return <MainApp />;
}
