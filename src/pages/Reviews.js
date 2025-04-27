import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GiveReviews from '../Components/GiveReviews/GiveReviews';
import doctorsData from '../doctors.json';
import './Reviews.css';

function Reviews() {
    const { doctorId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [submittedReviews, setSubmittedReviews] = useState({});

    const handleReviewButtonClick = (doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleReviewSubmit = (doctor, reviewData) => {
        setSubmittedReviews((prevReviews) => ({
            ...prevReviews,
            [doctor.id]: {
                ...reviewData,
                submitted: true,
            },
        }));
        setShowModal(false);
    };

    return (
        <div className='reviews-page-container'>
            <h1>Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => {
                        const review = submittedReviews[doctor.id];
                        const isSubmitted = review && review.submitted;

                        return (
                            <tr key={doctor.id}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    {!isSubmitted ? (
                                        <button
                                            onClick={() => handleReviewButtonClick(doctor)}
                                            className='review-button'
                                            disabled={isSubmitted}
                                        >
                                            Click Here
                                        </button>
                                    ) : (
                                        'Review Submitted'
                                    )}
                                </td>
                                <td>
                                    {review ? review.review : 'No Review'}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {showModal && selectedDoctor && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseModal}>&times;</span>
                        <GiveReviews
                            doctor={selectedDoctor}
                            onSubmit={(reviewData) => handleReviewSubmit(selectedDoctor, reviewData)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reviews;