import React, {useEffect, useState} from "react";
import "../login/styles/loginFormStyles.css";
import TextField from "../custom/TextField";
import Button from "../custom/Button";
import { registerDefaults, validateField } from "../../services/registerService";
import useRegister from "../../customHooks/useRegister";
import { useLocation } from "react-router-dom";


const RegisterForm = ({onRegister, isAuthenticated}) => {
    // let params = (new URL(document.location)).searchParams;
    // const mode = params.get("authMode");
    const location = useLocation();
    let mode = location.state;
    const [authMode, setAuthMode] = useState(mode ? mode.authMode : "buyer");
    const [fieldValues, setFieldValues] = useState(registerDefaults);
    const [checked, setChecked] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false);

    const {handleRegister, notification} = useRegister(onRegister);

    const [isValid, setIsValid] = useState({
        name: {err: false, errMsg: ""},
        username: {err: false, errMsg: ""},
        phone: {err: false, errMsg: ""},
        email: {err: false, errMsg: ""},
        password: {err: false, errMsg: ""},
        confirmPassword: {err: false, errMsg: ""}
    });

    // if ( window.history.replaceState ) {
    //     window.history.replaceState( null, null, window.location.href );
    // }

    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        if(isFormValid) {
             event.target.checked ? setEnableSubmit(true) : setEnableSubmit(false);
        }
    }

    // useEffect(() => {
    //     if(location.state.authMode) setAuthMode(location.state.authMode);
    // }, [])

    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        const updatedFieldValues = {...fieldValues, [name] : value};
        setFieldValues(updatedFieldValues);
        let response = (name === "confirmPassword" ? validateField(name, value, fieldValues.password) : validateField(name, value));
        response === true ? setIsValid({...isValid, [name]:{err:false, errMsg:""}}) : setIsValid({...isValid, [name]:{err:true, errMsg:[response]}});

        if(Object.values(updatedFieldValues).every(field => field !== "") && 
        Object.values(isValid).every(field => field.err === false)){
            setIsFormValid(true);
        }
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
            <form 
            className="register-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleRegister(fieldValues, authMode)
            }}
            >
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
                type="tel"
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
                    <input type="checkbox" checked={checked} onChange={(e) => handleCheckChange(e)} id = "agree-terms"/>
                    <label htmlFor="agree-terms">I have read and agree to the terms</label>
                </div>
                <Button
                type="submit"
                disabled={!enableSubmit}
                >
                    Sign In
                </Button>
            </form>
            {/* {notification()} */}
        </div>
    );
                
           
    
}

export default RegisterForm;