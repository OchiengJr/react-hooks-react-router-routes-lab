import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
    
        {movies.map((movie) => {
          return (
            <div key={movie.title}>
              <h2>
                {movie.title}
              </h2>
              <p>Time {movie.time} </p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map((genre, index) => (

                  <li key={index}>{genre}</li>
                ))}
            </ul>
          
          </div>
          )
        })}
      
    </div>
  )
}

export default Movies;
