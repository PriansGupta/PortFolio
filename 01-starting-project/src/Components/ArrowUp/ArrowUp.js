import React, { Fragment, useState } from "react";
import './ArrowUp.css';

const ToggleButton=()=>{
    // const [theme,SetTheme]=useState("moon");
    
    // const ThemeChanger=()=>{
    //     if(theme==="moon")
    //     SetTheme("sunny");

    //     else
    //     SetTheme("moon");
    // }
    return(
    <Fragment>
        <span className="arrowup"><a href="#home"><ion-icon name="chevron-up"></ion-icon></a></span>
    </Fragment>
    );
}

export default ToggleButton;