import React, {useEffect, useState} from "react";
import "../login/styles/loginFormStyles.css";
import TextField from "../custom/TextField";
import Button from "../custom/Button";
import { registerDefaults, validateField } from "../login/services/formService";
import { useLocation } from "react-router-dom";


const RegisterForm = () => {
    const location = useLocation();
    const [authMode, setAuthMode] = useState(location.state.authMode);
    const [fieldValues, setFieldValues] = useState(registerDefaults);

    // useEffect(() => {
    //     setAuthMode(location.state.authMode);
    // })
    
    const [isValid, setIsValid] = useState({
        name: {err: false, errMsg: ""},
        username: {err: false, errMsg: ""},
        phone: {err: false, errMsg: ""},
        email: {err: false, errMsg: ""},
        password: {err: false, errMsg: ""},
        confirmPassword: {err: false, errMsg: ""}
    });

    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        setFieldValues({
            ...fieldValues,
            [name] : value
        });
        let response = (name === "confirmPassword" ? validateField(name, value, fieldValues.password) : validateField(name, value));
        response === true ? setIsValid({...isValid, [name]:{err:false, errMsg:""}}) : setIsValid({...isValid, [name]:{err:true, errMsg:[response]}});
    }

    return(
        <div className="form-container" >
            <div className="button-container">
                <Button class={authMode==="seller" ? "unselected" : ""}
                onClick={() => {
                    setAuthMode("buyer");
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Buyer
                </Button>
                <Button class={authMode==="buyer" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("seller");
                    setFieldValues(registerDefaults);
                }}
                >
                    Register as a Seller
                </Button>
            </div>
            <form className="login-form">
                <TextField
                label="Name"
                name="name"
                value={fieldValues.name}
                isValid={isValid.name}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Username"
                name="username"
                value={fieldValues.username}
                isValid={isValid.username}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Email"
                name="email"
                value={fieldValues.email}
                isValid={isValid.email}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Phone"
                name="phone"
                value={fieldValues.phone}
                isValid={isValid.phone}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Password"
                name="password"
                type="password"
                value={fieldValues.password}
                isValid={isValid.password}
                handleChange={handleFieldChange}
                />
                <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={fieldValues.confirmPassword}
                isValid={isValid.confirmPassword}
                handleChange={handleFieldChange}
                />
                <div className="check-box agree-terms">
                    <input type="checkbox" id = "agree-terms"/>
                    <label htmlFor="agree-terms">I have read and agree to the terms</label>
                </div>
                <Button
                type="submit"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
                
           
    
}

export default RegisterForm;