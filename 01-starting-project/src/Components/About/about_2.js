import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Resume from "../../Assets/Priyansh_Gupta.pdf";
import { Fragment } from "react/cjs/react.production.min";
import User from "../../Assets/User_Prians.png";
import "./about_2.css";
import Tilt from "react-parallax-tilt";

const About = () => {
  const [hoverState, SetHoverState] = useState(false);

  const MouseLeave = () => {
    SetHoverState(false);
  };
  const MouseEnter = () => {
    console.log(true);
    SetHoverState(true);
  };
  return (
    <Fragment>
      <Tilt
        gyroscope={true}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        className="tilt"
      >
        <div className="card-container">
          <Tilt>
            <img className="round" src={User} alt="user" />
          </Tilt>
          <h3>Priyansh Gupta</h3>
          <strong>2nd Year B.Tech HBTU</strong>
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
      </Tilt>
    </Fragment>
  );
};

export default About;
