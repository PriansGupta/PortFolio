import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import './options.css';

const Options=()=>{
   const [selectedOption,OptionsChangeHandler]=useState(1);

   const UnderlineHandler_1=()=>{
       OptionsChangeHandler(1);
   }
   const UnderlineHandler_2=()=>{
       OptionsChangeHandler(2);
   }
   const UnderlineHandler_3=()=>{
       OptionsChangeHandler(3);
   }
   const UnderlineHandler_4=()=>{
       OptionsChangeHandler(4);
   }
    return(
        <Fragment>
            <div className="options_container">
            <div className="option">
                <div className='option_list' onClick={UnderlineHandler_1} style={{color: selectedOption===1?'#5ED9BC':'black'}}>Home
                {selectedOption===1 && <div className="underline_1"></div> }
                </div>
                <div className='option_list' onClick={UnderlineHandler_2} style={{color: selectedOption===2?'#5ED9BC':'black'}}>Resources
                {selectedOption===2 && <div className="underline_2"></div> }
                </div>
                <div className='option_list' onClick={UnderlineHandler_3} style={{color: selectedOption===3?'#5ED9BC':'black'}}>Skills
                {selectedOption===3 && <div className="underline_3"></div> }
                </div>
                <div className='option_list' onClick={UnderlineHandler_4} style={{color: selectedOption===4?'#5ED9BC':'black'}}>About Me
                {selectedOption===4 && <div className="underline_4"></div> }
                </div>
                </div>
    
            </div>
        </Fragment>
    );
};

export default Options;