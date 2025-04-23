import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-buttons">
                <button type="submit">Login</button>
            </div>
            <div className="signup-link">
                <a href="/signup">Don't have an account? Sign Up</a>
            </div>
        </form>
    </div>
    );
}

export default Login;