import React, {useState} from "react";
import { Alert } from "@mui/material";
import { SettingsInputComponent } from "@mui/icons-material";

export default (onLogin) => {
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState('');

    const notification = () => {
        if (showError) {
            return (
                <Alert severity="error" >{errorMsg}</Alert>
            )
        }
        if (showSuccess) {
            return (
                <Alert severity="success" onClose={() => {}}>{success}</Alert>
            )
        }
    };

    const handleLogin = (values, authMode) => {
        let {username, password} = values;
        authMode === "buyer" ? authMode = "Buyers" : authMode = "Sellers";
        username = username.trim();
        const response = onLogin(username, password, authMode);
        if(response === true){
            setShowError(false);
            window.location.pathname="/";
            //window.location.assign(window.location.origin+"/");
            alert("Login Successful")
            setSuccess("Login Successful")
            setShowSuccess(true);
        }
        else {
            //window.location.assign(window.location.origin+"/login?authMode=" + authMode);
            setErrorMsg("Enter valid credentials");
            alert("Enter valid credentials");
            setShowError(true);
        }
            
        
    };

    return {
        notification: notification,
        handleLogin: handleLogin
    };
};
