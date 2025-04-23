import React from 'react';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
    return (
        <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="StayHealthy Logo" width="100px" height="auto" />
              StayHealthy Inc.
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
          <div className="auth-buttons" id="authButtons">
            <button type="button" className="signup-button" onClick={() => { alert('Open Signup Modal'); }}>Sign Up</button>
            <button type="button" className="login-button" onClick={() => { alert('Open Login Modal'); }}>Login</button>
          </div>
          <div className="user-greeting" id="userGreeting" style={{ display: 'none' }}>
            <span id="userName"></span>
            <button type="button" onClick={() => { alert('Logout'); }}>Logout</button>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;