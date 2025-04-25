import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ doctor, appointment, isBooked, onCancel, patientName, phoneNumber }) => {
    const [visible, setVisible] = useState(isBooked); // Initialize visibility based on booking status

    useEffect(() => {
        setVisible(isBooked); // Update visibility when isBooked prop changes
    }, [isBooked]);

    const handleCancel = () => {
        onCancel();
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className='notification-container'>
            <div className='notification'>
                <h3>Appointment Details</h3>
                <p>
                    <strong>Name:</strong> {patientName}
                </p>
                <p>
                    <strong>Phone Number:</strong> {phoneNumber}
                </p>
                <p>
                    <strong>Doctor:</strong> {doctor.name}
                </p>
                <p>
                    <strong>Speciality:</strong> {doctor.speciality}
                </p>
                <p>
                    <strong>Date:</strong> {appointment.date}
                </p>
                <p>
                    <strong>Time:</strong> {appointment.time}
                </p>
                <button className='cancel-button'  onClick={handleCancel}>
                    Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default Notification;