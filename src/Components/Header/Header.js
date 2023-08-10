import { Fragment } from "react";
import React from "react";
import "./Header.css";
import Navigation from "../Navigation/navigation";
import Logo from "../logo/logo";
import LogoPhone from "../logo/logoPhone";
import { useState } from "react";

const Header = (props) => {
  const [slide, SetSlide] = useState(true);
  const ClickedBt = (status) => {
    SetSlide(status);
  };

  return (
    <Fragment>
      <header
        className={`Header ${props.scrollDet > 99 ? "heightDec" : ""} ${
          props.HeaderDown ? "down" : ""
        }`}
      >
        <Logo scrollDet={props.scrollDet}></Logo>
        <LogoPhone slide={slide}></LogoPhone>
        <Navigation scrollDet={props.scrollDet} shift={ClickedBt}></Navigation>
      </header>
    </Fragment>
  );
};

export default Header;
