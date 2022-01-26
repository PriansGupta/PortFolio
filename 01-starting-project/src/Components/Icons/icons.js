import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './icons.css';

const Icons=()=>{
    return(
        <Fragment>
            <div className="icons">
            <span className="icon_1"><a target="_blank" href="https://www.linkedin.com/in/priyansh-gupta-5039241a0" className="link"><ion-icon  name="logo-linkedin"></ion-icon></a></span>
            <span className="icon_2"><a target="_blank" href="https://github.com/PriansGupta" className="link"><ion-icon  name="logo-github"></ion-icon></a></span>
            <span className="icon_3"><a target="_blank" href="https://www.instagram.com/_prians_gupta/" className="link"><ion-icon  name="logo-instagram"></ion-icon></a></span>
            </div>
        </Fragment>
    )
}

export default Icons;