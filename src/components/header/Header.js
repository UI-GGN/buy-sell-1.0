import React, { useState } from "react"
import "./header.css"
import Button from "../custom/button/Button"
import { useNavigate } from "react-router-dom"
import Logo from "../../logo/CBP Marketplace-1.png"
import SellersPortalLogo from "../../logo/CBP_Sellers_Portal.png"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Dropdown from "../dropdown/Dropdown"
import Searchbar from "../searchbar/Searchbar"

const Header = ({ isAuthenticated, onLogout, setSearchQuery }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const iconLocationArray = [
        "/login",
        "/register",
        "/seller",
        "/seller/register",
    ]
    const navigate = useNavigate()

    const routeHome = () => {
        setShowDropdown(false)
        window.location.pathname === "/" && setSearchQuery("")
        navigate("/")
    }

    const routeLogin = () => {
        setShowDropdown(false)
        navigate("/login")
    }

    const routeRegister = () => {
        setShowDropdown(false)
        navigate("/register")
    }

    const routeSeller = () => {
        setShowDropdown(false)
        navigate("/seller")
    }

    const logout = () => {
        setShowDropdown(false)
        onLogout()
    }

    const buttonSection = () => {
        return (
            <div>
                <h5 className="dropdown-welcome">Welcome to CBP Marketplace</h5>
                <div className="button-section">
                    <Button className="header-button" onClick={routeLogin}>
                        Login
                    </Button>
                    <Button className="header-button" onClick={routeRegister}>
                        Sign Up
                    </Button>
                </div>
            </div>
        )
    }

    const username = () => {
        return (
            <div>
                <div className="welcome-user">
                    <p>Hi</p>
                    <p id="username">{localStorage.getItem("user")}</p>
                </div>
                <hr />
                <div>
                    <p>Orders</p>
                </div>
                <div>
                    <p>Wishlist</p>
                </div>
                <div>
                    <p>My Profile</p>
                </div>
                <div>
                    <p>Saved Addresses</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <nav className="header">
                <button
                    className="icon-button"
                    style={{
                        textDecoration: "none",
                        marginInlineStart: "20px",
                    }}
                    onClick={() => routeHome()}
                >
                    {window.location.pathname === "/seller" ||
                    window.location.pathname === "/seller/register" ? (
                        <img
                            className="sellers-logo"
                            src={SellersPortalLogo}
                            alt="Logo for CBP Sellers Portal"
                        />
                    ) : (
                        <img
                            className="logo"
                            src={Logo}
                            alt="CBP Marketplace Logo"
                        />
                    )}
                </button>

                {window.location.pathname === "/" && (
                    <Searchbar setSearchQuery={setSearchQuery} />
                )}

                {!iconLocationArray.includes(window.location.pathname) && (
                    <div className="icons-section">
                        <div className="profile-icon">
                            <button
                                className="icon-button"
                                onClick={() => {
                                    setShowDropdown(!showDropdown)
                                }}
                            >
                                <PersonOutlineOutlinedIcon />
                                {/* <img src="/Users/maddy/Desktop/Projects/CBP/icons8-customer-100.png"></img> */}
                            </button>
                            <p className="icon-title">Profile</p>
                            {showDropdown && (
                                <div style={{ height: 0 }}>
                                    <div className="indicator"></div>
                                    <Dropdown
                                        style={
                                            isAuthenticated
                                                ? { right: "80px" }
                                                : { right: "0px" }
                                        }
                                        setShowDropdown={setShowDropdown}
                                    >
                                        {isAuthenticated
                                            ? username()
                                            : buttonSection()}
                                        <hr />
                                        <div onClick={() => routeSeller()}>
                                            <p>Seller Portal</p>
                                        </div>
                                        <div>
                                            <p>Contact us</p>
                                        </div>
                                        {isAuthenticated && (
                                            <div
                                                onClick={() => {
                                                    logout()
                                                }}
                                            >
                                                <p>Logout</p>
                                            </div>
                                        )}
                                    </Dropdown>
                                </div>
                            )}
                        </div>

                        {isAuthenticated && (
                            <div className="inner-icons-section">
                                <div className="wishlist-icon">
                                    <button
                                        className="icon-button"
                                        onClick={() => navigate("/my/wishlist")}
                                    >
                                        <FavoriteBorderIcon />
                                    </button>
                                    <p className="icon-title">Wishlist</p>
                                    {window.location.pathname ===
                                        "/my/wishlist" && (
                                        <div className="indicator"></div>
                                    )}
                                </div>
                                <div className="cart-icon">
                                    <button
                                        className="icon-button"
                                        onClick={() => navigate("/my/cart")}
                                    >
                                        <ShoppingCartOutlinedIcon />
                                    </button>
                                    <p className="icon-title">Cart</p>
                                    {window.location.pathname ===
                                        "/my/cart" && (
                                        <div className="indicator"></div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Header
