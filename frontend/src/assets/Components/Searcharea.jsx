import React, { useEffect, useState } from "react";  
import './Searcharea.css';
import axios from 'axios';

const Searcharea = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const[suggestions,setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && suggestions.length > 0) {
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

  const searchResult = async () =>{
    try {
      const res = await axios.get(`https://knowledgepoll.site/api/app/searchdb/search?q=${inputValue}`);
      //setSuggestions(res.data.results.java.concat(res.data.results.react))
      console.log("+++++++++",res.data.results)

      if (res.data.success && res.data.results) {
        // Fetch titles from React, Java, and Articles
        const articleTitles = res.data.results.articles.map(item => item.title);
        const reactTitles = res.data.results.react.map(item => item.title);
        const javaTitles = res.data.results.java.map(item => item.title);

        // Combine all into suggestions
        const allSuggestions = [...articleTitles, ...reactTitles, ...javaTitles];

        setSuggestions(allSuggestions);
        setFilteredSuggestions(allSuggestions);
    }
      
    } catch (error) {
      console.log("---------------",error)
      
    }
  }
  useEffect(() => {
    if(inputValue){
      searchResult();
    }else{
      setFilteredSuggestions([]);
    };
     
  },[inputValue]);

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
