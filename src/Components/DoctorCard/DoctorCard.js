import React, { useState } from 'react';
import './DoctorCard.css';
import { Link } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

function DoctorCard({ doctor, onBookAppointment, serialNumber }) {
    const [isBooked, setIsBooked] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleCancelAppointmentClick = () => {
        setIsBooked(false);
        alert(`Appointment with Dr. ${doctor.name} Cancelled!`); // Replace with a better notification
    };

    const handleBookAppointmentClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleAppointmentBooked = () => {
        setIsBooked(true);
        setShowForm(false);
        alert(`Appointment Booked with Dr. ${doctor.name}!`); // Replace with a better notification
    };

    return (
        <div className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-card-details-container">
                <h2>{doctor.name}</h2>
                <p className="specialty">Specialty: {doctor.specialty}</p>
                <p className="experience">Experience: {doctor.experience} years</p>
                <p className="rating">Rating: {doctor.rating}</p>
                <div>
                    {!isBooked ? (
                        <button
                            className='book-appointment-btn'
                            onClick={handleBookAppointmentClick}
                        >
                            <div>Book Appointment</div>
                            <div>No Booking Fee</div>
                        </button>
                    ) : (
                        <button
                            className="cancel-appointment-btn"
                            onClick={handleCancelAppointmentClick}
                        >
                            Cancel Appointment
                        </button>
                    )}
                    <Link to={`/reviews/${doctor.id}`} className="review-link">
                        View Reviews
                    </Link>
                </div>
            </div>

            {showForm && (
                <AppointmentForm
                    doctor={doctor}
                    onClose={handleFormClose}
                    onAppointmentBooked={handleAppointmentBooked} // Pass the new handler
                />
            )}
        </div>
    );
}

export default DoctorCard;
