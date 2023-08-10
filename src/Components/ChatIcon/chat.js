import React, { Fragment } from "react";
import "./chat.css";

const ChatBt = () => {
  return (
    <Fragment>
      <span className="chat">
        <a href="#contact">
          <ion-icon name="chatbubble-ellipses"></ion-icon>
        </a>
      </span>
    </Fragment>
  );
};

export default ChatBt;
