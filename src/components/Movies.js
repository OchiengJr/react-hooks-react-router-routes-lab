import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Welcome to the Movies Page</h1>
      <p>Here you can find information about various movies.</p>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
