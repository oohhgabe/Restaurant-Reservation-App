import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import "./Register.css"

function Register({props}) {
    let navigate = useNavigate();

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

   let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    },[]);

    const resetForm = () => {
        setDetails({
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
        });
    }

    // const { register, handleSubmit } = useForm({
    //     reValidateMode: 'onSubmit',
    //     validationSchema: registerSchema,
    //   });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDetails({
            email: details.email,
            password: details.password
        });
      }

    const handleChange = (event) => {
        setDetails({...details, [event.target.name]: event.target.value});
    }
    
    const onSubmit = (data) => {
        setDetails(data)
        console.log(details)
        timerID = setTimeout(resetForm, 5000);
        
      }
      
    const value = {details};
        
    return (
        <div className="base-container">
            <div className="header"></div>
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
        </div>

    )
}

export default Register;