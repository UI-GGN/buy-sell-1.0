import React, {useState, useEffect} from "react";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import "./styles/textFieldStyles.css";

const TextField = ({label, type, name, value, handleChange, isValid}) => {
    const [focused, setFocused] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const [validateError, setValidateError] = useState(false);

    if(!isValid) isValid = {err: false, errMsg: ""}

    useEffect(() => {
        if(validateError) setShowError(isValid.err);
        value !== "" ? setShowLabel(true) : setShowLabel(false);
    }) 

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return(
        <div className={"text-field" + (focused ? " focus" : "") + (showError ? " error" : "")}>
            
            {
            showLabel &&
            <p
            className="field-label"
            >
                {label}
            </p>          
            }
            <div className="label-container"></div>
            <div>
                <input
                id={name}
                type={type!=="password" ? (type || "text") : (!showPassword) && type}
                name={name}
                autoComplete={name}
                placeholder={label}
                value={value}
                required
                onChange= {(e) => {handleChange(e)}}
                onFocus={() => {setFocused(true)}}
                onBlur={() => {
                    setFocused(false);
                    setValidateError(true);
                    setShowError(isValid.err);
                }}
                />
                {
                type === "password" && 
                <button
                className="toggle-password-button"
                onClick={(e) => {togglePasswordVisibility(e)}}
                >
                    {showPassword ? <VisibilityOff className="toggle-icon"/> : <Visibility className="toggle-icon" />}
                </button>
                }
                <div className="line">
                    <div></div>
                </div>
            </div>
            <div className="error-container">
                {showError && <p className="error-message">{isValid.errMsg}</p>}
            </div>           
        </div>
    )
}

export default TextField;