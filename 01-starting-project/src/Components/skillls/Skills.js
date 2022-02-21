import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import SkillCard from "./skillCard";
import "./Skills.css";

const Skill = () => {
  const SkillData = [
    {
      Name: "HTML",
      ImgName: "html",
      info: "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.",
      level: "90%",
      color: "rgb(255, 103, 47)",
      bgColor: "rgb(251, 219, 207)",
      id: "1_Html",
    },
    {
      Name: "CSS",
      ImgName: "css",
      info: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      level: "85%",
      color: "#9ac0fc",
      bgColor: "#9ac0fc",
      id: "2_css",
    },
    {
      Name: "JavaScript",
      ImgName: "javascript",
      info: "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.",
      level: "80%",
      color: "#F0DB4F",
      bgColor: "#F0DB4F",
      id: "3_js",
    },
    {
      Name: "ReactJS",
      ImgName: "react",
      info: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
      level: "80%",
      color: "#61DBFB",
      bgColor: "#61DBFB",
      id: "4_react",
    },
  ];

  return (
    <Fragment>
      <div className="Skills_holder">
        {SkillData.map((x) => (
          <SkillCard
            Name={x.Name}
            ImgName={x.ImgName}
            info={x.info}
            level={x.level}
            key={x.id}
            color={x.color}
            bgColor={x.bgColor}
          ></SkillCard>
        ))}
      </div>
    </Fragment>
  );
};

export default Skill;
