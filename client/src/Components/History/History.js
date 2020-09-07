import React from "react";
import "./History.scss";

export default function History({ searchHistory }) {
  const recentHistory = searchHistory.slice(
    Math.max(searchHistory.length - 3, 0)
  );
  console.log("Recent history", recentHistory);
  return (
    <div>
      <label htmlFor="history-select">Your recent searches:</label>
      <select name="movies" id="history-select">
        {recentHistory.map((searchTerm) => (
          <option value={searchTerm} key={searchTerm}>
            {searchTerm}
          </option>
        ))}
      </select>
    </div>
  );
}
