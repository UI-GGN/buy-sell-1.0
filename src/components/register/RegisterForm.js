import React, {useEffect, useState} from "react";
import "../login/styles/loginFormStyles.css";
import TextField from "../custom/TextField";
import { registerDefaults, validateField } from "../login/services/formService";


const RegisterForm = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [fieldValues, setFieldValues] = useState(registerDefaults);
    const [isValid, setIsValid] = useState({
        err: false,
        errMsg: ""
    });

    useEffect(() => {})

    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setFieldValues({
            ...fieldValues,
            [name] : value
        });
    }

    return(
        <div className="form-container" >
            <div className="button-container">
                <button className={"default-button" + (isSeller ? " unselected" : "")}
                onClick={() => {
                    setIsSeller(false);
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Buyer
                </button>
                <button className={"default-button" + (!isSeller ? " unselected" : "")}
                onClick={() => {
                    setIsSeller(true);
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Seller
                </button>
            </div>
            <form className="login-form">
                <TextField
                label="Name"
                name="name"
                value={fieldValues.name}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Username"
                name="username"
                value={fieldValues.username}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Email"
                name="email"
                value={fieldValues.email}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Phone"
                name="phone"
                isValid={isValid}
                value={fieldValues.phone}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Password"
                name="password"
                type="password"
                value={fieldValues.password}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={fieldValues.confirmPassword}
                handleChange={handleFieldChange}
                />
                <div className="check-box agree-terms">
                    <input type="checkbox" id = "agree-terms"/>
                    <label htmlFor="agree-terms">I have read and agree to the terms</label>
                </div>
                <button
                type="submit"
                className="default-button"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
                
           
    
}

export default RegisterForm;