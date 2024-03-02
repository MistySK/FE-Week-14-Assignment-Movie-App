
import React from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const moviesData = [
  {
    title: 'Glass Onion',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/62/Glass_Onion_poster.jpg',
    synopsis: 'Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.',
    rating: 3,
    reviews: ['Good movie!', 'Could be better.'],
  },
  {
    title: 'The Skeleton Key',
    image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36172_v_v9_aa.jpg',
    synopsis: 'A New Orleans hospice nurse who begins a job at a Terrebonne Parish plantation home becomes entangled in a supernatural mystery involving the house, its former inhabitants, and Hoodoo rituals and spells that took place there.',
    rating: 4,
    reviews: ['Awesome!', 'Highly recommended.'],
  },
];

const App = () => {
  return (
    <div>
        <MovieList movies={moviesData}/>
    </div>
  );
};


export default App;
