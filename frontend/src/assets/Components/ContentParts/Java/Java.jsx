import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';
const Carousel = lazy(() => import('../../Carousel'));
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useLocation } from 'react-router';



const Java = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Java" : title);
  //console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)

const java_topics = [
    "Introduction to Java",
    "Java Installation and Setup",
    "Basic Syntax and Data Types",
    "Operators in Java",
    "Control Flow Statements (if-else, switch)",
    "Loops (for, while, do-while)",
    "Methods and Functions",
    "Recursion",
    "Arrays and ArrayLists",
    "Strings and String Methods",
    "Object-Oriented Programming (OOP)",
    "Classes and Objects",
    "Constructors",
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Abstraction and Interfaces",
    "Static and Final Keywords",
    "Inner Classes",
    "Exception Handling (try-catch-finally)",
    "Custom Exceptions",
    "File Handling (FileReader, FileWriter, BufferedReader, BufferedWriter)",
    "Multithreading and Concurrency",
    "Synchronization",
    "Collections Framework",
    "ArrayList, LinkedList",
    "HashMap, HashSet, TreeSet",
    "Queue, Stack, PriorityQueue",
    "Lambda Expressions and Functional Interfaces",
    "Streams API",
    "Generics",
    "Java 8 Features",
    "JDBC (Java Database Connectivity)",
    "Networking in Java (Sockets, HTTP)",
    "Java Swing (GUI Development)",
    "JavaFX",
    "Serialization and Deserialization",
    "Annotations and Reflection",
    "Unit Testing with JUnit",
    "Spring Framework Basics",
    "Hibernate ORM",
    "Microservices with Spring Boot",
    "RESTful APIs in Java",
    "Maven and Gradle",
    "Logging with Log4j",
    "Design Patterns in Java",
    "Data Structures and Algorithms in Java",
    "Memory Management and Garbage Collection",
    "JVM Internals and Performance Tuning",
    "Security in Java (Encryption, Hashing)"
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
    try {
      //const data = await axios.get(`http://localhost:8000/app/getcont/getreactcontent`, { params: { title: searchtitle } });
     const data = await axios.get(`${BASE_URL}/app/getcont/getjavacontent`, { params: { title: searchtitle } });
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
      <Carousel b="Java" c="Java installation" d="Java Variables" e="Java functions" f="UseState" g="Props" h="React Router" i="Event Handling" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}>
      <FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {java_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,2)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,2)}>Modify Content</button>
          }

          {/* <p>Nothing to show here</p> */}
          {/* <button className='btn-13' onClick={generateContent}>Click to Generate Content</button> */}

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

export default Java;
