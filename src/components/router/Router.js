import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Routes } from "react-router-dom";
import '../../App.css';
import useAuth from "../../customHooks/useAuth";
import Header from "../header/Header";
import PromptDialog from "../dialog/PromptDialog";
import LoginForm from "../login/LoginForm";
import Products from "../products/Products";
import RegisterForm from "../register/RegisterForm";


const RootRouter = () => {
    const {handleLogin, handleRegister, handleLogout, isAuthenticated} = useAuth();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const login = () => {
        setDialogOpen(true);
        setIsLogin(true);
    }

    const register = () => {
        setDialogOpen(true);
        setIsLogin(false);
    }

    return(
        <Routes>
            <Route exact path="/"
                element={
                    <div>
                        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} login={login} register={register}/>
                        <div className="container"><Products isAuthenticated={isAuthenticated}/></div>
                        {dialogOpen && <PromptDialog isLogin={isLogin} setShowDialog={setDialogOpen}/>}
                    </div>
            } 
            />
            <Route exact path="/login"
                element={
                    <div>
                        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} login={login} register={register}/>
                        <div className="container"><LoginForm onLogin={handleLogin} isAuthenticated={isAuthenticated}/></div>
                    </div>
                } 
            />
            <Route exact path="/register" 
                element={
                    <div>
                        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} login={login} register={register}/>
                        <div className="container"><RegisterForm onRegister={handleRegister} isAuthenticated={isAuthenticated}/></div>
                    </div>
                } 
            />
        </Routes>
    )
}

export default RootRouter;