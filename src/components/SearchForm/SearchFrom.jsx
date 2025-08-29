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
        <input
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
