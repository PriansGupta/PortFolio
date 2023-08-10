import React, { Fragment } from "react";
import "./Intro.css";
import ReactTypingEffect from "react-typing-effect";

const Introduction = () => {
  return (
    <Fragment>
      <div className="Main_page">
        <div className="Intro">
          <h1 className="line_1">
            <ReactTypingEffect
              text={["I'm Priyansh"]}
              typingDelay={500}
              speed={100}
              eraseSpeed={300}
              eraseDelay={1000}
              cursor={"_"}
            />
          </h1>
          <h3 className="line_2">Full Stack Webdeveloper</h3>
          <p className="line_3">UI/UX , Interactive Interface</p>
          <p className="line_4">and Responsive design......</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Introduction;
