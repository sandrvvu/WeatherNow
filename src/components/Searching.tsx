import React, { useState} from "react";
import { BsSearch } from "react-icons/bs";

type SearchingProps = {
  handleSearchSubmit: (searchQuery: string) => void;
};

const Searching = ({ handleSearchSubmit }: SearchingProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="text"
        placeholder="Search city"
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button id="btn-submit" type="submit" disabled={!searchQuery}>
        <BsSearch />
      </button>
    </form>
  );
};

export default Searching;