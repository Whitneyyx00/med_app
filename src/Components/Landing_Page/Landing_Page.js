import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>Your Health, Our Priority</h1>
                <p>Connecting You to Quality Healthcare, Anytime, Anywhere.</p>
                <a href='/appointments' className='book-appointment-button'>
                    Book An Appointment
                </a>
            </div>
        </div>
    );
};

export default LandingPage;