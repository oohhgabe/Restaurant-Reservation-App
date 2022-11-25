import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import "./Register.css"

function Register({props}) {

    const [details, setDetails] = useState({
        firstName: null,
        lastName: null,
        phoneNumber: null,
        mailingAddress: null,
        billingAddress: null,
        email: null,
        password: null,
        dinerNumber: null,
        points: null,
        payment: null,
    })
    
    const [complete, setComplete] = useState(false)
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        reValidateMode: 'onSubmit',
      });


    const handleChange = (event) => {
        setDetails({...details, [event.target.name]: event.target.value});
    }
    
    const onSubmit = (data) => {
        setDetails(data);
        console.log(details);
        setComplete(true)
        //navigate('/login');
      }
      
    const value = {details};
        
    return (
        <div className="base-container">
            <div className="header"></div>
            {complete ===false && (
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <div className="form-group">
                        <label className="special" htmlFor="firstName">First Name</label>
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
                        <label className="special" htmlFor="lastName">Last Name</label>
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
                        <label className="special" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            required
                            minLength={10}
                            value={setDetails.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="special" htmlFor="mailingAddress">Mailing Address</label>
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
                        <label className="special" htmlFor="billingAddress">Billing Address</label>
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
                            minLength={8}
                            value={setDetails.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input type="submit" className="special" value="Sign Up"></input>
                </form>
            </div>
            )}
            {complete === true && (
                <div className="header">
                    <label className = "special">
                    Your account has been created.
                    </label>
                    <Link to="/login" className = "special">Login</Link>
                    </div>
            )}
        </div>
    )
}

export default Register;