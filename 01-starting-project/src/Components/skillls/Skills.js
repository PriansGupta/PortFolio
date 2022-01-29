import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import SkillCard from "./skillCard";
import './Skills.css';

const Skill=()=>{

    const SkillData=[
        {
            Name:'HTML',
            ImgName:'html',
            info:'HTML is the standard markup language for Web pages.',
            level:'90%',
            color:'rgb(255, 103, 47)',
            bgColor:'rgb(251, 219, 207)',
            id:'1_Html'
        },
        {
            Name:'CSS',
            ImgName:'css',
            info:'CSS is a computer language for laying out and structuring web pages (HTML or XML).',
            level:'85%',
            color:'#9ac0fc',
            bgColor:'#9ac0fc',
            id:'2_css'
        },
        {
            Name:'JavaScript',
            ImgName:'javascript',
            info:'JavaScript renders web pages in an interactive and dynamic fashion.',
            level:'80%',
            color:'#F0DB4F',
            bgColor:'#F0DB4F',
            id:'3_js'
        },
        {
            Name:'ReactJS',
            ImgName:'react',
            info:'React. js is an open-source JavaScript library that is used for building user interfaces.',
            level:'80%',
            color:'#61DBFB',
            bgColor:'#61DBFB',
            id:'4_react'
        }
    ];

return(
    <Fragment>
    <div className="Skills_holder">
    {
        SkillData.map((x)=>(
            <SkillCard Name={x.Name} ImgName={x.ImgName} info={x.info} level={x.level} id={x.id} color={x.color} bgColor={x.bgColor}></SkillCard>
        ))
    }
    </div>
    </Fragment>
);
};

export default Skill;