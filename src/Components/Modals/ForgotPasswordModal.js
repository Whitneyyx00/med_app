import React, { useState } from 'react';

function ForgotPasswordModal({ onClose, isOpen, onResetPassword }) {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onResetPassword({ email });
        setEmail('');
        onClose();
    };

    return (
        <div className='modal' id='forgotPasswordModal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>
                    &times;
                </span>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='forgotPasswordEmail'>Email:</label>
                    <input
                        type='email'
                        id='forgotPasswordEmail'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type='submit'>Reset Password</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordModal;