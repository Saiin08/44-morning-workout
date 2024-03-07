import { useState } from "react";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  loadQuery,
  setOffset,
  offset,
}) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handClick = () => {
    loadQuery();
  };

  return (
    <div className="search_bar">
      <div>
        <button
          onClick={() => {
            setOffset(offset - 1);
          }}
        >
          Pre
        </button>
        <button
          onClick={() => {
            setOffset(offset + 1);
          }}
        >
          Next
        </button>
      </div>
      <input value={searchQuery} onChange={handleChange} type="text" />
      <button onClick={handClick}>Search</button>
    </div>
  );
}
