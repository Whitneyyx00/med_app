import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
    return (
        <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="StayHealthy Logo" width="100px" height="auto" />
              StayHealthy Inc.
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/appointments" className='nav-link'>Appointments</Link></li>
            <li><Link to="/reviews" className='nav-link'>Reviews</Link></li>
          </ul>
          <div className="auth-buttons" id="authButtons">
            <Link to='/signup' className="signup-button">Sign Up</Link>
            <Link to='/login' className="login-button">Login</Link>
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