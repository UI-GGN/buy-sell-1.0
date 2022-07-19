import React, {useState} from "react";
import { Link } from "react-router-dom";
import './styles/loginFormStyles.css';
import TextField from "../custom/TextField";
import Button from "../custom/Button";
import { loginDefaults } from "./services/formService";

const LoginForm = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [fieldValues, setFieldValues] = useState(loginDefaults);

    const loginClick = () => {
        setIsSeller(false)
    }

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
                <Button class={"default-button" + (isSeller ? " unselected" : "")}
                click={() => {
                    setIsSeller(false);
                    setFieldValues(loginDefaults);
                }}
                >
                    Login as a Buyer
                </Button>
                <Button class={"default-button" + (!isSeller ? " unselected" : "")}
                click={() => {
                    setIsSeller(true);
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
                    
                        <button
                        className="text-button default-button"
                        >
                            Forgot password?
                        </button>
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
                    <Link to="/register">Register</Link>
                </div>
            </div> 
        </div>
    )
}

export default LoginForm;