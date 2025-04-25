import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm({ doctor, serialNumber }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle review submission logic here (e.g., send to API)
        console.log('Review submitted:', {
            doctor: doctor.name,
            rating: rating,
            comment: comment,
        });
        // Reset the form
        setRating(0);
        setComment('');
        setShowForm(false);
    };

    const handleReviewButtonClick = () => {
        setShowForm(true);
    };

    return (
        <>
            <tr>
                <td>{serialNumber}</td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                    {!showForm ? (
                        <button onClick={handleReviewButtonClick} className='review-button'>
                            Click Here
                        </button>
                    ) : null}
                </td>
                <td>{showForm ? 'Review Given' : 'No Review'}</td>
            </tr>
            {showForm && (
                <tr>
                    <td colSpan='5'>
                        <form onSubmit={handleSubmit} className='review-form'>
                            <h3>Review for {doctor.name}</h3>
                            <div className='rating'>
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <span
                                        key={value}
                                        className={`star ${value <= rating ? 'active' : ''}`}
                                        onClick={() => handleRatingChange(value)}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <textarea
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder='Share your experience...'
                                rows='4'
                            />
                            <button type='submit'>Submit Review</button>
                        </form>
                    </td>
                </tr>
            )}
        </>
    );
}

export default ReviewForm;