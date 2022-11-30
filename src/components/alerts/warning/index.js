import React from "react";

export default function WarnnigAlert(props) {
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
        width: "30rem",
        display: "flex",
        margin: "auto",
        height: "1.8rem",
        alignItems: "center",
        fontSize: 14,
        marginBottom: 3,
      }}
    >
      <button
        type="button"
        className="close"
        onClick={props.onClose}
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
