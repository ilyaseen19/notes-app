import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

export default function Register() {
  const { _handleOnchange, input, _register, loader, err, _closeAlert } =
    React.useContext(AuthContext);
  return (
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <sapn className="h1">
          <b>NOTES</b> APP
        </sapn>
      </div>
      <div className="card-body">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              value={input.userName}
              onChange={(e) =>
                _handleOnchange({ field: "userName", value: e.target.value })
              }
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={input.password}
              onChange={(e) =>
                _handleOnchange({ field: "pass", value: e.target.value })
              }
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button
                type="button"
                onClick={loader ? null : _register}
                className="btn btn-primary btn-block"
              >
                {loader ? (
                  <span className="spinner-border text-white spinner-border-sm"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <p className="mb-0">
          <Link to="/" className="text-center">
            already a member? Login
          </Link>
        </p>
      </div>
      {/* /.card-body */}
    </div>
  );
}
