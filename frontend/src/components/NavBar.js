import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reserve">Reserve</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
}
export default NavBar;
