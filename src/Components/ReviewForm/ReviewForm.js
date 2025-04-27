import React, { useState } from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';

function ReviewForm({ doctor, serialNumber }) {
    const [showForm, setShowForm] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [submittedReview, setSubmittedReview] = useState(null);

    const handleReviewButtonClick = () => {
        setShowForm(true);
    };

    const handleReviewSubmit = (reviewData) => {
        setSubmittedReview(reviewData);
        setReviewSubmitted(true);
        setShowForm(false);
    };

    return (
        <>
            <tr>
                <td>{serialNumber}</td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                    {!showForm && !reviewSubmitted ? (
                        <button onClick={handleReviewButtonClick} className='review-button'>
                            Click Here
                        </button>
                    ) : null}
                </td>
                <td>{reviewSubmitted ? 'Review Given' : 'No Review'}</td>
            </tr>
            {showForm && (
                <tr>
                    <td colSpan='5'>
                        <GiveReviews doctor={doctor} onSubmit={handleReviewSubmit} />
                    </td>
                </tr>
            )}
        </>
    );
}

export default ReviewForm;