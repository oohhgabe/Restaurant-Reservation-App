import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Message.css";

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (location.state.path == "Login") navigate("/login");
    else navigate("/");
  };

  return (
    <div className="message-page">
      <div className="message">
        <h1>{location.state.message}</h1>
        <input
          type="submit"
          className="special"
          value={location.state.path == "Login" ? "Login" : "Continue"}
          onClick={handleSubmit}
        ></input>
      </div>
    </div>
  );
};
export default Message;
