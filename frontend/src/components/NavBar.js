import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import styled from "styled-components";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

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

const Button = styled.button`
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
  font-weight: bold;
  font-size: 16px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(0, 100%, 35%);
    color: white;
  }
`;

function NavBar() {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setAuth(false);
    navigate("/message", { state: { message: "Successfully logged out!" } });
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">La Habibi</Link>
      </div>
      <div className="navbar-right">
        <NavButton>
          {auth ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <NavButtonLink to="/login">Login</NavButtonLink>
          )}
        </NavButton>
      </div>
    </div>
  );
}

export default NavBar;
