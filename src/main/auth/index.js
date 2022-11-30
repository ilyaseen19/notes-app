import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Login from "./login";
import Register from "./register";
import WarnnigAlert from "../../components/alerts/warning";

export default function Auth() {
  const { err, _closeAlert } = React.useContext(AuthContext);

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {err.show ? (
          <WarnnigAlert type={err.type} msg={err.msg} onClose={_closeAlert} />
        ) : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
}
