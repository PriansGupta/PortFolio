import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import Transition from "react-transition-group/Transition";
import "./navigation.css";
import Thanks from "../ThankModal/Thanks";

const Navigation = (props) => {
  let CurrPath = window.location.pathname;
  const [selected, OptionsChangeHandler] = useState(1);
  const [slider, SliderHandler] = useState(false);
  const [display, SetDisplay] = useState(false);

  const MessageHandler = () => {
    setTimeout(() => {
      if (CurrPath === "/Home" || CurrPath === "/") SetDisplay(true);
    }, 100);
  };

  const DisplayChanger = () => {
    if (CurrPath === "/Home" || CurrPath === "/") SetDisplay(false);
  };

  const SLiderChangeHandler = () => {
    SliderHandler(!slider);
    props.shift(slider);
  };
  const SelectedOptionsHandler_1 = () => {
    OptionsChangeHandler(1);
  };
  const SelectedOptionsHandler_2 = () => {
    OptionsChangeHandler(2);
  };
  const SelectedOptionsHandler_3 = () => {
    OptionsChangeHandler(3);
  };
  const SelectedOptionsHandler_4 = () => {
    MessageHandler();
    OptionsChangeHandler(4);
  };

  useEffect(() => {
    if (props.scrollDet < 320) OptionsChangeHandler(1);
  }, [props.scrollDet]);

  useEffect(() => {
    if (props.scrollDet > 320 && props.scrollDet < 1000)
      OptionsChangeHandler(2);
  }, [props.scrollDet]);

  useEffect(() => {
    if (props.scrollDet > 1000 && props.scrollDet < 1600)
      OptionsChangeHandler(3);
  }, [props.scrollDet]);
  useEffect(() => {
    if (props.scrollDet > 1600)
      OptionsChangeHandler(-1);
  }, [props.scrollDet]);

  return (
    <Fragment>
      <Transition in={display} timeout={400} mountOnEnter unmountOnExit>
        {(state) => (
          <Thanks
            color="grey"
            icon="ribbon"
            text="Projects will be listed Soon."
            onClose={DisplayChanger}
            display={state}
          ></Thanks>
        )}
      </Transition>

      <div className={`navigation_container ${slider ? "shrink" : ""}`}>
        <div
          className={`open_close_bt ${slider ? "shrink_bt" : ""}`}
          onClick={SLiderChangeHandler}
        >
          <span className="icon_slider">
            <ion-icon
              name={`chevron-${slider ? "back" : "forward"}-outline`}
            ></ion-icon>
          </span>
        </div>
        <div
          className={`menu_options ${slider ? "shrink_options" : ""} ${
            CurrPath === "/Home" || CurrPath === "/"
              ? "HomePageMenu"
              : "KnowMoreMenu"
          }`}
        >
          <ul>
            <a href="#home">
              <li className={`${selected === 1 ? "active" : ""}`}>
                <span
                  className={`icon_name ${selected === 1 ? "active" : ""}`}
                  onClick={SelectedOptionsHandler_1}
                >
                  <ion-icon
                    name={`${
                      CurrPath === "/Home" || CurrPath === "/"
                        ? "home"
                        : "medal"
                    }`}
                  ></ion-icon>
                </span>
                {`${
                  CurrPath === "/Home" || CurrPath === "/"
                    ? "Home"
                    : "Qualifications"
                }`}
              </li>
            </a>
            <a href="#skills">
              <li className={`${selected === 2 ? "active" : ""}`}>
                <span className="icon_name" onClick={SelectedOptionsHandler_2}>
                  <ion-icon
                    name={`${
                      CurrPath === "/Home" || CurrPath === "/"
                        ? "hand-left"
                        : "ribbon"
                    }`}
                  ></ion-icon>
                </span>
                {`${
                  CurrPath === "/Home" || CurrPath === "/" ? "Skills" : "Badges"
                }`}
              </li>
            </a>
            <a href="#about">
              <li className={`${selected === 3 ? "active" : ""}`}>
                <span className="icon_name" onClick={SelectedOptionsHandler_3}>
                  <ion-icon
                    name={`${
                      CurrPath === "/Home" || CurrPath === "/"
                        ? "information-circle"
                        : "medal"
                    }`}
                  ></ion-icon>
                </span>
                {`${
                  CurrPath === "/Home" || CurrPath === "/"
                    ? "About"
                    : "Achievements"
                }`}
              </li>
            </a>
            {CurrPath === "/Home" || CurrPath === "/" ? (
              <li className={`${selected === 4 ? "active" : ""}`}>
                <span className="icon_name" onClick={SelectedOptionsHandler_4}>
                  <ion-icon name="apps"></ion-icon>
                </span>
                Projects
              </li>
            ) : (
              <Link to="/Home">
                <li className={`${selected === 4 ? "active" : ""}`}>
                  <span
                    className="icon_name"
                    onClick={SelectedOptionsHandler_4}
                  >
                    <ion-icon name="arrow-back"></ion-icon>
                  </span>
                  Back
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
