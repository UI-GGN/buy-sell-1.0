import React, { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import "../../App.css"
import useAuth from "../../customHooks/useAuth"
import Header from "../header/Header"
import LoginForm from "../login/LoginForm"
import RegisterForm from "../register/RegisterForm"
import Products from "../products/Products"
import Wishlist from "../wishlist/Wishlist"
import Cart from "../cart/Cart"
import ProductInfo from "../products/ProductInfo"
import PropTypes from "prop-types"

const RootRouter = () => {
    const { handleLogin, handleRegister, handleLogout, isAuthenticated } =
        useAuth()
    const [searchQuery, setSearchQuery] = useState("")

    function ProtectedRoute({ children, redirectTo }) {
        return isAuthenticated ? children : <Navigate to={redirectTo} />
    }

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <div>
                        <Header
                            isAuthenticated={isAuthenticated}
                            onLogout={handleLogout}
                            setSearchQuery={setSearchQuery}
                        />
                        <div className="container">
                            <Products
                                isAuthenticated={isAuthenticated}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />
                        </div>
                    </div>
                }
            />
            <Route
                exact
                path="/login"
                element={
                    <div>
                        <Header
                            isAuthenticated={isAuthenticated}
                            onLogout={handleLogout}
                        />
                        <div className="container">
                            <LoginForm
                                onLogin={handleLogin}
                                isAuthenticated={isAuthenticated}
                                authMode={"buyer"}
                            />
                        </div>
                    </div>
                }
            />
            <Route
                exact
                path="/seller"
                element={
                    <div>
                        <Header
                            isAuthenticated={isAuthenticated}
                            onLogout={handleLogout}
                        />
                        <div className="container">
                            <LoginForm
                                onLogin={handleLogin}
                                isAuthenticated={isAuthenticated}
                                authMode={"seller"}
                            />
                        </div>
                    </div>
                }
            />
            <Route
                exact
                path="/register"
                element={
                    <div>
                        <Header
                            isAuthenticated={isAuthenticated}
                            onLogout={handleLogout}
                        />
                        <div className="container">
                            <RegisterForm
                                onRegister={handleRegister}
                                isAuthenticated={isAuthenticated}
                                authMode={"buyer"}
                            />
                        </div>
                    </div>
                }
            />
            <Route
                exact
                path="/seller/register"
                element={
                    <div>
                        <Header
                            isAuthenticated={isAuthenticated}
                            onLogout={handleLogout}
                        />
                        <div className="container">
                            <RegisterForm
                                onRegister={handleRegister}
                                isAuthenticated={isAuthenticated}
                                authMode={"seller"}
                            />
                        </div>
                    </div>
                }
            />
            <Route
                exact
                path="/my/wishlist"
                element={
                    <ProtectedRoute redirectTo={"/"}>
                        <div>
                            <Header
                                isAuthenticated={isAuthenticated}
                                onLogout={handleLogout}
                            />
                            <div className="container">
                                <Wishlist />
                            </div>
                        </div>
                    </ProtectedRoute>
                }
            />
            <Route
                exact
                path="/my/cart"
                element={
                    <ProtectedRoute redirectTo={"/"}>
                        <div>
                            <Header
                                isAuthenticated={isAuthenticated}
                                onLogout={handleLogout}
                            />
                            <div className="container">
                                <Cart />
                            </div>
                        </div>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/products/:id"
                element={
                    <ProtectedRoute redirectTo={"/"}>
                        <div>
                            <Header
                                isAuthenticated={isAuthenticated}
                                onLogout={handleLogout}
                            />
                            <div className="container">
                                <ProductInfo
                                    isAuthenticated={isAuthenticated}
                                />
                            </div>
                        </div>
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

RootRouter.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string.isRequired
}

export default RootRouter
