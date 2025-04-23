import React, { useState } from 'react';
import './Sign_Up.css';

function SignUp() {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.role = role ? "" : "Please select a role.";
        tempErrors.name = name ? "" : "Name is required.";
        tempErrors.phone = phone ? "" : "Phone number is required.";
        tempErrors.email = email ? "" : "Email is required.";
        tempErrors.password = password ? "" : "Password is required.";
        setErrors({ ...tempErrors });

        return Object.values(tempErrors).every(x => x === "");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', { role, name, phone, email, password });
            alert('Sign Up Successful!');
            // Reset form fields
            setRole('');
            setName('');
            setPhone('');
            setEmail('');
            setPassword('');
            setErrors({});
        }
    };

    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form id='signupForm' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select id='role' name='role' value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value=''>Select Role</option>
                        <option value='patient'>Patient</option>
                        <option value='doctor'>Doctor</option>
                        <option value='admin'>Admin</option>
                    </select>
                    {errors.role && <div className='error'>{errors.role}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <div className='error'>{errors.name}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input type='tel' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {errors.phone && <div className='error'>{errors.phone}</div>}
                </div>
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
                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>
            <div className='login-link'>
                <a href='/login'>Already have an account? Login</a>
            </div>
        </div>
    );
}

export default SignUp;