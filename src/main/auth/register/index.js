import { Link } from "react-router-dom";

export default function Register() {
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
            <input
              type="text"
              className="form-control"
              placeholder="User name"
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
              <button type="submit" className="btn btn-primary btn-block">
                Register
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
