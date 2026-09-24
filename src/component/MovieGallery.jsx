import React from "react";
import "./MovieGallery.css";

const movies = [
  { rank: 1, name: "Superman" },
  { rank: 2, name: "Weapons" },
  { rank: 3, name: "Sinners" },
  { rank: 4, name: "One Battle After Another" },
  { rank: 5, name: "Jurassic World: Rebirth" },
  { rank: 6, name: "Frankenstein" },
  { rank: 7, name: "Happy Gilmore 2" },
  { rank: 8, name: "Thunderbolts*" },
  { rank: 9, name: "Mission: Impossible - The Final Reckoning" },
  { rank: 10, name: "F1" },
];

function MovieGallery() {
  return (
    <div className="poster">
      <h1>IMDb <span>2025</span></h1>

      <h2>MOST POPULAR MOVIES</h2>

      <p>AS OF 12/2/25</p>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie" key={movie.rank}>
            <div className="circle"></div>

            <div className="rank">
              {movie.rank}
            </div>

            <div className="movie-name">
              {movie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGallery;