import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";

export default function Auth() {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
}
