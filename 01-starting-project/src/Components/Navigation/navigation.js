import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Transition from "react-transition-group/Transition";
import "./navigation.css";
import Thanks from "../ThankModal/Thanks";

const Navigation = (props) => {
  const [selected, OptionsChangeHandler] = useState(1);
  const [slider, SliderHandler] = useState(false);
  const [display, SetDisplay] = useState(false);

  const MessageHandler = () => {
    setTimeout(() => {
      SetDisplay(true);
    }, 100);
  };

  const DisplayChanger = () => {
    SetDisplay(false);
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
    if (props.scrollDet < 350) OptionsChangeHandler(1);
  }, [props.scrollDet]);

  useEffect(() => {
    if (props.scrollDet > 550 && props.scrollDet < 1150)
      OptionsChangeHandler(2);
  }, [props.scrollDet]);

  useEffect(() => {
    if (props.scrollDet > 1150 && props.scrollDet < 1530)
      OptionsChangeHandler(3);
  }, [props.scrollDet]);

  return (
    <Fragment>
      <Transition in={display} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <Thanks
            color="orange"
            icon="cube"
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
        <div className={`menu_options ${slider ? "shrink_options" : ""} `}>
          <ul>
            <a href="#home">
              <li className={`${selected === 1 ? "active" : ""}`}>
                <span
                  className={`icon_name ${selected === 1 ? "active" : ""}`}
                  onClick={SelectedOptionsHandler_1}
                >
                  <ion-icon name="home"></ion-icon>
                </span>
                Home
              </li>
            </a>
            <a href="#skills">
              <li className={`${selected === 2 ? "active" : ""}`}>
                <span className="icon_name" onClick={SelectedOptionsHandler_2}>
                  <ion-icon name="hand-left"></ion-icon>
                </span>
                Skills
              </li>
            </a>
            <a href="#about">
              <li className={`${selected === 3 ? "active" : ""}`}>
                <span className="icon_name" onClick={SelectedOptionsHandler_3}>
                  <ion-icon name="information-circle"></ion-icon>
                </span>
                About
              </li>
            </a>
            <li className={`${selected === 4 ? "active" : ""}`}>
              <span className="icon_name" onClick={SelectedOptionsHandler_4}>
                <ion-icon name="book"></ion-icon>
              </span>
              Projects
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
