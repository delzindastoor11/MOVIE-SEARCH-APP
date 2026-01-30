import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Favorites from "./components/Favorites";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error(err);
    }
  };

  const addFavorite = (movie) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar onSearch={searchMovies} />

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavorite={addFavorite}
          />
        ))}
      </div>

      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
