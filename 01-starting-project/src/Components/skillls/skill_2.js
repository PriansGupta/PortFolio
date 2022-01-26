import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './skills.css';

const SkillMeter_2=()=>{
    const skill_data_2=[
        {
            name:"HTML",
            level:90,
            color:"blue",
            id:"html"
        },
        {
            name:"CSS",
            level:90,
            color:"purple",
            id:"css"
        },
        {
            name:"JavaScript",
            level:70,
            color:"yellow",
            id:"Js"
        }
    ];

    
return(
    <Fragment>
      
      <div className="skill_elements">
      {
           skill_data_2.map((entry)=>(
            <div key={entry.id} className="container">
            <div className="circular-progress" style={{background:`conic-gradient(${entry.color} ${entry.level*3.6}deg,#cadcff ${entry.level*3.6}deg)`}}>
                <div className="value_container"><p className="level">{`${entry.level}%`}</p></div>
            </div>
            {entry.name}
        </div>
           ))
       }
      </div>
      
    </Fragment>
);
};

export default SkillMeter_2;