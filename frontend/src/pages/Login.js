import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login({props}){
    let navigate = useNavigate();
    const [details, setDetails] = useState({
        email: "",
        password: "",
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
                        <label className="special" htmlFor="fname">Email</label>
                        <input
                            type="text"
                            name="fname"
                            value={setDetails.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="lname">Password</label>
                        <input
                            type="text"
                            name="lname"
                            value={setDetails.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input type="submit" className="special" value="Log In"/>
                </form>
            </div>
        </div>

    )
}

export default Login;