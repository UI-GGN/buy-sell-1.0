import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Google, Twitter, GitHub} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  styles from './styles/loginStyles';
import Register from "../register/Register";

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const classes = styles();
    const initialValues = {
        username: '',
        password: ''
    };

    const buttonTheme = createTheme({
        palette: {
            primary: {
                main: '#f5f5f5',
                contrastText: "#818181"
            }
        }
      });

    return(
        <div className={classes.formContainer}>
            <Stack spacing={2} direction="row" justifyContent="center">
            {
            newUser ?
            <ThemeProvider theme={buttonTheme}>
                <Button
                    style={{fontWeight:"bold", padding: "10px, 25px"}}
                    fullWidth
                    size="large"
                    variant="contained"
                    onClick={() => setNewUser(false)}
                    >
                        Login
                    </Button>
            </ThemeProvider>
            :
            <Button
                style={{fontWeight:"bold", padding: "10px, 25px"}}
                fullWidth
                size="large"
                variant="contained"
                onClick={() => setNewUser(false)}
                >
                    Login
            </Button> 
            }
            {
            newUser ? 
            <Button
                style={{fontWeight:"bold", padding: "10px, 25px"}}
                fullWidth
                size="large"
                variant="contained"
                onClick={() => setNewUser(true)}
                >
                    Register
            </Button>
            :
            <ThemeProvider theme={buttonTheme}>
                <Button
                    style={{fontWeight:"bold", padding: "10px, 25px"}}
                    fullWidth
                    size="large"
                    variant="contained"
                    onClick={() => setNewUser(true)}
                    >
                        Register
                </Button>
            </ThemeProvider>
            }
            </Stack> 

            <Typography id="signInText" align="center" >
                {newUser ? <p>Sign up with:</p> : <p>Sign in with:</p>}
            </Typography>

            <div className={classes.iconsContainer}>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={classes.icon} fill="#125FD2">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
                <Google href="https://www.google.com" className={classes.icon}/>
                <Twitter className={classes.icon}/>
                <GitHub className={classes.icon}/>
            </div>

            <Typography align="center" margin={"15px"}>
                or:
            </Typography>
            
            {newUser ? 
            <Register/> 
            : <div>
                <Formik initialValues={initialValues}>
                    {
                        (props) => {
                            return(
                                <Form className={classes.loginForm}>
                                    <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    name="username"
                                    label="Email or username"
                                    />
                                    <TextField
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    name="password"
                                    label="Password"
                                    />
                                    <div>
                                        <div>
                                            <Checkbox defaultChecked/>
                                            <p>Remember me</p>
                                        </div>
                                        <Button
                                        style={{color: "#125FD2",textTransform: "none", fontWeight:"500"}}
                                        >
                                            Forgot password?
                                        </Button>
                                    </div>
                                    <Button
                                    style={{fontWeight:"bold", padding: "10px, 25px", marginBlock: "10px"}}
                                    variant="contained"
                                    type="submit"
                                    >
                                        Sign In
                                    </Button>
                                </Form>
                            );
                        }
                    }
                </Formik>
                <Typography align="center" margin={"15px"}>
                    Not a member? 
                    <Button
                    style={{color: "#125FD2",textTransform: "none", fontWeight:"500"}}
                    onClick={() => setNewUser(true)}
                    >
                        Register
                    </Button>
                </Typography>
            </div> }
        </div>
    )
}

export default Login;
