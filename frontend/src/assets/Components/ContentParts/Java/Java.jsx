import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'));
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 



const Java = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

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
                <li key={index}><Link to={`/java/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="java" tagn={2}/>

         <NextPrevTopic topics={java_topics} currentTopic={formattedTopic} basePath="/java"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Java;
