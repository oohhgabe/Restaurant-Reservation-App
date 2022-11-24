import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  let navigate = useNavigate();

  const goToLogin = async (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const goToRegister = async (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="navbar">
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reserve">Reserve</NavLink>
        <button onClick={goToLogin} className="button">
          Log In
        </button>
        <button onClick={goToRegister} className="button">
          Register
        </button>
      </div>
    </div>
  );
}

export default NavBar;