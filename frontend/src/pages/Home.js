import React from "react";
import HomeImage from "../assets/HomeImage.jpg";
import "./Home.css";

function Home() {

  return (
    <div className="home">
      <img src={HomeImage} alt="backgroundImage" />
    </div>
  );
}

export default Home;