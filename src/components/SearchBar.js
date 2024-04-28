import React from "react";

function SearchBar({ onSortStocks, onFilterStocks, setStartFilter }) {

  function handleRadioButton(e) {
    onSortStocks(e.target.value)
  }

  function handleFiltering(e) {
    if(e.target.value !== ''){
      setStartFilter(true)
    }    
    onFilterStocks(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleRadioButton}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={handleRadioButton}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFiltering}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
