import React, { useState } from "react";  
import './Searcharea.css'

const Searcharea = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setFilteredSuggestions(
        suggestions.filter((s) => s.toLowerCase().startsWith(value.toLowerCase()))
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return(
    <div className="container">
      <h1 className="title">Hello, What do you want to learn?</h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="🔍 Learn Python, Java, C++ etc."
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
           
        />
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
};


export default Searcharea
