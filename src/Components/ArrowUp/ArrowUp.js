import React, { Fragment } from "react";
import "./ArrowUp.css";

const ToggleButton = () => {
  return (
    <Fragment>
      <span className="arrowup">
        <a href="#home">
          <ion-icon name="chevron-up"></ion-icon>
        </a>
      </span>
    </Fragment>
  );
};

export default ToggleButton;
