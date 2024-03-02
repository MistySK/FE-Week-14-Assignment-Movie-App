// a component for a list of all of the movies and their data

import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState(movies);

  const handleRate = (movieTitle, newRating) => {
    setMovieData((prevMovies) =>
      prevMovies.map((movie) =>
        movie.title === movieTitle ? { ...movie, rating: newRating } : movie
      )
    );
  };

  const handleReviewSubmit = (movieTitle, review) => {
    setMovieData((prevMovies) =>
      prevMovies.map((movie) =>
        movie.title === movieTitle
          ? { ...movie, reviews: [...movie.reviews, review] }
          : movie
      )
    );
  };

  return (
    <div>
      {movieData.map((movie) => (
        <Movie
          key={movie.title}
          movie={movie}
          onRate={(newRating) => handleRate(movie.title, newRating)}
          onReviewSubmit={(review) => handleReviewSubmit(movie.title, review)}
        />
      ))}
    </div>
  );
};

export default MovieList;