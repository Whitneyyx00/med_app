import React, { useState } from 'react';

function ReviewModal({ doctorName, onClose, isOpen, onSubmitReview }) {
    const [reviewText, setReviewText] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitReview({ doctorName, reviewText });
        setReviewText('');
        onClose();
    };

    return (
        <div className='modal' id='reviewModal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>
                    &times;
                </span>
                <h2>
                    Provide A Review for <span id='doctorName'>{doctorName}</span>
                </h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        id='reviewText'
                        placeholder='Write your review here'
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <button type='submit'>Submit Review</button>
                </form>
            </div>
        </div>
    );
}

export default ReviewModal;