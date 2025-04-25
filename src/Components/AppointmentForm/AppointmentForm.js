import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm({ doctor, onClose, onAppointmentBooked }) {
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const appointmentDetails = {
            date: appointmentDate,
            time: appointmentTime,
        };

        console.log('Appointment Details:');
        console.log('Doctor:', doctor.name);
        console.log('Patient Name:', patientName);
        console.log('Date:', appointmentDate);
        console.log('Time:', appointmentTime);
        console.log('Phone Number:', phoneNumber);

        // Simulate successful booking
        setTimeout(() => {
            onAppointmentBooked(doctor, appointmentDetails, patientName, phoneNumber);
        }, 1000);
        
        // After submitting, you might want to  close the form
        onClose();
    };

    return (
        <div className='appointment-form-overlay'>
            <div className='appointment-form'>
                <h2>Book Appointment with {doctor.name}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='patientName'>Patient Name:</label>
                        <input
                            type='text'
                            id='patientName'
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            type='tel'
                            id='phoneNumber'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='appointmentDate'>Appointment Date:</label>
                        <input
                            type='date'
                            id='appointmentDate'
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='appointmentTime'>Appointment Time:</label>
                        <input
                            type='time'
                            id='appointmentTime'
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='submit-button'>Book Appointment</button>
                    <button type='button' className='cancel-button' onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AppointmentForm;