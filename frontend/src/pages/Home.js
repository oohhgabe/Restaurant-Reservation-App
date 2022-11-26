import React from "react";
import HomeImage from "../assets/HomeImage.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const goToReserve = async (event) => {
    event.preventDefault();
    navigate("/reserve");
  };
  return (
    <div className="home">
      <img src={HomeImage} alt="backgroundImage" />
      <div class="centered">La Habibi</div>
      <input type="submit" className="homebutton" value="Reserve" onClick={goToReserve}></input>

    </div>
  );
}

export default Home;