import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./Thanks.css";

const Thanks = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Fragment>
        <div className="Thnx modal">
          <span className="close_bt" onClick={props.onClose}>
            <ion-icon name="close"></ion-icon>
          </span>
          <div
            className="Indi_thnx"
            style={{ border: `solid 3.5px ${props.color}` }}
          >
            <span className="check_icon" style={{ color: `${props.color}` }}>
              <ion-icon name={props.icon}></ion-icon>
            </span>
          </div>
          <div className="Msg">{props.text}</div>
        </div>
      </Fragment>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          color={props.color}
          icon={props.icon}
          text={props.text}
          onClose={props.onClose}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          color={props.color}
          icon={props.icon}
          text={props.text}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Thanks;
