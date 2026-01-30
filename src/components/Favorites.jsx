function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h2>⭐ Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet</p>}

      <div className="movie-list">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h4>{movie.Title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
