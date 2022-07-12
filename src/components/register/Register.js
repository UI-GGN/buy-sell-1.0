import React from "react";
import {Form, Formik} from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import  styles from '../login/styles/loginStyles';

const Register = () => {
    const classes = styles();
    const initialValues = {
        name:'',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    };

    return(
        <Formik initialValues={initialValues}>
            {
                (props) => {
                    return(
                        <Form className={classes.loginForm}>
                            <TextField
                            variant="outlined"
                            size="small"
                            margin="normal"
                            name="name"
                            label="Name"
                            />
                            <TextField
                            variant="outlined"
                            size="small"
                            margin="normal"
                            name="username"
                            label="Username"
                            />
                            <TextField
                            variant="outlined"
                            size="small"
                            margin="normal"
                            name="email"
                            label="Email"
                            />
                            <TextField
                            variant="outlined"
                            size="small"
                            margin="normal"
                            name="password"
                            label="Password"
                            />
                            <TextField
                            variant="outlined"
                            size="small"
                            margin="normal"
                            name="repeatPassword"
                            label="Repeat password"
                            />
                            <div style={{justifyContent:"center"}}>
                                <Checkbox defaultChecked/>
                                <p>I have read and agree to the terms</p>
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
    )
}

export default Register;