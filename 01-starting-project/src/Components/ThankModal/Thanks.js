import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import ListGroup from "react-bootstrap/ListGroup";
import "./Thanks.css";

const Thanks = (props) => {
  const is = props.text === "Projects will be listed Soon.";
  console.log(is);
  let ele;
  if (is) {
    ele = (
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          <a
            style={{ textDecoration: "none" ,color:"black"}}
            href="https://weather-app-prians.herokuapp.com/"
          >
            Weather App
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://beezpay-bcd34.web.app/"
          >
            Beez-Pay
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://priansgupta.github.io/CRUD-App/"
          >
            CRUD-App
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/PriansGupta/Babble"
          >
            Babble-ChatApp
          </a>
        </ListGroup.Item>
      </ListGroup>
    );
  } else {
    ele = props.text;
  }
  const Backdrop = (props) => {
    return (
      <div
        className={`backdrop ${props.display ? "openBd" : "closeBd"}`}
        onClick={props.onClose}
      />
    );
  };

  const ModalOverlay = (props) => {
    return (
      <Fragment>
        <div
          className={`Thnx modal ${
            props.display === "entering"
              ? "openMd"
              : props.display === "exiting"
              ? "closeMd"
              : null
          }`}
        >
          <span className="close_bt" onClick={props.onClose}>
            <ion-icon name="close"></ion-icon>
          </span>
          {!is && (
            <div
              className="Indi_thnx"
              style={{ border: `solid 3.5px ${props.color}` }}
            >
              <span className="check_icon" style={{ color: `${props.color}` }}>
                <ion-icon name={props.icon}></ion-icon>
              </span>
            </div>
          )}
          <div className="Msg">{ele}</div>
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
          display={props.display}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          color={props.color}
          icon={props.icon}
          text={props.text}
          onClose={props.onClose}
          display={props.display}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Thanks;
