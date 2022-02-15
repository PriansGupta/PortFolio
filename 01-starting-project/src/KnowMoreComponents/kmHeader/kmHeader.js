import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/logo/logo";
import "./kmHeader.css";

const KmHeader = () => {
  return (
    <div className="KmHeader">
      <Logo className="KmLogo"></Logo>
      <Link to="/Home" className="back_link">
        <span className="back_icon">
          <ion-icon name="return-down-back"></ion-icon>
        </span>
      </Link>
    </div>
  );
};

export default KmHeader;
