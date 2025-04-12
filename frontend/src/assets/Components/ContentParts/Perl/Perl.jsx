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



const Perl = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Perl" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const perl_topics = [
    "Introduction to Perl",
    "History and Features of Perl",
    "Installing Perl and Setting Up Environment",
    "Writing and Running a Perl Script",
    "Perl Syntax and Structure",
    "Comments in Perl",
    "Variables in Perl",
    "Scalars",
    "Arrays",
    "Hashes (Associative Arrays)",
    "Data Types and Context (Scalar vs List Context)",
    "Operators in Perl",
    "Arithmetic Operators",
    "String Operators",
    "Comparison and Logical Operators",
    "Special Operators (Range, Dot, etc.)",
    "Control Flow",
    "  - if, elsif, else",
    "unless",
    "for, foreach",
    "while, until",
    "next, last, redo",
    "Input and Output",
    "STDIN and STDOUT",
    "Reading from Keyboard",
    "Printing to Console",
    "String Manipulation",
    "Interpolation",
    "String Functions",
    "Here Documents",
    "Arrays and Array Functions",
    "Hashes and Hash Functions",
    "References and Complex Data Structures",
    "Subroutines (Functions)",
    "Arguments and Return Values",
    "Local vs Global Variables",
    "Variable Scoping (my, our, local)",
    "Regular Expressions in Perl",
    "Matching and Substitution",
    "Metacharacters and Quantifiers",
    "Modifiers (g, i, m, s, etc.)",
    "Capturing and Non-Capturing Groups",
    "Split and Join",
    "File Handling",
    "open, close",
    "Reading and Writing Files",
    "File Test Operators",
    "Reading Line by Line",
    "Perl Modules and Packages",
    "use and require",
    "CPAN and Installing Modules",
    "Object-Oriented Programming in Perl",
    "Bless and Classes",
    "Inheritance and Overriding",
    "AUTOLOAD and DESTROY",
    "Error Handling and Debugging",
    "die, warn, eval",
    "Using strict and warnings",
    "Data Serialization",
    "Storing and Retrieving Data",
    "JSON and YAML Handling",
    "Advanced Topics",
    "Tied Variables",
    "Symbol Tables and Typeglobs",
    "Perl Internals",
    "Perl and Databases (DBI Module)",
    "Connecting to Databases",
    "SQL Execution and Fetching Results",
    "Error Handling with DBI",
    "CGI Programming with Perl",
    "Handling Forms and Parameters",
    "HTTP Headers and Output",
    "Security Considerations",
    "Web Scraping with Perl (LWP, Mojo)",
    "Command-line Arguments and Script Options",
    "Signal Handling in Perl",
    "Working with Dates and Times",
    "Creating and Using Custom Modules",
    "Perl Best Practices and Coding Standards",
    "Testing and Test::More",
    "Introduction to Moose (Modern Perl OO Framework)",
    "Perl vs Modern Languages (Python, Ruby, etc.)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getperlcontent`, { params: { title: searchtitle } });
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

              {perl_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,6)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,6)}>Modify Content</button>
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

export default Perl;
