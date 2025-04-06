import React, { useEffect, useState } from "react";  
import './Searcharea.css';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import {useNavigate} from 'react-router';

const Searcharea = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const[suggestions,setSuggestions] = useState([]);
  const[title,setTitle] = useState("");
  // console.log("777777777777",title);
  const navigate = useNavigate();


  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setTitle(e.target.value)
      // console.log("Enter Key is pressed")
      navigate('/python')
    }

  };

  // const routerchange = (Title) => {
  //   const path = "/python"
  //   navigate(path,{state:{Title}});
  // }

  // const setinputTitle = (e) => {
  //   setTitle(e.target.value)
  //   console.log("onclick event is triggered")
  //   // navigate('/react')

  // };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && suggestions.length > 0) {
      setFilteredSuggestions(
        suggestions.filter((s) => s.title.toLowerCase().startsWith(value.toLowerCase()))
      );
    } else {
      setFilteredSuggestions([]);
    }
    
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.title);
    setFilteredSuggestions([]);
    // setTitle(e.target.value);
    navigate(`/${suggestion.tag}`, { state: { Title: suggestion.title } });
  };

  const searchResult = async () =>{
    try {
      const res = await axios.get(`${BASE_URL}/app/searchdb/search?q=${inputValue}`);
      //setSuggestions(res.data.results.java.concat(res.data.results.react))
      //console.log("+++++++++",res.data.results)

      if (res.data.success && res.data.results) {
        // Fetch titles from React, Java, and Articles
        const articleTitles = res.data.results.articles.map(item => ({title:item.title,tag:"python"}));
        const reactTitles = res.data.results.react.map(item => ({title:item.title,tag:"react"}));
        const javaTitles = res.data.results.java.map(item => ({title:item.title,tag:"java"}));

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
          onKeyDown={handleEnter}
          // onClick={() => routerchange("Installing Python")}
           
        />
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
};


export default Searcharea
