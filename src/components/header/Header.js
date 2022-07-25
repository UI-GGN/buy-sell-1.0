import React, { useState, useEffect } from "react";
import "./headerStyles.css"
import Button from "../custom/button/Button"
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({isAuthenticated, login, register, onLogout}) => {
    const [path, setPath] = useState(window.location.pathname);


    const buttonSection = () => {
        return(
            <div className="button-section">
                <Button class="header-button" onClick={login}
                >
                    Login
                </Button>
                <Button class="header-button" onClick={register}
                >
                    Register
                </Button>
            </div>
        )
    }

    const profileSection = () => {
        return(
            <div className="profile">
                <p>{localStorage.getItem("user")}</p>
                <button onClick={() => {onLogout()}}><LogoutIcon/></button>
            </div>
        )
    }

    return(
        <nav className="header">
           {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="marketplace-icon"><title/>
           <path d="M28.908,12.571a.952.952,0,0,0-.1-.166,3.146,3.146,0,0,0-.118-.423c-.006-.016-.012-.032-.02-.048L25.917,5.6A1,1,0,0,0,25,5H7a1,1,0,0,0-.917.6l-2.77,6.381a2.841,2.841,0,0,0,0,2.083A4.75,4.75,0,0,0,6,16.609V27a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V16.609a4.749,4.749,0,0,0,2.687-2.543,2.614,2.614,0,0,0,.163-.655A1.057,1.057,0,0,0,28.908,12.571ZM13,26V20h2v6Zm4,0V20h2v6Zm7,0H21V19a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1v7H8V17a5.2,5.2,0,0,0,4-1.8,5.339,5.339,0,0,0,8,0A5.2,5.2,0,0,0,24,17Zm2.837-12.7A3.015,3.015,0,0,1,24,15a2.788,2.788,0,0,1-3-2.5,1,1,0,0,0-2,0A2.788,2.788,0,0,1,16,15a2.788,2.788,0,0,1-3-2.5,1,1,0,0,0-2,0A2.788,2.788,0,0,1,8,15a3.016,3.016,0,0,1-2.838-1.7.836.836,0,0,1,0-.571L7.656,7H24.344l2.477,5.7A.858.858,0,0,1,26.837,13.3Z"/>
           </svg> */}
           <Link
           style={{textDecoration: 'none'}}
           to={"/"}
           >
            <h1>CBP Marketplace</h1>
            </Link> 
           {console.log(window.location.pathname)}
           {window.location.pathname === "/" && (!isAuthenticated ? buttonSection() : profileSection())}
        </nav>
    )
}

export default Header;