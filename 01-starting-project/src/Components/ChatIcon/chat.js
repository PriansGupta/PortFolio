import React, { Fragment } from "react";
import "./chat.css";

const ChatBt = (props) => {
  return (
    <Fragment>
      <span className={`chat ${props.Down ? "Down" : ""}`}>
        <a href="#contact">
          <ion-icon name="chatbubble-ellipses"></ion-icon>
        </a>
      </span>
    </Fragment>
  );
};

export default ChatBt;
