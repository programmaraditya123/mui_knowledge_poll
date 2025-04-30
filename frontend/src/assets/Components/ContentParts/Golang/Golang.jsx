import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Golang = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const golang_topics = [
    "Introduction to Go",
    "History and Features of Go",
    "Installing Go and Setting Up Environment",
    "Go Workspace and Project Structure",
    "Hello World Program",
    "Go Data Types",
    "Variables and Constants",
    "Operators in Go",
    "Control Flow",
    "if, else if, else",
    "switch statement",
    "for loops",
    "break and continue",
    "Functions in Go",
    "Function Parameters and Return Values",
    "Named Return Values",
    "Variadic Functions",
    "Recursion",
    "Packages and Imports",
    "Error Handling",
    "Errors Package",
    "Custom Error Types",
    "Go Modules",
    "User Input and Output",
    "Arrays and Slices",
    "Difference between Arrays and Slices",
    "Multi-dimensional Slices",
    "Maps (Dictionaries)",
    "Strings and Runes",
    "Pointers in Go",
    "Structs",
    "Methods and Receivers",
    "Interfaces",
    "Embedding and Composition",
    "Type Assertions and Type Switch",
    "Anonymous Functions and Closures",
    "First-class and Higher-order Functions",
    "Concurrency in Go",
    "Goroutines",
    "Channels",
    "Buffered vs Unbuffered Channels",
    "Select Statement",
    "WaitGroups and Mutexes",
    "Context Package",
    "Go Routines vs Threads",
    "Defer, Panic, and Recover",
    "File Handling",
    "Reading and Writing Files",
    "Working with Directories",
    "Testing in Go",
    "Unit Testing",
    "Benchmarking",
    "Test Coverage",
    "Standard Library Overview",
    "Creating and Using Packages",
    "Working with JSON and XML",
    "HTTP and Web Development",
    "net/http Package",
    "Creating REST APIs",
    "Handling Requests and Responses",
    "Middleware",
    "Dependency Management",
    "Go Build Tools (go build, go run, go get)",
    "Reflection in Go",
    "Working with Databases (SQL & NoSQL)",
    "ORM Libraries (GORM, sqlx)",
    "Logging and Configuration",
    "CLI Tools Development",
    "Microservices with Go",
    "Working with Docker and Go",
    "Best Practices and Design Patterns in Go",
    "Go Project Structure",
    "Advanced Concurrency Patterns",
    "Memory Management and Garbage Collection",
    "Go Performance Optimization",
    "Security in Go Applications"
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

              {golang_topics.map((topics, index) => (
                 <li key={index}><Link to={`/golang/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="golang" tagn={5}/>

        <NextPrevTopic topics={golang_topics} currentTopic={formattedTopic} basePath="/golang"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Golang;
