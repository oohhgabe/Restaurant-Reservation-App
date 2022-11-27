import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ props }) {
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
    navigate("/message", { state: { message: "Successfully Logged In!" } });
  };

  const value = { details };

  return (
    <div className="base-container">
      <div className="content">
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
          </div>
          <input type="submit" className="special" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default Login;
