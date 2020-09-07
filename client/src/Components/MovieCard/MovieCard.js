import React from "react";
import "./MovieCard.scss";

export default function MovieCard({ title, year, poster }) {
  return (
    <div className="MovieCard">
      <div className="MovieCard-thumbnail">
        <img
          className="MovieCard-thubmail-img"
          alt="movie poster"
          src={poster}
        />
      </div>
      <div className="MovieCard-details">
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </div>
  );
}
