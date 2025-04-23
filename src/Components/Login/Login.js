import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.email = email ? "" : "Email is required.";
        tempErrors.password = password ? "" : "Password is required.";
        setErrors({ ...tempErrors });

        return Object.values(tempErrors).every(x => x === "");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', { email, password });
            alert('Login Successful!');
            // Reset form fields
            setEmail('');
            setPassword('');
            setErrors({});
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form id='loginForm' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <div className='error'>{errors.password}</div>}
                </div>
                <div className='form-buttons'>
                    <button type='submit'>Login</button>
                </div>
                <div className='signup-link'>
                    <a href='/signup'>Don't have an account? Sign Up</a>
                </div>
            </form>
        </div>
    );
}

export default Login;