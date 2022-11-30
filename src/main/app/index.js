export default function MainApp() {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item d-none d-sm-inline-block">
              <span className="nav-link">Welcome user name</span>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span
                className="nav-link"
                // data-widget="fullscreen"
                href="#"
                role="button"
                title="log out"
              >
                <i className="fas fa-power-off" />
              </span>
            </li>
          </ul>
        </nav>

        <div
          className="content-wrapper"
          style={{
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 20 }}>
            Create and organise your notes
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "center",
              height: "5rem",
              marginTop: "2rem",
              margin: "auto",
            }}
          >
            <input
              style={{ width: "15%", height: "1.8rem" }}
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="title"
            />
            <input
              style={{ width: "70%", height: "1.8rem" }}
              type="text"
              className="form-control"
              placeholder="type the body of your note..."
              aria-label="note"
            />
            <button
              type="button"
              className="btn btn-success ml-2"
              style={{
                width: "5%",
                height: "1.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa fa-save" />
            </button>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              width: "80%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "85%",
              }}
            >
              <input
                style={{
                  width: "15%",
                  height: "1.8rem",
                  backgroundColor: "aliceblue",
                }}
                type="text"
                disabled={true}
                className="form-control mb-1"
                placeholder="Title"
                aria-label="title"
              />
              <input
                style={{
                  width: "100%",
                  height: "1.8rem",
                  backgroundColor: "aliceblue",
                }}
                type="text"
                disabled={true}
                className="form-control"
                placeholder="type the body of your note..."
                aria-label="note"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary ml-2"
              style={{
                alignSelf: "flex-end",
                width: "5%",
                height: "1.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa fa-edit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
