import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams , Link  } from 'react-router';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Cplusplus = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '));
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

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
    "new and delete",
    "Object Oriented Programming (OOP)",
    "Classes and Objects",
    "Constructors and Destructors",
    "this Pointer",
    "Static Members",
    "Friend Functions and Classes",
    "Encapsulation",
    "Inheritance",
    "Single, Multilevel, Multiple, Hierarchical, Hybrid",
    "Polymorphism",
    "Compile time (Function and Operator Overloading)",
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
                <li key={index}><Link to={`/cpp/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
               
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="cplusplus" tagn={7}/>

         <NextPrevTopic topics={cpp_topics} currentTopic={formattedTopic} basePath="/cpp"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Cplusplus;
