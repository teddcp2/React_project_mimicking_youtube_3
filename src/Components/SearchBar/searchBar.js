import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  let [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    onFormSubmit(val);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e) => handleSubmission(e)}>
        <div className="field">
          <label htmlFor="searchbar">Video Search</label>
          <input
            type="search"
            name="searchbar"
            id="searchbar"
            value={val}
            onChange={handleChange}
            placeholder="Start typing here..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
