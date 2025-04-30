import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import { useNavigate ,useLocation , useParams, Link } from 'react-router';
import { FaArrowLeft , FaArrowRight} from "react-icons/fa";
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const C = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '));
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

const c_language_topics = [
    "Introduction to C",
    "History and Features of C",
    "Structure of a C Program",
    "Compilation and Execution Process",
    "Keywords and Identifiers",
    "Variables and Constants",
    "Data Types",
    "Input and Output (scanf and printf)",
    "Operators and Expressions",
    "Control Statements",
    "if, if-else",
    "switch-case",
    "loops (for, while, do-while)",
    "break and continue",
    "Functions in C",
    "Declaration and Definition",
    "Call by Value vs Call by Reference",
    "Recursion",
    "Storage Classes",
    "Arrays",
    "1D and 2D Arrays",
    "Multidimensional Arrays",
    "Strings",
    "String Handling Functions",
    "Pointers",
    "Pointer Arithmetic",
    "Pointers and Arrays",
    "Pointers and Functions",
    "Pointers and Strings",
    "Double Pointers",
    "Structures",
    "Unions",
    "Enumerations (enum)",
    "Typedef",
    "Bitwise Operators",
    "Dynamic Memory Allocation",
    "malloc, calloc, realloc, free",
    "File Handling",
    "Reading and Writing Files",
    "File Pointers",
    "Binary vs Text Files",
    "Command Line Arguments",
    "Preprocessor Directives",
    "Header Files",
    "Error Handling (stderr, exit codes)",
    "C Standard Library Functions",
    "Modular Programming in C",
    "Data Structures in C",
    "Linked List",
    "Stack",
    "Queue",
    "Trees",
    "Graphs",
    "Memory Management and Segmentation",
    "Advanced Topics (Function Pointers, etc.)",
    "Best Practices in C Programming"
]

const currentIndex = c_language_topics.findIndex(t => 
  t.trim().toLowerCase() === formattedTopic.trim().toLowerCase()
);
let prevTopic = null;
let nextTopic = null;

if (currentIndex > 0) {
  prevTopic = c_language_topics[currentIndex - 1];
}

if (currentIndex >= 0 && currentIndex < c_language_topics.length - 1) {
  nextTopic = c_language_topics[currentIndex + 1];
}

   

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
      const data = await axios.get(`${BASE_URL}/app/getcont/getCcontent`, { params: { title: formattedTopic } });
      //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
      setCont(data.data[0]?.content || `${formattedTopic} contetnt not available`);
    } catch (error) {
      console.log("Error", error)

    }
  }
  useEffect(() => {
    getContent();
  }, [formattedTopic])

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

              {c_language_topics.map((topics, index) => (
                <li key={index}><Link to={`/c/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
                
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="C" tagn={3}/>

       <NextPrevTopic topics={c_language_topics} currentTopic={formattedTopic} basePath="/c"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default C;
