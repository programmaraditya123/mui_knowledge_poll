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



const Cplusplus = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to C++" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const cpp_topics = [
    "Introduction to C++",
    "History and Features of C++",
    "Installing and Setting Up a C++ Environment",
    "Structure of a C++ Program",
    "Input and Output (cin, cout)",
    "Comments in C++",
    "Data Types in C++",
    "Variables and Constants",
    "Operators in C++",
    "Arithmetic, Relational, Logical",
    "Assignment and Compound Operators",
    "Bitwise and Shift Operators",
    "Ternary Operator",
    "Scope Resolution Operator",
    "Control Statements",
    "if, if-else, nested if",
    "switch-case",
    "Loops (for, while, do-while)",
    "break, continue, goto",
    "Functions",
    "Function Declaration and Definition",
    "Call by Value and Call by Reference",
    "Default and Inline Functions",
    "Function Overloading",
    "Recursion",
    "Storage Classes",
    "Arrays",
    "One-dimensional Arrays",
    "Multi-dimensional Arrays",
    "Strings in C++",
    "C-style Strings",
    "String Class (std::string)",
    "Pointers",
    "Pointer Arithmetic",
    "Pointers and Arrays",
    "Pointers to Functions",
    "Pointers to Structures and Classes",
    "References",
    "Reference Variables",
    "Use in Function Parameters",
    "Structures and Unions",
    "Enumerations (enum class)",
    "Dynamic Memory Allocation",
    "  - new and delete",
    "Object-Oriented Programming (OOP)",
    "Classes and Objects",
    "Constructors and Destructors",
    "this Pointer",
    "Static Members",
    "Friend Functions and Classes",
    "Encapsulation",
    "Inheritance",
    "Single, Multilevel, Multiple, Hierarchical, Hybrid",
    "Polymorphism",
    "Compile-time (Function and Operator Overloading)",
    "Runtime (Virtual Functions, vtable)",
    "Abstract Classes and Interfaces",
    "Pure Virtual Functions",
    "Operator Overloading",
    "Function Templates",
    "Class Templates",
    "Namespaces",
    "Exception Handling",
    "try, catch, throw",
    "Standard Exceptions",
    "File Handling",
    "ifstream, ofstream, fstream",
    "Reading and Writing Text and Binary Files",
    "STL (Standard Template Library)",
    "Vectors, Lists, Deques",
    "Stacks, Queues, Priority Queues",
    "Sets, Maps, Multisets, Multimaps",
    "Iterators and Algorithms",
    "Lambda Expressions",
    "Smart Pointers (unique_ptr, shared_ptr, weak_ptr)",
    "Type Casting in C++",
    "static_cast, dynamic_cast, const_cast, reinterpret_cast",
    "Preprocessor Directives",
    "Multithreading and Concurrency (C++11 and Beyond)",
    "Move Semantics and Rvalue References",
    "C++11/14/17/20 Features Overview",
    "Working with C++ Libraries",
    "Best Practices in C++ Development",
    "Design Patterns in C++",
    "Memory Management and Optimization",
    "Debugging and Profiling Tools"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getcpluspluscontent`, { params: { title: searchtitle } });
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

              {cpp_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,7)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,7)}>Modify Content</button>
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

export default Cplusplus;
