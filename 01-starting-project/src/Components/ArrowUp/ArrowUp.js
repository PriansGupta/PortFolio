import React, { Fragment } from "react";
import "./ArrowUp.css";

const ToggleButton = (props) => {
  return (
    <Fragment>
      <span className={`arrowup ${props.Down ? "Down" : ""}`}>
        <a href="#home">
          <ion-icon name="chevron-up"></ion-icon>
        </a>
      </span>
    </Fragment>
  );
};

export default ToggleButton;
