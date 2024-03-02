import React from 'react';

const Stars = ({ rating, onRate }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {starArray.map((star) => (
        <span key={star} onClick={() => onRate(star)}>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Stars;