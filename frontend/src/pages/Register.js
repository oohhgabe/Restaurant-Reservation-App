import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./Register.css"
function Register({props}){
    let navigate = useNavigate();
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        mailingAddress: "",
        billingAddress: "",
        email: "",
        password: "",
        dinerNumber: null,
        points: null,
        payment: null,
    })

    const [error, setError] = useState("");

    const handleChange = (event) => {
        setDetails({...details, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDetails({
            email: details.email,
            password: details.password
        });
      }
        const value = {details};
        
    return (
        <div className="base-container">
            <div className="header"></div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label className="special" htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            placeholder= "First Name"
                            required
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            required
                            value={setDetails.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="phonenumber">Phone Number</label>
                        <input
                            type="text"
                            name="phonenumber"
                            placeholder="Phone Number"
                            required
                            value={setDetails.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="mailingaddress">Mailing Address</label>
                        <input
                            type="text"
                            name="mailingaddress"
                            placeholder="Mailing Address"
                            required
                            value={setDetails.mailingAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="billingaddress">Billing Address</label>
                        <input
                            type="text"
                            name="billingaddress"
                            placeholder="Billing Address"
                            required
                            value={setDetails.billingAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="email">Email</label>
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
                        <label className="special" htmlFor="password">Password</label>
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
                <input type="submit" className="special" value="REGISTER"/>
                </form>
            </div>
        </div>

    )
}

export default Register;