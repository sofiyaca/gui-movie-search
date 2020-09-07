import React, { useState, useEffect } from "react";
import ApiClient from "./Services/ApiClient";
import MovieList from "./Containers/MovieList";
import SearchForm from "./Components/SearchForm/SearchForm";
import History from "./Components/History/History";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

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

  // Get the search history from
  // local storage and set it if it exists.
  useEffect(() => {
    let history = localStorage.getItem("history");
    history = JSON.parse(history);
    if (history) setSearchHistory(history);
  }, []);

  return (
    <div className="App">
      <h1 className="App-title">Welcome to Movie Search</h1>
      <SearchForm
        setSearchTerm={setSearchTerm}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <History searchHistory={searchHistory} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
