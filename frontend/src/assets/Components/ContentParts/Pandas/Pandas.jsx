import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
import  '../Python/Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Pandas = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Pandas" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const pandas_topics = [
  "Introduction to Pandas",
  "Installing Pandas",
  "Pandas Data Structures",
  "Series",
  "DataFrame",
  "Creating Series and DataFrames",
  "Reading Data (CSV, Excel, JSON, SQL)",
  "Writing Data (to CSV, Excel, JSON, SQL)",
  "Inspecting Data (head, tail, info, describe)",
  "Selecting and Filtering Data",
  "Indexing and Slicing",
  "Label-based Indexing with loc",
  "Position-based Indexing with iloc",
  "Boolean Indexing",
  "Setting and Resetting Index",
  "Data Types and Type Conversion",
  "Handling Missing Data",
  "Filling and Dropping NA",
  "Replacing Values",
  "Renaming Columns and Indexes",
  "Sorting Data (by index and values)",
  "Adding and Removing Columns",
  "Adding and Removing Rows",
  "Working with Text Data (String Methods)",
  "Working with Dates and Times",
  "DatetimeIndex and Time Series",
  "Data Aggregation",
  "GroupBy Operations",
  "Pivot Tables",
  "Merging and Joining DataFrames",
  "Concatenation of DataFrames",
  "Reshaping with Melt and Pivot",
  "MultiIndex (Hierarchical Indexing)",
  "Iterating through DataFrames",
  "Window Functions (Rolling, Expanding)",
  "Statistical and Mathematical Operations",
  "Applying Functions (apply, map, applymap)",
  "Lambda Functions with Pandas",
  "Visualization with Pandas (plotting)",
  "Exporting Plots from Pandas",
  "Handling Duplicates",
  "Memory Optimization in Pandas",
  "Working with Categorical Data",
  "Performance Optimization (eval, query)",
  "Using Pandas with NumPy",
  "Pandas in Jupyter Notebooks",
  "Best Practices in Data Analysis with Pandas"
]






   

  const navigate = useNavigate();
  const routerchange = (Title,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,tag}});
  }
  const routerchange1 = (Title,Content,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content,tag}})
  }
  // http://13.201.93.211/api/home

  const getContent = async () => {
    // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
    try {
      const data = await axios.get(`${BASE_URL}/app/getcont/getpandascontent`, { params: { title: searchtitle } });
      //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
      setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
    } catch (error) {
      console.log("Error", error)

    }
  }
  useEffect(() => {
    getContent();
  }, [searchtitle])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}><FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {pandas_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,20)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,20)}>Modify Content</button>
          }

           

          <div className='disp-cont-btns'>
            <button className='btn-12'>Previous Topic Topic Name</button>
            <button className='btn-12'>Next Topic Topic Name</button>
          </div>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Pandas;
