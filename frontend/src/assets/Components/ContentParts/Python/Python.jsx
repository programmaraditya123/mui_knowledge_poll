import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import './Python.css';
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
import {  useLocation , useParams  , Link} from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Python = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

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
                <li key={index}><Link to={`/python/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="" tagn={0}/>

        <NextPrevTopic topics={pythonTopics} currentTopic={formattedTopic} basePath="/python"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Python;
