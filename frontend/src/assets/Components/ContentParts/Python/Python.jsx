import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
import './Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Python = () => {
  const [cont, setCont] = useState("");
  const [searchtitle, setSearchTitle] = useState("Introduction to Python");
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  console.log("0000000000",BASE_URL)

  const pythonTopics = [
    "Introduction to Python",
    "Installing Python",
    "Python Syntax and Structure",
    "Variables and Data Types",
    "Operators in Python",
    "Type Casting",
    "Input and Output",
    "Comments in Python",
    "If-Else Statements",
    "Loops (For, While)",
    "Break, Continue, and Pass",
    "Defining Functions",
    "Function Arguments",
    "Lambda Functions",
    "Recursion",
    "Modules and Packages",
    "Importing Modules",
    "Python Standard Library",
    "Lists and List Methods",
    "List Comprehensions",
    "Tuples",
    "Sets",
    "Dictionaries and Dictionary Methods",
    "Dictionary Comprehensions",
    "String Manipulation",
    "String Methods",
    "Formatting Strings",
    "Regular Expressions",
    "Reading and Writing Files",
    "Working with CSV Files",
    "Working with JSON Files",
    "Classes and Objects",
    "Constructors (__init__ method)",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Magic/Dunder Methods",
    "Try-Except Blocks",
    "Raising Exceptions",
    "Custom Exceptions",
    "NumPy",
    "Pandas",
    "Matplotlib & Seaborn",
    "Scikit-Learn",
    "OpenCV",
    "Iterators and Generators",
    "Decorators",
    "Context Managers",
    "Multithreading and Multiprocessing",
    "Asynchronous Programming",
    "SQLite with Python",
    "MySQL with Python",
    "PostgreSQL with Python",
    "Flask",
    "Django",
    "FastAPI",
    "BeautifulSoup",
    "Selenium",
    "Scrapy",
    "Data Analysis with Pandas",
    "Machine Learning with Scikit-Learn",
    "Deep Learning with TensorFlow/PyTorch",
    "Automating with Python",
    "Working with APIs",
    "Sending Emails with Python",
    "Working with PDFs & Excel Files"
  ];
   

  const navigate = useNavigate();
  const routerchange = (Title) => {
    const path = "/writeearn"
    navigate(path,{state:{Title}});
  }
  const routerchange1 = (Title,Content) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content}})
  }
  // http://13.201.93.211/api/home

  const getContent = async () => {
    console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
    try {
      const data = await axios.get(`${BASE_URL}/app/getcont/content`, { params: { title: searchtitle } });
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

              {pythonTopics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont)}>Modify Content</button>
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

export default Python;
