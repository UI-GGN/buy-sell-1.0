import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Routes } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import Products from "../products/Products";
import RegisterForm from "../register/RegisterForm";


const RootRouter = () => {
    return(
        <Routes>
            <Route exact path="/"
                element={<Products/>} 
            />
            <Route exact path="/login"
                element={<LoginForm />} 
            />
            <Route exact path="/register" 
                element={<RegisterForm />} 
            />
        </Routes>
    )
}

export default RootRouter;