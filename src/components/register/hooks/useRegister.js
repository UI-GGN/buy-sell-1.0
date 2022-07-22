import React, {useState} from "react";
import { Alert } from "@mui/material";

export default (onRegister) => {
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState('');

    const notification = () => {
        if (showError) {
            return (
                <Alert severity="error" onClose={() => {}}>{errorMsg}</Alert>
            )
        }
        if (showSuccess) {
            return (
                <Alert severity="success" onClose={() => {}}>{success}</Alert>
            )
        }
    };

    const handleRegister = (values, authMode) => {
        const {name, username, email, phone, password} = values;
        let details = {
                        username: username,
                        name: name,
                        email:email, 
                        phone: phone,
                        password: password
                    }
        details.username = details.username.trim();
        details.email = details.email.trim().toLowerCase();
        authMode === "buyer" ? authMode = "Buyers" : authMode = "Sellers";

        console.log(details);

        const response = onRegister(details, authMode);
        if (response === true){
            setShowError(false);
            window.location.pathname="/login";
            setSuccess("Registration Successful, Login to continue")
            setShowSuccess(true);
            alert("Registration Successful, Login to continue");
            
        }
        else {
            setErrorMsg("Registration failed: " + response);
            setShowError(true);
            alert("Registration failed: " + response);
        } 
    };

    return {
        notification: notification,
        handleRegister: handleRegister
    };
};
