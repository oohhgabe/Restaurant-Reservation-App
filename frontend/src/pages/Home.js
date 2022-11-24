import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/HomeImage.jpg";
import "./Home.css";

function Home() {
  let navigate = useNavigate();

  const goToReserve = async (event) => {
    event.preventDefault();
    navigate("/reserve");
  };

  const goToRegister = async (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="home">
      <img src={HomeImage} alt="backgroundImage" />
      <button onClick={goToReserve} className="reservation">
        Reserve a Table
      </button>
      <button onClick={goToRegister} className="register">
        Create an account
      </button>
    </div>
  );
}

export default Home;