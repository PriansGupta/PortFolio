import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from './Components/Header/Header';
import Icons from "./Components/Icons/icons";
import Introduction from './Components/Introduction/Intro'
import SkillMeter_1 from "./Components/skillls/skills_1";
import SkillMeter_2 from "./Components/skillls/skill_2";
import Intro_BackG from "../src/Assets/Intro_BackG.jpg"; 
import Contact_me from "./Components/Contact_me/contact_me";
import Foot from "./Components/footer/footer";
import About_2 from "./Components/About_2/about_2";
import ToggleButton from "./Components/ArrowUp/ArrowUp";
import ChatBt from "./Components/ChatIcon/chat";


function App() {
 var pos=window.scrollY;
 const [scroll,SetScroll]=useState(false);
 const [scrollPos,SetScrollPos]=useState(pos);
 var [offset,SetOffset]=useState(0);
 const back_img={
   background:Intro_BackG
  };
  
//  console.log(scrollPos);
 console.log(offset);
 const ScrollOptions=['Home','Skills','About','Contact'];
 window.onscroll=(e)=>{
  SetScrollPos(pos);
  SetScroll(true);
  offset=window.pageYOffset;
  SetOffset(offset);
};
  return (
    <Fragment>
      
      <div id="home"></div>
      <Header scrollDet={scrollPos}></Header>
      <Icons></Icons>
      <ToggleButton></ToggleButton>
      <ChatBt></ChatBt>
      <section className="Intro_sec">
      <Introduction ></Introduction>
      </section>
      <div id="skills"></div>
       <h1  className="skill_heading">Skills_</h1>
      <section  className="skills">
      <SkillMeter_2></SkillMeter_2>
      <SkillMeter_1></SkillMeter_1>
      </section>
      <section id="about" className="about_me" style={{backgroundPositionY: `${-200+offset*0.7}px`}}>
      <h1 className="about_heading">About_Me_</h1>
      <About_2></About_2>
      </section>
      <section id="contact" className="contact_me">
      <Contact_me></Contact_me>
      </section>
      <footer className="footer">
      <Foot></Foot>
      </footer>
    </Fragment>
  );
}


export default App;
