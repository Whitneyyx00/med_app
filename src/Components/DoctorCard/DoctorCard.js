import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

function DoctorCard({ doctor, onBookAppointment }) {
    const [showForm, setShowForm] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const handleBookAppointmentClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleAppointmentBooked = () => {
        setIsBooked(true);
        setShowForm(false);
        alert(`Appointment Booked with Dr. ${doctor.name}!`);
    };

    const handleCancelAppointmentClick = () => {
        setIsBooked(false);
        alert(`Appointment with Dr. ${doctor.name} Cancelled!`);
    };

    return (
        <div className='doctor-card'>
            <img src={doctor.image} alt={doctor.name} className='doctor-image' />
            <div className='doctor-card-details-container'>
                <h2>{doctor.name}</h2>
                <p className='speciality'>Speciality: {doctor.speciality}</p>
                <p className='experience'>Experience: {doctor.experience} years</p>
                <p className='rating'>Rating: {doctor.rating}</p>
                {/* add more doctor details here as needed */}
                <div>
                    {!isBooked ? (
                        <button
                            className='book-appointment-btn'
                            onClick={() => onBookAppointment(doctor)}
                        >
                            <div>Book Appointment</div>
                            <div>No Booking Fee</div>
                        </button>
                    ) : (
                        <button
                            className='cancel-appointment-btn'
                            onClick={handleCancelAppointmentClick}
                        >
                            Cancel Appointment
                        </button>
                    )}
                </div>
            </div>

            {showForm && (
                <AppointmentForm doctor={doctor} onClose={handleFormClose} onAppointmentBooked={handleAppointmentBooked} />
            )}
        </div>
    );
}

export default DoctorCard;