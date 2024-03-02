import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
    const [newReview, setNewReview] = useState('');

    const handleInputChange = (event) => {
      setNewReview(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onReviewSubmit(newReview);
      setNewReview('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Review</button>
      </form>
    );};

export default ReviewForm;