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
    const value = e.target.value || "";
    setInputValue(value);

    if (value && suggestions.length > 0) {
      setFilteredSuggestions(
        suggestions.filter((s) => s?.title?.toLowerCase().startsWith(value.toLowerCase()))
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

      //console.log("Fetching for",inputValue)

      if (res.data.success && res.data.results) {
        // Fetch titles from React, Java, and Articles
        const articleTitles = res.data.results.articles.map(item => ({title:item.title,tag:"python"}));
        const reactTitles = res.data.results.react.map(item => ({title:item.title,tag:"react"}));
        const javaTitles = res.data.results.java.map(item => ({title:item.title,tag:"java"}));
        const aiagentsTitles = res.data.results.aiagents.map(item => ({title:item.title,tag:"aiagent"}));
        const androidTitles = res.data.results.android.map(item => ({title:item.title,tag:"android"}));
        const awsTitles = res.data.results.aws.map(item => ({title:item.title,tag:"aws"}));
        const bootstrapTitles = res.data.results.bootstrap.map(item => ({title:item.title,tag:"bootstrap"}));
        const cdTitles = res.data.results.cd.map(item => ({title:item.title,tag:"cd"}));
        const cnTitles = res.data.results.cn.map(item => ({title:item.title,tag:"cn"}));
        const cppTitles = res.data.results.cpp.map(item => ({title:item.title,tag:"cpp"}));
        const cTitles = res.data.results.c.map(item => ({title:item.title,tag:"c"}));
        const cssTitles = res.data.results.css.map(item => ({title:item.title,tag:"css"}));
        const daTitles = res.data.results.da.map(item => ({title:item.title,tag:"dataanalyst"}));
        const dsTitles = res.data.results.ds.map(item => ({title:item.title,tag:"datascience"}));
        const dbmsTitles = res.data.results.dbms.map(item => ({title:item.title,tag:"dbms"}));
        const dlTitles = res.data.results.dl.map(item => ({title:item.title,tag:"dl"}));
        const dockerTitles = res.data.results.docker.map(item => ({title:item.title,tag:"docker"}));
        const dsaTitles = res.data.results.dsa.map(item => ({title:item.title,tag:"dsa"}));
        const excelTitles = res.data.results.excel.map(item => ({title:item.title,tag:"excel"}));
        const gitlabTitles = res.data.results.gitlab.map(item => ({title:item.title,tag:"gitlab"}));
        const gitTitles = res.data.results.gits.map(item => ({title:item.title,tag:"git"}));
        const golangTitles = res.data.results.golang.map(item => ({title:item.title,tag:"golang"}));
        const gradleTitles = res.data.results.gradle.map(item => ({title:item.title,tag:"gradle"}));
        const htmlTitles = res.data.results.html.map(item => ({title:item.title,tag:"html"}));
        const isdhTitles = res.data.results.isdh.map(item => ({title:item.title,tag:"isdh"}));
        const jsTitles = res.data.results.js.map(item => ({title:item.title,tag:"js"}));
        const kubernetesTitles = res.data.results.kubernetes.map(item => ({title:item.title,tag:"kubernetes"}));
        const linuxTitles = res.data.results.linux.map(item => ({title:item.title,tag:"linux"}));
        const matplotlibTitles = res.data.results.matplotlib.map(item => ({title:item.title,tag:"matplotlib"}));
        const mlTitles = res.data.results.ml.map(item => ({title:item.title,tag:"ml"}));
        const mongodbTitles = res.data.results.mongodb.map(item => ({title:item.title,tag:"mongodb"}));
        const mysqlTitles = res.data.results.mysql.map(item => ({title:item.title,tag:"mysql"}));
        const numpyTitles = res.data.results.numpy.map(item => ({title:item.title,tag:"numpy"}));
        const oopsTitles = res.data.results.oops.map(item => ({title:item.title,tag:"oops"}));
        const osTitles = res.data.results.os.map(item => ({title:item.title,tag:"os"}));
        const pandasTitles = res.data.results.pandas.map(item => ({title:item.title,tag:"pandas"}));
        const perlTitles = res.data.results.perl.map(item => ({title:item.title,tag:"perl"}));
        const postgresqlTitles = res.data.results.postgresql.map(item => ({title:item.title,tag:"postgre"}));
        const productmanagTitles = res.data.results.productmanag.map(item => ({title:item.title,tag:"productm"}));
        const projectmanagTitles = res.data.results.projectmanag.map(item => ({title:item.title,tag:"pm"}));
        const rustTitles = res.data.results.rust.map(item => ({title:item.title,tag:"rust"}));
        const seabornTitles = res.data.results.seaborn.map(item => ({title:item.title,tag:"seaborn"}));
        const sklearnTitles = res.data.results.sklearn.map(item => ({title:item.title,tag:"sklearn"}));
        const softwaretestingTitles = res.data.results.st.map(item => ({title:item.title,tag:"st"}));
        const sqlTitles = res.data.results.sql.map(item => ({title:item.title,tag:"sql"}));
        const systemdesignTitles = res.data.results.systemdesign.map(item => ({title:item.title,tag:"systemdesign"}));
        const tailwindcssTitles = res.data.results.tailwindcss.map(item => ({title:item.title,tag:"tailwind"}));

        // Combine all into suggestions
        const allSuggestions = [...articleTitles, ...reactTitles, ...javaTitles,...aiagentsTitles,...androidTitles,
          ...awsTitles,...bootstrapTitles,cdTitles,...cnTitles,...cppTitles,...cTitles,...cssTitles
          ,...daTitles,...dsTitles,...dbmsTitles,...dlTitles,...dockerTitles,...dsaTitles,...excelTitles,...gitlabTitles,
          ...gitTitles,...golangTitles,...gradleTitles,...htmlTitles,...isdhTitles,...jsTitles,...kubernetesTitles,
          ...linuxTitles,...matplotlibTitles,...mlTitles,...mongodbTitles,...mysqlTitles,...numpyTitles,...oopsTitles,
          ...osTitles,...pandasTitles,...perlTitles,...postgresqlTitles,...productmanagTitles,...projectmanagTitles,
          ...rustTitles,...seabornTitles,...sklearnTitles,...softwaretestingTitles,...sqlTitles,...systemdesignTitles,
          ...tailwindcssTitles
        ];

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
