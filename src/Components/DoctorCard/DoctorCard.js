import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

function DoctorCard({ doctor }) {
    const [showForm, setShowForm] = useState(false);

    const handleBookAppointmentClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
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
                    <button className='book-appointment-btn'  onClick={handleBookAppointmentClick}>
                        <div>Book Appointment</div>
                        <div>No Booking Fee</div>
                    </button>
                </div>
            </div>

            {showForm && (
                <AppointmentForm doctor={doctor} onClose={handleFormClose} />
            )}
        </div>
    );
}

export default DoctorCard;