import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function Query() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadQuery = async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`
    );

    const data = await response.json();

    setSearchResults(data.query.search);
    console.log(data);
  };

  useEffect(() => {
    loadQuery();
  }, [offset]);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loadQuery={loadQuery}
        setOffset={setOffset}
        offset={offset}
      />

      <SearchResults searchResults={searchResults} />
    </>
  );
}
