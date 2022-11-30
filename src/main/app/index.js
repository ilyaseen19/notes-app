import React from "react";
import WarnnigAlert from "../../components/alerts/warning";
import { AppContext } from "../../context/appContext";

export default function MainApp() {
  const { _handleOnchange, note, _handleSave, err, _removeNote } =
    React.useContext(AppContext);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper pb-5">
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
              value={note.title}
              onChange={(e) =>
                _handleOnchange({ field: "title", value: e.target.value })
              }
            />
            <input
              style={{ width: "70%", height: "1.8rem" }}
              type="text"
              className="form-control"
              placeholder="type the body of your note..."
              aria-label="note"
              value={note.message}
              onChange={(e) =>
                _handleOnchange({ field: "body", value: e.target.value })
              }
            />
            <button
              type="button"
              className="btn btn-success ml-2"
              onClick={_handleSave}
              style={{
                width: "5%",
                height: "1.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {note.createNoteLoader ? (
                <span className="spinner-border text-dark spinner-border-sm"></span>
              ) : (
                <i className="fa fa-save" />
              )}
            </button>
          </div>
          {err.show ? <WarnnigAlert type={err.type} msg={err.msg} /> : null}
          <hr />
          {note.getNoteLoader ? (
            <span className="spinner-border text-muted spinner-border-sm"></span>
          ) : note.notes === undefined || note.notes.length === 0 ? (
            <div>No notes found, please create one</div>
          ) : (
            note.notes.map((note, index) => {
              return (
                <div
                  key={index}
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
                      className="form-control mt-2"
                      placeholder={note.title}
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
                      placeholder={note.note}
                      aria-label="note"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn ml-1"
                    style={{
                      alignSelf: "flex-end",
                      width: "3%",
                      height: "1.8rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa fa-edit" style={{ color: "blue" }} />
                  </button>
                  <button
                    type="button"
                    className="btn ml-1"
                    onClick={() => _removeNote(note._id)}
                    style={{
                      alignSelf: "flex-end",
                      width: "3%",
                      height: "1.8rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa fa-trash" style={{ color: "red" }} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
