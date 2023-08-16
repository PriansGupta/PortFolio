import React, { useState } from "react";
import Resume from "../../Assets/Priyansh_Gupta_CV.pdf";
import { Fragment } from "react/cjs/react.production.min";
import User from "../../Assets/User_Prians.png";
import "./about_2.css";

const About = () => {
  const [hoverState, SetHoverState] = useState(false);

  const MouseLeave = () => {
    SetHoverState(false);
  };
  const MouseEnter = () => {
    SetHoverState(true);
  };
  return (
    <Fragment>
      <div className="card-container">
        <img className="round" src={User} alt="user" />
        <h3>Priyansh Gupta</h3>
        <strong>Final B.Tech ET HBTU</strong>
        <h6>Kanpur, Uttar Pradesh</h6>
        <p className="intro_me">
          "I am a positive, enthusiastic and competent Web Developer who, over
          the years, has built up a diverse range of skills, qualities and
          attributes that guarantee I will perform highly in this role...."
        </p>
        <a href={Resume} download>
          <div
            className={`know_more ${hoverState ? "over" : ""}`}
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
          >
            <span className="side_arrow">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            <p>Resume</p>
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export default About;
