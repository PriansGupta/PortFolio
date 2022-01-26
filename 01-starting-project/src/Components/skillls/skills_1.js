import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './skills.css';

const SkillMeter_1=()=>{

    const skill_data_1=[
        {
            name:"ReactJs",
            level:60,
            color:"red",
            id:"Rjs"
        },
        {
            name:"Redux",
            level:65,
            color:"orange",
            id:"redux"
        },
        {
            name:"Router",
            level:50,
            color:"green",
            id:"router"
        }
    ];
return(
    <Fragment>
      
      <div className="skill_elements">
      {
           skill_data_1.map((entry)=>(
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

export default SkillMeter_1;