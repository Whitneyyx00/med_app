import React, { useState } from 'react';
import './LandingPage.css';
import DoctorDetailsModal from '../Modals/DoctorDetailsModal';
import ReviewModal from '../Modals/ReviewModal';
import AppointmentModal from '../Modals/AppointmentModal';

function LandingPage() {
    const [isDoctorDetailsModalOpen, setDoctorDetailsModalOpen] = useState(false);
    const [isReviewModalOpen, setReviewModalOpen] = useState(false);
    const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Functions to open modals
    const openDoctorDetailsModal = (doctorName) => {
        setSelectedDoctor(doctorName);
        setDoctorDetailsModalOpen(true);
    };

    const openReviewModal = (doctorName) => {
        setSelectedDoctor(doctorName);
        setReviewModalOpen(true);
    };

    const openAppointmentModal = (doctorName) => {
        setSelectedDoctor(doctorName);
        setAppointmentModalOpen(true);
    };

    // Functions to close modals
    const closeDoctorDetailsModal = () => {
        setDoctorDetailsModalOpen(false);
        setSelectedDoctor(null);
    };

    const closeReviewModal = () => {
        setReviewModalOpen(false);
        setSelectedDoctor(null);
    };

    const closeAppointmentModal = () => {
        setAppointmentModalOpen(false);
        setSelectedDoctor(null);
    };

    // Handlers for modal actions (Submit Review, Book Appointment)
    const handleSubmitReview = (reviewData) => {
        console.log('Review data:', reviewData);
        alert(`Review submitted for ${reviewData.doctorName}`);
    };

    const handleBookAppointment = (appointmentData) => {
        console.log('Appointment data:', appointmentData);
        alert(`Appointment booked with ${appointmentData.doctorName} on ${appointmentData.appointmentDate} at ${appointmentData.appointmentTime}`);
    };

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