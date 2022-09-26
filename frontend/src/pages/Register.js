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
        /*
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        };

        const response = await fetch('http://localhost:5000/register', options);
        const result = await response.json();
        if (result.message)
            setError(result.message)
        else
            navigate('/AccountCreated');
    }
        */
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
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            value={setDetails.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="fname">Phone Number</label>
                        <input
                            type="text"
                            name="fname"
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="fname">Mailing Address</label>
                        <input
                            type="text"
                            name="fname"
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="fname">Billing Address</label>
                        <input
                            type="text"
                            name="fname"
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={setDetails.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
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