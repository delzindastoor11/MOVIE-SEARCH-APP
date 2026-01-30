import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // Stores search input
  const [query, setQuery] = useState("");

  // Handle button click
  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
