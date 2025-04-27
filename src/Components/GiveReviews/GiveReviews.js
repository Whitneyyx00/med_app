import React, { useState } from 'react';
import './GiveReviews.css';

function GiveReviews({ doctor, onSubmit }) {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewData = {
            name: name,
            review: review,
            rating: rating,
        };
        onSubmit(reviewData);
        // Reset the form
        setName('');
        setReview('');
        setRating(0);
    };

    return (
        <div className='give-review-form'>
            <h3>Give Your Review for {doctor.name}</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='review'>Review:</label>
                    <textarea
                        id='review'
                        value={review}
                        onChange={handleReviewChange}
                        rows='4'
                        required
                    />
                </div>
                <div className='rating'>
                    <label>Rating:</label>
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default GiveReviews;