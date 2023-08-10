import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./icons.css";
import Tilt from "react-parallax-tilt";
const Icons = () => {
  const scale = 1.2;
  return (
    <Fragment>
      <div className="icons">
        <Tilt scale={scale} transitionSpeed={2500}>
          <span className="icon_1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/PriansGupta"
              className="link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </span>
        </Tilt>
        <Tilt scale={scale} transitionSpeed={2500}>
          <span className="icon_2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/PriansGupta"
              className="link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </span>
        </Tilt>
        <Tilt scale={scale} transitionSpeed={2500}>
          <span className="icon_3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_prians_gupta/"
              className="link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </span>
        </Tilt>
      </div>
    </Fragment>
  );
};

export default Icons;
