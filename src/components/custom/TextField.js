import React, {useState} from "react";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import "./styles/textFieldStyles.css";

const TextField = ({label, type, name, value, handleChange, isValid}) => {
    const [focused, setFocused] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const [validateError, setValidateError] = useState(false);

    const handleFieldChange = (event) => {
        handleChange(event);
        //if(validateError) setShowError(isValid.err);
        (event.target.value) !== "" ? setShowLabel(true) : setShowLabel(false);
    }

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return(
        <div className={"text-field" + (focused ? " focus" : "") + (showError ? " error" : "")}>
            {
            showLabel && 
            <label
            className="field-label"
            htmlFor={name}
            >
                {label}
            </label>
            }
            <div>
                <input
                id={name}
                type={type!=="password" ? (type || "text") : (!showPassword) && type}
                name={name}
                autoComplete={name}
                placeholder={label}
                value={value}
                required
                onChange={e => {handleFieldChange(e)}}
                onFocus={() => {setFocused(true)}}
                onBlur={() => {
                    setFocused(false);
                    //setValidateError(true);
                    //setShowError(isValid.err);
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
            {showError && <p className="error-message">{isValid.errMsg}</p>}
        </div>
    )
}

export default TextField;