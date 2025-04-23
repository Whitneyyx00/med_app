import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
    const authToken = sessionStorage.getItem("auth-token");
    const userEmail = sessionStorage.getItem("email");
    const userName = userEmail ? userEmail.split('@')[0] : ''; // Extract name from email

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="StayHealthy Logo" width="100px" height="auto" />
                    StayHealthy Inc.
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to='/instant-consultation'>Instant Consultation</Link></li>
            </ul>
            <div className="auth-buttons" id="authButtons">
                {authToken ? (
                    <>
                        <span style={{ color: '#d8bfaa', marginRight: '10px' }}>Welcome, {userName}</span>
                        <button type="button" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" className="signup-button">Sign Up</Link>
                        <Link to="/login" className="login-button">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;