import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import styled from "styled-components";

const NavButton = styled.nav`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 24px;
`;
const NavButtonLink = styled(Link)`
  border-radius: 4px;
  background: white;
  padding: 10px 22px;
  color: maroon;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(0, 100%, 35%);
    color: white;
  }
`;

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">La Habibi</Link>
      </div>
      <div className="navbar-right">
        <NavButton>
          <NavButtonLink to="/login">Login</NavButtonLink>
        </NavButton>
      </div>
    </div>
  );
}

export default NavBar;
