import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { AuthContext } from '../../AuthContext';

function Navbar() {
    const [showProfile, setShowProfile] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
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
                <li><Link to='/instant-consultation'>Instant Consultation</Link></li>
                <li><Link to='/book-consultation'>Book Consultation</Link></li>
                <li><Link to='/find-a-doctor'>Find a Doctor</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
                {user && (
                    <li className='profile-dropdown'>
                        <div className='dropdown'>
                            <button className='dropbtn' onClick={toggleProfile}>
                                Welcome, {user.name}
                            </button>
                            <div className='dropdown-content' style={{ display: showProfile ? 'block' : 'none' }}>
                                <Link to='/profile'>Profile</Link>
                                <Link to='/reports'>Your Reports</Link>
                                <button onClick={logout} className='logout-button'>Logout</button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            <div className='auth-buttons' id='authButtons'>
                {!user || user === null ? (
                    <>
                        <Link to='/signup' className='signup-button'>Sign Up</Link>
                        <Link to='/login' className='login-button'>Login</Link>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}

export default Navbar;