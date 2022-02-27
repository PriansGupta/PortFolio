import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import SkillCard from "./skillCard";
import Tilt from "react-parallax-tilt";
import "./Skills.css";

const Skill = () => {
  const SkillData = [
    {
      Name: "HTML",
      ImgName: "html",
      info: "Hyper Text Mark-up Language (a system used to mark text for World Wide Web pages in order to obtain colours, style, pictures, etc.)",
      level: "90%",
      color: "rgb(255, 103, 47)",
      bgColor: "rgb(251, 219, 207)",
      id: "1_Html",
    },
    {
      Name: "CSS",
      ImgName: "css",
      info: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
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
      info: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",
      level: "80%",
      color: "#61DBFB",
      bgColor: "#61DBFB",
      id: "4_react",
    },
    {
      Name: "JSX",
      ImgName: "jsx",
      info: "JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code).",
      level: "80%",
      color: "#F0DB4F",
      bgColor: "#F0DB4F",
      id: "5_jsx",
    },
    {
      Name: "Redux",
      ImgName: "redux",
      info: "Redux is a state managing library used in JavaScript apps. It simply manages the state of your application",
      level: "80%",
      color: "#ccb0f8",
      bgColor: "#ccb0f8",
      id: "6_redux",
    },
    {
      Name: "Router",
      ImgName: "router",
      info: "React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL",
      level: "80%",
      color: "#9c9789",
      bgColor: "#9c9789",
      id: "7_router",
    },
    {
      Name: "MATERIAL UI",
      ImgName: "mui",
      info: "MUI provides a customizable and accessible library of advanced components, enabling you to build your design system and develop React applications faster.",
      level: "80%",
      color: "#03fca5",
      bgColor: "#03fca5F",
      id: "8_mui",
    },
    {
      Name: "Adobe xd",
      ImgName: "Adobe",
      info: "Adobe XD is the Adobe prototyping tool for user experience and interaction designers.",
      level: "60%",
      color: "#7f7f7f",
      bgColor: "#7f7f7f",
      id: "9_adobexd",
    },
    {
      Name: "C++",
      ImgName: "c",
      info: "C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications.",
      level: "90%",
      color: "#5E97D0",
      bgColor: "#5E97D0",
      id: "10_c++",
    },
    {
      Name: "Java",
      ImgName: "java",
      info: "Java is also an object-oriented programming language that produces software for multiple platforms.",
      level: "50%",
      color: "#D0A384",
      bgColor: "#0474BB",
      id: "8_java",
    },
  ];
  const scale = 1.1;

  return (
    <Fragment>
      <div className="Skills_holder">
        {SkillData.map((x) => (
          <Tilt scale={scale} transitionSpeed={2500}>
            <SkillCard
              key={x.id}
              Name={x.Name}
              ImgName={x.ImgName}
              info={x.info}
              level={x.level}
              color={x.color}
              bgColor={x.bgColor}
            ></SkillCard>
           </Tilt>
        ))}
      </div>
    </Fragment>
  );
};

export default Skill;
