import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./Components/Header/Header";
import Icons from "./Components/Icons/icons";
import Introduction from "./Components/Introduction/Intro";
import Contact_Me from "./Components/Contact_Me/contact_me";
import Foot from "./Components/footer/footer";
import About from "./Components/About/about_2";
import ToggleButton from "./Components/ArrowUp/ArrowUp";
import ChatBt from "./Components/ChatIcon/chat";
import Skill from "./Components/skillls/Skills";

function App() {
  var pos = window.scrollY;
  const [scrollPos, SetScrollPos] = useState(pos);
  var [offset, SetOffset] = useState(0);
  console.log(offset);
  window.onscroll = (e) => {
    SetScrollPos(pos);
    offset = window.pageYOffset;
    SetOffset(offset);
  };
  return (
    <Fragment>
      <div id="home"></div>
      <Header scrollDet={scrollPos}></Header>
      <Icons></Icons>
      <ToggleButton></ToggleButton>sssss
      <ChatBt></ChatBt>
      <section className="Intro_sec">
        <Introduction></Introduction>
      </section>
      <div id="skills"></div>
      <h1 className="skill_heading">Skills_</h1>
      <section className="skills">
        <Skill></Skill>
      </section>
      <section
        id="about"
        className="about_me"
        style={{ backgroundPositionY: `${-200 + offset * 0.7}px` }}
      >
        <h1 className="about_heading">About_Me_</h1>
        <About></About>
      </section>
      <section id="contact" className="contact_me">
        <Contact_Me></Contact_Me>
      </section>
      <footer className="footer">
        <Foot></Foot>
      </footer>
    </Fragment>
  );
}

export default App;
