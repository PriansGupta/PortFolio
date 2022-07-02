import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Transition from "react-transition-group/Transition";
import "./skillCard.css";
import html from "../../Assets/html.png";
import react from "../../Assets/react.png";
import javascript from "../../Assets/javascript.png";
import css from "../../Assets/css3.png";
import c from "../../Assets/c.png";
import java from "../../Assets/java.png";
import Adobe from "../../Assets/Adobe.png";
import JSX from "../../Assets/jsx.png";
import MUI from "../../Assets/mui.png";
import Redux from "../../Assets/redux.png";
import Router from "../../Assets/router.png";
import node from "../../Assets/node.png";
import express from "../../Assets/express.png";
import mongo from "../../Assets/mongo.png";



const SkillCard = (props) => {
  const [hoverState, SetHoverState] = useState(false);
  const HoverEnter = () => {
    SetHoverState(true);
  };
  const HoverLeave = () => {
    SetHoverState(false);
  };

  var Image;
  if (props.ImgName === "html") Image = html;
  else if (props.ImgName === "css") Image = css;
  else if (props.ImgName === "javascript") Image = javascript;
  else if (props.ImgName === "react") Image = react;
  else if (props.ImgName === "c") Image = c;
  else if (props.ImgName === "java") Image = java;
  else if (props.ImgName === "Adobe") Image = Adobe;
  else if (props.ImgName === "jsx") Image = JSX;
  else if (props.ImgName === "mui") Image = MUI;
  else if (props.ImgName === "redux") Image = Redux;
  else if (props.ImgName === "router") Image = Router;
  else if (props.ImgName === "node") Image = node;
  else if (props.ImgName === "express") Image = express;
  else if (props.ImgName === "mongo") Image = mongo;

  const HoverSkill = (props) => {
    return (
      <img
        src={Image}
        alt={props.Name}
        className="skill_image"
        style={{ display: `${hoverState ? "none" : "block"}` }}
      ></img>
    );
  };

  let information = props.info;

  const SkillInfo = (props) => {
    return (
      <div
        className={`SkillInfo_data ${
          props.display === "entering"
            ? "openDt"
            : props.display === "exiting"
            ? "closeDt"
            : null
        }`}
      >
        <p>{information}</p>
      </div>
    );
  };

  return (
    <Fragment>
      <div
        className="skill_card_holder"
        onMouseEnter={HoverEnter}
        onMouseLeave={HoverLeave}
        style={{
          boxShadow: `${
            hoverState
              ? "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)"
              : " 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)"
          }`,
        }}
      >
        <div
          className={`Image_details ${hoverState?"backhover":""}`}
          style={{
            backgroundColor: `${hoverState ? "white" : props.color}`,
            border: `4px solid ${props.color}`,
          }}
        >
          <Transition in={hoverState} timeout={400} mountOnEnter unmountOnExit>
            {(state) => <SkillInfo display={state}></SkillInfo>}
          </Transition>
          <HoverSkill></HoverSkill>
        </div>
        <div
          className="skill_name"
          style={{
            backgroundColor: `${!hoverState ? "white" : props.color}`,
            border: `4px solid ${props.color}`,
          }}
        >
          <h2
            className="Heading"
            style={{ color: `${hoverState ? "white" : "black"}` }}
          >
            {props.Name}
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillCard;
