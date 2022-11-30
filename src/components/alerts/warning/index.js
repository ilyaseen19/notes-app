import React from "react";
import { AppContext } from "../../../context/appContext";

export default function WarnnigAlert(props) {
  const { _closeAlert } = React.useContext(AppContext);
  const _renderAlertType = () => {
    if (props.type === "error") return "alert alert-danger alert-dismissible";
    if (props.type === "warning")
      return "alert alert-warning alert-dismissible";
    if (props.type === "success")
      return "alert alert-success alert-dismissible";
    if (props.type === "info") return "alert alert-info alert-dismissible";
  };
  return (
    <div
      className={_renderAlertType()}
      style={{
        width: "40%",
        display: "flex",
        margin: "auto",
        height: "1.8rem",
        alignItems: "center",
        fontSize: 14,
      }}
    >
      <button
        type="button"
        className="close"
        onClick={_closeAlert}
        data-dismiss="alert"
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          height: "1.8rem",
        }}
      >
        &times;
      </button>
      <div style={{ fontSize: 15 }}>
        <i className="icon fas fa-exclamation-triangle"></i> Alert! {props.msg}
      </div>
    </div>
  );
}
