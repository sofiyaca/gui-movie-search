import React, { useState } from "react";
import "./SearchForm.scss";

export default function SearchBox({
  setSearchTerm,
  searchHistory,
  setSearchHistory,
}) {
  const [inputValue, setInputValue] = useState("");

  // Update the state of the input tag with it's value
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  // Update the search term when the form is submitted
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (inputValue) {
      setSearchTerm(inputValue);
      // Update search history
      console.log("INPUT VALUE", [...searchHistory, inputValue]);
      setSearchHistory([...searchHistory, inputValue]);

      // Update local storage history when a new search term is added
      let stringifiedHistory = JSON.stringify([...searchHistory, inputValue]);
      console.log("HISTORY", stringifiedHistory);
      localStorage.setItem("history", stringifiedHistory);
    } else {
      alert("Please add some text to the search box");
    }
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="movie-search">Search for a movie:</label>
        <input
          type="text"
          id="movie-search"
          name="query"
          aria-label="Type a word to search for movie titles"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
