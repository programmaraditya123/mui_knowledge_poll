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



const Javascript = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to JavaScript" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const javascript_topics = [
    "Introduction to JavaScript",
    "History and Features of JavaScript",
    "Setting Up JavaScript (Browser, Node.js)",
    "Hello World in JavaScript",
    "JavaScript Syntax and Structure",
    "Comments in JavaScript",
    "Variables (var, let, const)",
    "Data Types",
    "Primitive Types",
    "Reference Types",
    "Type Conversion and Coercion",
    "Operators",
    "Arithmetic, Assignment, Comparison",
    "Logical, Bitwise, Ternary, typeof",
    "Control Flow",
    "if, else if, else",
    "switch statement",
    "for, while, do-while loops",
    "break, continue",
    "Functions",
    "Function Declarations and Expressions",
    "Parameters and Arguments",
    "Return Values",
    "Arrow Functions",
    "Callback Functions",
    "Scope",
    "Global and Local Scope",
    "Block Scope",
    "Lexical Scope",
    "Hoisting",
    "Closures",
    "IIFE (Immediately Invoked Function Expression)",
    "Arrays",
    "Array Methods (map, filter, reduce, etc.)",
    "Multidimensional Arrays",
    "Strings",
    "String Methods and Template Literals",
    "Objects",
    "Object Properties and Methods",
    "Object Destructuring",
    "Object.assign, Spread Operator",
    "ES6+ Features",
    "let, const",
    "Arrow Functions",
    "Template Literals",
    "Destructuring",
    "Default Parameters",
    "Spread and Rest Operators",
    "Modules (import/export)",
    "Enhanced Object Literals",
    "Optional Chaining (?.)",
    "Nullish Coalescing (??)",
    "JSON and Data Manipulation",
    "Date and Time in JavaScript",
    "Math Object",
    "DOM (Document Object Model)",
    "Selecting Elements (getElementById, querySelector)",
    "Manipulating Elements (innerText, innerHTML)",
    "Changing Styles",
    "DOM Events and Event Listeners",
    "Event Handling",
    "Event Bubbling and Capturing",
    "Event Delegation",
    "Forms and Form Validation",
    "Timers",
    "setTimeout and setInterval",
    "Error Handling",
    "try...catch...finally",
    "throw",
    "Debugging JavaScript (console, breakpoints)",
    "Strict Mode",
    "Object-Oriented Programming",
    "Constructor Functions",
    "Prototypes and Inheritance",
    "ES6 Classes",
    "Getters and Setters",
    "Asynchronous JavaScript",
    "Callbacks",
    "Promises",
    "async/await",
    "Fetch API and AJAX",
    "Working with APIs",
    "JSON Responses",
    "Error Handling in Fetch",
    "JavaScript Modules",
    "ES Modules",
    "CommonJS",
    "LocalStorage, SessionStorage, and Cookies",
    "Regular Expressions",
    "Functional Programming Concepts",
    "Pure Functions, Immutability",
    "Higher-Order Functions",
    "Memory Management and Garbage Collection",
    "JavaScript Engine and Event Loop",
    "Call Stack and Callback Queue",
    "Microtasks and Macrotasks",
    "Task Scheduling",
    "Performance Optimization",
    "Modern JavaScript Tooling",
    "Babel, Webpack, Parcel",
    "NPM/Yarn",
    "Linting with ESLint",
    "Testing in JavaScript (Jest, Mocha)",
    "Introduction to TypeScript",
    "Working with Frameworks and Libraries",
    "React, Vue, Angular, jQuery (optional)",
    "Best Practices in JavaScript Development"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getjavascriptcontent`, { params: { title: searchtitle } });
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

              {javascript_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,8)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,8)}>Modify Content</button>
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

export default Javascript;
