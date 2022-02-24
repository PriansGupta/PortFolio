import React from "react";
// import { Link } from "react-router-dom";
import Resume from "../../Assets/Priyansh_Gupta.pdf"
import { Fragment } from "react/cjs/react.production.min";
import User from "../../Assets/User_Prians.png";
import "./about_2.css";

const About = () => {
  const clicked = () => {
    console.log("clicked");
  };

  return (
    <Fragment>
      <div className="card-container">
        <img className="round" src={User} alt="user" />
        <h3>Priyansh Gupta</h3>
        <strong>2nd Year B.Tech HBTU</strong>
        <h6>Kanpur, Uttar Pradesh</h6>
        <p className="intro_me">
          "I am a positive, enthusiastic and competent Web Developer who, over
          the years, has built up a diverse range of skills, qualities and
          attributes that guarantee I will perform highly in this role...."
        </p>
        <div className="know_more" onClick={clicked}>
          Download Resume
          <span className="side_arrow">
            <a href={Resume} download><ion-icon name="download"></ion-icon></a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
