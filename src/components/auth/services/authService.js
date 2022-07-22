import { Database } from "../../database/Database";

export const login = (username, password, authMode) => {
    const database = JSON.parse(localStorage.getItem("database"));
    for (const user of database[authMode]) {
        if(user.username === username) {
            if(user.password === password){
                localStorage.setItem("user", username);
                return true;
            }
        }
    }
    return "Please enter valid credentials";
}

export const register = (details, authMode) => {
    let database = JSON.parse(localStorage.getItem("database"));
    const userArray = database ? database[authMode] : Database[authMode];
    if(userArray.some(user => user.username === details.username)) return "Username already exists, try a different one"
    if(userArray.some(user => user.email === details.email)) return "An account with this email already exists"
    if(userArray.some(user => user.phone === details.phone)) return "An account with this phone number already exists"

    Database[authMode].push(details);
    if(database){
        database[authMode].push(details);
        localStorage.setItem("database", JSON.stringify(database));
        return true
    }
    localStorage.setItem("database", JSON.stringify(Database));
    return true;
}

export const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
}

export const logout = () => {
    localStorage.removeItem("user");
};