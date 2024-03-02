// where info for each movie will go

import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './Movie.css';

const Movie = ({ movie, onRate, onReviewSubmit }) => {
  const { title, image, synopsis, rating, reviews } = movie;
  return (
    <div className='movie-container'>
      <h2>{title}</h2>
      <img className="image" src={image} alt={title} />
      <p>{synopsis}</p>
      <p>Rating: {rating}</p>
      <Stars rating={rating} onRate={onRate} />
      <ReviewList reviews={reviews} />
      <ReviewForm onReviewSubmit={onReviewSubmit} />
    </div>
  );};

export default Movie;