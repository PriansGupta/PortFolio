import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './download.css';

const Download=()=>{

    const clicked=()=>{
        console.log("clicked");
    };
    return(
        <Fragment>
        <span className="download"><ion-icon name="download"></ion-icon><p>Download_CV</p></span>
        </Fragment>
    );
};

export default Download;