import React, { useState, useEffect } from "react";
import ApiClient from "./Services/ApiClient";
import MovieList from "./Containers/MovieList";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    ApiClient.getMovies("batman").then((movieResults) => {
      if (movieResults.Response === "True") {
        setMovies(movieResults.Search);
      } else {
        setDisplayError(true);
      }
    });
  }, []);

  return (
    <div className="App">
      <h3>Edited App</h3>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
