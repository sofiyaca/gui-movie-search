import React, { useState, useEffect } from "react";
import ApiClient from "./Services/ApiClient";
import MovieList from "./Containers/MovieList";
import "./App.scss";
import SearchBox from "./Components/SearchForm/SearchForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // List new movies when the search term is updated.
  // Show an alert if no movies were found.
  useEffect(() => {
    ApiClient.getMovies(searchTerm).then((movieResults) => {
      if (movieResults.Response === "True") {
        setMovies(movieResults.Search);
      } else {
        alert("No movies were found, try a different search term.");
      }
    });
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Welcome to Movie Search</h1>
      <SearchBox setSearchTerm={setSearchTerm}></SearchBox>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
