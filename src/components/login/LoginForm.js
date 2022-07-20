import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import './styles/loginFormStyles.css';
import TextField from "../custom/TextField";
import Button from "../custom/Button";
import { loginDefaults } from "./services/formService";

const LoginForm = () => {
    const location = useLocation();
    const [authMode, setAuthMode] = useState(location.state.authMode);
    const [fieldValues, setFieldValues] = useState(loginDefaults);


    const handleSubmit = (event) => {
        console.log(event)
    }

    const handleFieldChange = (event) => {
        setFieldValues({
            ...fieldValues,
            [event.target.name] : event.target.value
        });
    }

    return(
        <div className="form-container">
            <div className="button-container">
                <Button class={authMode==="seller" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("buyer");
                    setFieldValues(loginDefaults);
                }}
                >
                    Login as a Buyer
                </Button>
                <Button class={authMode==="buyer" ? " unselected" : ""}
                onClick={() => {
                    setAuthMode("seller");
                    setFieldValues(loginDefaults);
                }}
                >
                    Login as a Seller
                </Button>
            </div>

             <div>
                <form 
                className="login-form"
                onSubmit={handleSubmit()}
                >
                    <TextField
                    label="Username"
                    name="username"
                    value={fieldValues.username}
                    handleChange={handleFieldChange}
                    />
                    <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={fieldValues.password}
                    handleChange={handleFieldChange}
                    />
                    <div className="last-layer">
                        <div className="check-box">
                            <input type="checkbox" id = "remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    
                        <Button
                        class="text-button default-button"
                        >
                            Forgot password?
                        </Button>
                    </div>
                    <Button
                    type="submit"
                    class="default-button"
                    >
                        Sign In
                    </Button>
                </form>
                <div className="footer">
                    <p>
                        Not a member? 
                    </p>
                    <Link 
                    to={{pathname: "/register", state: {authMode: authMode}}}
                    >
                        Register
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default LoginForm;