import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import styled from "styled-components";

const Error = styled.h2`
  color: red;
  font-size: 12px;
  align-items: center;
`;

function Register() {
  const [error, setError] = useState("");

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailingAddress: "",
    billingAddress: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDetails({
      firstName: details.firstName,
      lastName: details.lastName,
      phoneNumber: details.phoneNumber,
      mailingAddress: details.mailingAddress,
      billingAddress: details.billingAddress,
      email: details.email,
      password: details.password,
    });

    const value = { details };
    console.log(details);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    };

    const response = await fetch("http://localhost:5000/register", options);
    const result = await response.json();
    console.log(result);
    navigate("/message", {
      state: { message: "Successfully created an account!", path: "Login" },
    });
  };

  return (
    <div className="base-container">
      <div className="header">Create an account</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-group">
              <label className="special" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={setDetails.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="special" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={setDetails.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="special" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="1234567890"
                required
                minLength={10}
                maxLength={10}
                pattern="[0-9]{10}"
                value={setDetails.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="special" htmlFor="mailingAddress">
                Mailing Address
              </label>
              <input
                type="text"
                name="mailingAddress"
                placeholder="Mailing Address"
                required
                value={setDetails.mailingAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="special" htmlFor="billingAddress">
                Billing Address
              </label>
              <input
                type="text"
                name="billingAddress"
                placeholder="Billing Address"
                required
                value={setDetails.billingAddress}
                onChange={handleChange}
              />
            </div>
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
                minLength={8}
                value={setDetails.password}
                onChange={handleChange}
              />
            </div>
            {error != "" ? <Error>{error}</Error> : ""}
          </div>
          <input type="submit" className="special" value="Sign Up"></input>
        </form>
      </div>
    </div>
  );
}

export default Register;
