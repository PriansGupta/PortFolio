import React from "react";
// import { useState } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import Method from "../ContactME/methods";
import './contact_me.css';

const Contact_Me=()=>{

    return(
        <Fragment>
           
            <div className="contact_me_container">
                <h1 className="contact_me_heading">Contact_Me_</h1>
                <div className="data_container">
                    <div className="contact_methods">
                        <Method></Method>
                    </div>
                    <form className="contact_details" action="https://formsubmit.co/priyanshg615@gmail.com" method="POST">
                        <div className="name_email">
                            
                           <input type="text" required className="name_ip" placeholder="NAME"></input> 
                           <input type="email" required className="email_ip" placeholder="EMAIL"></input> 
                           <input type="hidden" name="_captcha" value="false"></input>
                           <input type="hidden" name="_subject" value="A Client"></input>
                           {/* <input type="hidden" name="_next" value="https://localhost:3000/thanks.html"></input> */}
                        </div>
                        <div style={{width:'90%'}}><input type="text" required className="message" placeholder="MESSAGE"></input></div> 
                        <button type="submit" className="submit">Send</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact_Me;