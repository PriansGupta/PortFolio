import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./skillCard.css";
import html from "../../Assets/html.png";
import react from "../../Assets/react.png";
import javascript from "../../Assets/javascript.png";
import css from "../../Assets/css3.png";

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

  var hoverSkill;
  if (hoverState)
    hoverSkill = (
      <img
        src={Image}
        alt={props.Name}
        className="skill_image"
        style={
          ({ width: `${hoverState ? "20%" : "40%"}` },
          { transform: `${hoverState ? "scale(1.5)" : "scale(1)"}` })
        }
      ></img>
    );
  else
    hoverSkill = (
      <img
        src={Image}
        alt={props.Name}
        className="skill_image"
        style={
          ({ width: `${hoverState ? "20%" : "40%"}` },
          { transform: `${hoverState ? "scale(1)" : "scale(1)"}` })
        }
      ></img>
    );
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
          className="Image_details"
          style={{ backgroundColor: `${props.color}` }}
        >
          {hoverSkill}
        </div>
        <div
          className="skill_name"
          style={{ border: `4px solid ${props.color}` }}
        >
          <h2 className="Heading">{props.Name}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillCard;
