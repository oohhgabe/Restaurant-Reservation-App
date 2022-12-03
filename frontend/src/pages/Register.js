import React, { useState } from "react";
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
  const [checked, setChecked] = useState(false);

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

  const handleChecked = () => {
    setChecked(!checked);
    if (checked) {
      details.billingAddress = "";
    } else details.billingAddress = details.mailingAddress;
  };

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(checked);

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

    if (result.message) setError(result.message);
    else
      navigate("/message", {
        state: { message: "Successfully created an account!", path: "Login" },
      });
  };

  return (
    <div className="base-container">
      <div className="header">Create an Account</div>
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
                value={details.billingAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-checkbox">
              <input
                type="checkbox"
                id="sameMailing"
                value="sameMailing"
                checked={checked}
                onChange={handleChecked}
              />
              <label className="sameMailing" for="sameMailing">
                Same as mailing address
              </label>
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
