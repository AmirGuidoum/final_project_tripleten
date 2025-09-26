import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        {window.innerWidth > 320 ? (
          <>
            <input
              type="text"
              placeholder="Enter topic"
              className="search__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              Search
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter topic"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="large-button">
              Search
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
