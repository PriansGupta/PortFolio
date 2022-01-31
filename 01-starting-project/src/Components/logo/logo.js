import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./logo.css";

const Logo = (props) => {
  return (
    <Fragment>
      <a href="#home" className="dec">
        <div
          className={`logo_container ${props.scrollDet > 99 ? "shift" : ""}`}
        >
          <div className="circle"></div>
          <div className="name">
            <h1 className="logo_name">PRI</h1>
            <div className="triangle"></div>
            <h1 className="logo_name">NS_</h1>
          </div>
        </div>
      </a>
    </Fragment>
  );
};

export default Logo;
