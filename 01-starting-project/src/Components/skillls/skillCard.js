import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import './skillCard.css';
import html from '../../Assets/html.png';
import react from '../../Assets/react.png';
import javascript from '../../Assets/javascript.png';
import css from '../../Assets/css3.png';

const SkillCard=(props)=>{
const [hoverState,SetHoverState]=useState(false);
const HoverEnter=()=>{
    SetHoverState(true);
}
const HoverLeave=()=>{
    SetHoverState(false);
};

var Image;
if(props.ImgName=='html')
Image=html;
else if(props.ImgName=='css')
Image=css;
else if(props.ImgName=='javascript')
Image=javascript;
else if(props.ImgName=='react')
Image=react;

    return(
        <Fragment>
         <div className="skill_card" onMouseEnter={HoverEnter} onMouseLeave={HoverLeave} style={{boxShadow:`${hoverState?'0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)':' 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)'}`},{border:`2px solid ${props.color}`}}>
             <div className="skill_card_img" style={{height:`${hoverState?'30%':'90%'}`},{backgroundColor:`${props.color}`}}>
                 <img className="skill_img" src={Image} alt={props.Name} style={{width:`${hoverState?'20%':'60%'}`},{transform:`${hoverState?'scale(3)':'scale(1)'}`}}></img>
             </div>
             <div className="skill_card_details" >
                 <h2  className="skill_card_header">
                     {props.Name}
                 </h2>
                 {/* <div className="skill_card_level">
                     <ul>
                         <li>{props.info}</li>
                         <li>{`My Level : ${props.level}`}</li>
                     </ul>
                 </div> */}
             </div>
         </div>
        </Fragment>
    );

};

export default SkillCard;