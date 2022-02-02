import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import Method from "../ContactME/methods";
import useInput from "../../Hooks/user-input";
import Thanks from "../ThankModal/Thanks";
import React from "react";
import "./contact_me.css";

const CheckTextIsValid = (value) => {
  return value.trim() !== "";
};

const CheckEmailIsValid = (value) => {
  return value.includes("@");
};

const Contact_Me = () => {
  const [display, SetDisplay] = useState(false);

  const MessageHandler = () => {
    setTimeout(() => {
      SetDisplay(true);
    }, 100);
  };

  const DisplayChanger = () => {
    SetDisplay(false);
  };

  const {
    value: enteredName,
    hasError: nameInputHasError,
    ValueChangeHandler: nameChangedHandler,
    InputBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    reset: resetInputName,
  } = useInput(CheckTextIsValid);

  const {
    value: enteredEmail,
    hasError: EmailInputHasError,
    ValueChangeHandler: EmailChangedHandler,
    InputBlurHandler: EmailBlurHandler,
    isValid: EmailIsValid,
    reset: resetInputEmail,
  } = useInput(CheckEmailIsValid);

  const {
    value: enteredMsg,
    hasError: MsgInputHasError,
    ValueChangeHandler: MsgChangedHandler,
    InputBlurHandler: MsgBlurHandler,
    isValid: MsgIsValid,
    reset: resetInputMsg,
  } = useInput(CheckTextIsValid);

  const UserData = [{ Name: enteredName, Email: enteredEmail, Message: enteredMsg }];

  const SendData = (Data) => {
    fetch("https://prians-9c7e3-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify(Data),
    });
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    resetInputName();
    resetInputEmail();
    resetInputMsg();
    SendData(UserData);
    MessageHandler();
  };

  let FormIsValid = false;

  if (nameIsValid && EmailIsValid && MsgIsValid) FormIsValid = true;

  return (
    <Fragment>
      {display && (
        <Thanks
          color="green"
          icon="shield-checkmark"
          text="Message Sent!"
          onClose={DisplayChanger}
        ></Thanks>
      )}
      <div className="contact_me_container">
        <h1 className="contact_me_heading">Contact_Me_</h1>
        <div className="data_container">
          <div className="contact_methods">
            <Method></Method>
          </div>
          <form className="contact_details" onSubmit={FormSubmitHandler}>
            <div className="name_email">
              <input
                type="text"
                required
                className={`name_ip ${
                  !nameInputHasError ? "noError" : "error"
                }`}
                placeholder="NAME"
                onChange={nameChangedHandler}
                value={enteredName}
                onBlur={nameBlurHandler}
              ></input>
              <input
                type="email"
                required
                className={`email_ip ${
                  !EmailInputHasError ? "noError" : "error"
                }`}
                placeholder="EMAIL"
                onChange={EmailChangedHandler}
                value={enteredEmail}
                onBlur={EmailBlurHandler}
              ></input>
            </div>
            <div style={{ width: "90%" }}>
              <input
                type="text"
                required
                className={`message ${!MsgInputHasError ? "noError" : "error"}`}
                placeholder="MESSAGE"
                onChange={MsgChangedHandler}
                value={enteredMsg}
                onBlur={MsgBlurHandler}
              ></input>
            </div>
            <button type="submit" disabled={!FormIsValid} className="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact_Me;
