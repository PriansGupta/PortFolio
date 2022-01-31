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
          <div className="Indi_thnx">
            <span className="check_icon">
              <ion-icon name="cube"></ion-icon>
            </span>
          </div>
          <div className="Msg">
            Empty...☹<br></br>Projects Will be listed Soon.
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Thanks;
