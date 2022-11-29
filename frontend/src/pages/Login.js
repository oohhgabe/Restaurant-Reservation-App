import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-top: 3rem;
  color: maroon;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const Error = styled.h2`
  color: red;
  font-size: 12px;
  align-items: center;
`;

function Login() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    email: null,
    password: null,
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDetails({
      email: details.email,
      password: details.password,
    });
    navigate("/message", {
      state: { message: "Successfully Logged in!", path: "Home" },
    });
  };

  const value = { details };

  return (
    <div className="base-container">
      <div className="content">
        <div className="header">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-group">
              <label className="special" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={setDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="special" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength="8"
                value={setDetails.password}
                onChange={handleChange}
              />
            </div>
            {error != "" ? <Error>{error}</Error> : ""}
            <StyledLink to="/register">Create an account</StyledLink>
          </div>
          <input type="submit" className="special" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default Login;
