import {useEffect, useState} from "react";
import {isLoggedIn, login, register, logout} from "../components/auth/services/authService";
import { Database } from "../mocks/Database";

export default () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(isLoggedIn());
    }, []);

    const handleLogin = (username, password, authMode) => {
        const response = login(username, password, authMode);
        response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        return response;
    };

    const handleRegister = (values, authMode) => {
        const response = register(values, authMode);
        return response;
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        window.location.pathname="/"
    };

    return {
        isAuthenticated: isAuthenticated,
        handleLogin: handleLogin,
        handleRegister: handleRegister,
        handleLogout: handleLogout
    };
}