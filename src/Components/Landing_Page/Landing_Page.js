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
        <>
            <section className='hero-section'>
                <div className='hero-content'>
                    <h1>Your Health, Our Priority</h1>
                    <p>Connecting You to Quality Healthcare, Anytime, Anywhere.</p>
                    <a href='/appointments' className='book-appointment-button'>
                        Book An Appointment
                    </a>
                </div>
            </section>

            <section id='appointments' className='appointments-section'>
                <h2>Find A Doctor with Ease</h2>
                <input type='text' placeholder='Search Doctors By Specialty or Location' />
                {/* Doctor Cards */}
                {['Dr. Alice Johnson', 'Dr. Emily Carter', 'Dr. David Rodriguez', 'Dr. Sarah Lee', 'Dr. Michael Brown'].map((doctorName) => (
                    <div className='doctor-card' key={doctorName}>
                        <img src='doctor-image.jpg' alt={doctorName} />
                        <h3>{doctorName}</h3>
                        <p>Specialty</p>
                        <p>Years of Experience</p>
                        <div className='rating'>Rating: ★★★★★</div>
                        <button type='button' className='view-details-button' onClick={() => openDoctorDetailsModal(doctorName)}>
                            View Details
                        </button>
                        <button type='button' className='book-appointment-button' onClick={() => openAppointmentModal(doctorName)}>
                            Book Appointment
                        </button>
                    </div>
                ))}
            </section>

            <section id='reviews' className='reviews-section'>
                <h2>Reviews</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Doctor Name</th>
                            <th>Doctor Specialty</th>
                            <th>Provide Review</th>
                            <th>Review Given</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Doctor Review Rows */}
                        {['Dr. Alice Johnson', 'Dr. Emily Carter', 'Dr. David Rodriguez', 'Dr. Sarah Lee', 'Dr. Michael Brown'].map((doctorName) => (
                            <tr key={doctorName}>
                                <td>S.No.</td>
                                <td>{doctorName}</td>
                                <td>Specialty</td>
                                <td>
                                    <button type='button' className='give-review-button' onClick={() => openReviewModal(doctorName)}>
                                        Give Review
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <footer>
                <p>&copy; 2025 StayHealthy Inc.</p>
            </footer>

            {/* Modals */}
            <DoctorDetailsModal
                doctorName={selectedDoctor}
                isOpen={isDoctorDetailsModalOpen}
                onClose={closeDoctorDetailsModal}
            />
            <ReviewModal
                doctorName={selectedDoctor}
                isOpen={isReviewModalOpen}
                onClose={closeReviewModal}
                onSubmitReview={handleSubmitReview}
            />
            <AppointmentModal
                doctorName={selectedDoctor}
                isOpen={isAppointmentModalOpen}
                onClose={closeAppointmentModal}
                onBookAppointment={handleBookAppointment}
            />
        </>
    );
}

export default LandingPage;