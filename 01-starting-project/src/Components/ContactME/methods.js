import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './method.css';

const Method=()=>{
const ContactMethodData=[
    {
        name:"call",
        method:"Call me",
        address:"8423364688",
        id:1
    },
    {
        name:"mail",
        method:"Email",
        address:"priyanshg615@gmail.com",
        id:2
    },
    {
        name:"location",
        method:"Location",
        address:"Kanpur,Uttar Pradesh",
        id:3
    },
];

return(
    <Fragment>
        <div className="method_holder">
            {
                ContactMethodData.map((entry)=>(
                    <div key={entry.id} className="method">
            <span className="icon"><ion-icon name={entry.name}></ion-icon></span>
            <div className="details">
                {/* <p className="name">{entry.method}</p> */}
                <p className="address">{entry.address}</p>
            </div>
        </div>
                ))
            }
        </div>
    </Fragment>
);
};

export default Method;