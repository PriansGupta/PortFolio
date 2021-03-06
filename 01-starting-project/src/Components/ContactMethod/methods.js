import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./method.css";

const Method = () => {
  const ContactMethodData = [
    {
      name: "mail",
      method: "Email",
      address: "priyanshg615@gmail.com",
      id: 2,
    },
    {
      name: "location",
      method: "Location",
      address: "Kanpur,Uttar Pradesh-208002",
      id: 3,
    },
  ];

  return (
    <Fragment>
      <div className="method_holder">
        {ContactMethodData.map((entry) => (
          <div key={entry.id} className="method">
            <span className="icon">
              <ion-icon name={entry.name}></ion-icon>
            </span>
            <div className="details_cnt">
              <p className="address">{entry.address}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Method;
