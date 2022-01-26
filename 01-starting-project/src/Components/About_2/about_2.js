import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import User from '../../Assets/User_Prians.png'
import './about_2.css';


const About_2=()=>{

    const clicked=()=>{
        console.log("clicked");
    };

    return(
        <Fragment>
    <div className="card-container">
	<img className="round" src={User} alt="user" />
	<h3>Priyansh Gupta</h3>
	<strong>2nd Year B.Tech HBTU</strong>
	<h6>Kanpur, Uttar Pradesh</h6>
	<p className="intro_me">"I am a positive, enthusiastic and competent Web Developer 
            who, over the years, has built up a diverse range of skills,
            qualities and attributes that guarantee I will perform highly in
            this role...."</p>
	<div className="know_more">
        Know more
        <span className="side_arrow" onClick={clicked}>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </span>
    </div>
</div>
        </Fragment>
    );
};

export default About_2;