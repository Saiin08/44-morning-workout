// import { useState } from "react";

export default function SearchResults({ searchResults }) {
  // const [searchResults, setSearchResults] = useState([]);
  console.log("searchResults", searchResults);
  return (
    <div className="results">
      {searchResults.map((result) => {
        return <p key={result.id}>{result.title}</p>;
      })}
    </div>
  );
}
