import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../Components/Header/Header";
import Icons from "../Components/Icons/icons";
import Introduction from "../Components/Introduction/Intro";
import ContactMe from "../Components/Contact_Me/contact_me";
import Foot from "../Components/footer/footer";
import About from "../Components/About/about_2";
import ToggleButton from "../Components/ArrowUp/ArrowUp";
import ChatBt from "../Components/ChatIcon/chat";
import Skill from "../Components/skillls/Skills";
import { useEffect } from "react";

const Home = () => {
  let pos = window.scrollY;

  const [scrollPos, SetScrollPos] = useState(pos);

  let [offset, SetOffset] = useState(0);

  const [HeaderDown, SetHeaderDown] = useState(false);

  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      SetHeaderDown(false);
    } else if (y < window.scrollY) {
      SetHeaderDown(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [y, handleNavigation]);

  localStorage.setItem("Scroll", offset);
  const ScrollHis = localStorage.getItem("Scroll");

  window.onscroll = (e) => {
    SetScrollPos(pos);
    offset = window.pageYOffset;
    SetOffset(offset);
  };
  return (
    <Fragment>
      <div id="home"></div>
      <Header
        scrollDet={ScrollHis !== 0 ? ScrollHis : scrollPos}
        HeaderDown={HeaderDown}
      ></Header>
      <Icons></Icons>
      <ToggleButton Down={HeaderDown}></ToggleButton>
      <ChatBt Down={HeaderDown}></ChatBt>
      <div className="FullApplication">
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
          <ContactMe></ContactMe>
        </section>
        <footer className="footer">
          <Foot></Foot>
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
