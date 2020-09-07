import React from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import "./MovieList.scss";

export default function MovieList({ movies }) {
  return (
    <div className="MovieList">
      <h2>You Movie Search Results</h2>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          ))}
        </div>
      ) : (
        <div className="MovieList-message-empty"></div>
      )}
    </div>
  );
}
