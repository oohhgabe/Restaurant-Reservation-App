import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Register.css";
import styled from "styled-components";

const Error = styled.h2`
  color: red;
  font-size: 12px;
  align-items: center;
`;

function ReservationForm() {
  const [error, setError] = useState("");

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDetails({
      firstName: details.firstName,
      lastName: details.lastName,
      phoneNumber: details.phoneNumber,
      email: details.email,
    });

    console.log(details);

    navigate("/message", {
      state: { message: "Successfully Reserved a Table!", path: "Home" },
    });
  };

  return (
    <div className="base-container">
      <div className="header">Your Reservation</div>
      <h3>{location.state.message}</h3>
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
            {error != "" ? <Error>{error}</Error> : ""}
          </div>
          <input type="submit" className="special" value="Reserve"></input>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
