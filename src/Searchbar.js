import React, { useState } from "react";

// SearchBar component represents the search bar functionality.
// It takes a prop 'searchForTopic' which is a function to handle topic search.
// The component maintains a state 'topic' using useState hook to store the current topic value.

const SearchBar = ({ searchForTopic }) => {
  const [topic, setTopic] = useState("");

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSearch = () => {
    searchForTopic(topic);
  };

// handleChange function updates the 'topic' state as the input value changes.
// handleSearch function is triggered when the search button is clicked.
// It calls the 'searchForTopic' function with the current topic value.

  return (
    <div>
      {/* Search input */}
      <input
        className="searchbar"
        autoFocus
        value={topic}
        onChange={handleChange}
      />

      {/* Search button 
      // The search button triggers the handleSearch 
      // function to perform the search.*/}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
