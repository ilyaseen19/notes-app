import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

export default function Login() {
  const { _login } = React.useContext(AuthContext);
  
  return (
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <a href="../../index2.html" className="h1">
          <b>NOTES</b> APP
        </a>
      </div>
      <div className="card-body">
        <form>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
                type="submit"
                onClick={_login}
                className="btn btn-primary btn-block"
              >
                Sign In
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
  );
}
