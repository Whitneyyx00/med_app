import React from 'react';
import './Sign_Up.css';

function SignUp() {
    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form id='signupForm'>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select id='role' name='role' required>
                        <option value=''>Select Role</option>
                        <option value='patient'>Patient</option>
                        <option value='doctor'>Doctor</option>
                        <option value='admin'>Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-buttons">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
            <div className='login-link'>
                <a href='/login'>Already have an account? Login</a>
            </div>
        </div>
    );
}

export default SignUp;