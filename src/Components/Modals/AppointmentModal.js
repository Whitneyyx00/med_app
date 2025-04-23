import React, { useState } from 'react';

function AppointmentModal({ doctorName, onClose, isOpen, onBookAppointment }) {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('9:00');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onBookAppointment({ doctorName, appointmentDate, appointmentTime });
        setAppointmentDate('');
        setAppointmentTime('9:00');
        onClose();
    };

    return (
        <div className='modal' id='appointmentModal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>
                    &times;
                </span>
                <h2>
                    Book An Appointment with <span id='appointmentDoctorName'>{doctorName}</span>
                </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='appointmentDate'>Date:</label>
                    <input
                        type='date'
                        id='appointmentDate'
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                    <label htmlFor='appointmentTime'>Time:</label>
                    <select id='appointmentTime' value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)}>
                        <option value='9:00'>9:00 AM</option>
                        <option value='9:30'>9:30 AM</option>
                        <option value='10:00'>10:00 AM</option>
                        <option value='10:30'>10:30 AM</option>
                        <option value='11:00'>11:00 AM</option>
                        <option value='11:30'>11:30 AM</option>
                        <option value='14:00'>2:00 PM</option>
                        <option value='14:30'>2:30 PM</option>
                        <option value='15:00'>3:00 PM</option>
                        <option value='15:30'>3:30 PM</option>
                        <option value='16:00'>4:00 PM</option>
                        <option value='16:30'>4:30 PM</option>
                        <option value='17:00'>5:00 PM</option>
                        <option value='17:30'>5:30 PM</option>
                        <option value='18:00'>6:00 PM</option>
                    </select>
                    <button type='submit'>Book Now</button>
                </form>
            </div>
        </div>
    );
}

export default AppointmentModal;