import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

export default function Login() {
  const { _login, _handleOnchange, input, loader, err, _closeAlert } =
    React.useContext(AuthContext);

  return (
    <>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="../../index2.html" className="h1">
            <b>NOTES</b> APP
          </a>
        </div>
        <span style={{ margin: "auto" }}>Log in</span>
        <div className="card-body">
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="user name"
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
                  onClick={loader ? null : _login}
                  className="btn btn-primary btn-block"
                >
                  {loader ? (
                    <span className="spinner-border text-white spinner-border-sm"></span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              Register a new membership
            </Link>
          </p>
        </div>
        {/* /.card-body */}
      </div>
    </>
  );
}
