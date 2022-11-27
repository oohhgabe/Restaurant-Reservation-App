import React from "react";
import { useLocation } from "react-router-dom";
import "./Message.css";

const Message = () => {
  const location = useLocation();
  return (
    <div className="message-page">
      <div className="message">
        <h1>{location.state.message}</h1>
      </div>
    </div>
  );
};
export default Message;
