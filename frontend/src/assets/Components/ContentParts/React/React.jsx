import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
//import './Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));

const Reacts = () => {
  const [cont, setCont] = useState("");
  const [searchtitle, setSearchTitle] = useState("Basics of React");
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)

 const  react_topics = [
    "Basics of React",
    "Introduction to React",
    "Setting up a React project (Vite, CRA)",
    "Understanding JSX",
    "Components (Functional & Class)",
    "Props & State",
    "Event Handling",
    "Conditional Rendering",
    "Lists and Keys",

    "React Hooks",
    "useState",
    "useEffect",
    "useContext",
    "useRef",
    "useReducer",
    "useMemo",
    "useCallback",
    "Custom Hooks",

    "React Router",
    "Introduction to React Router",
    "Setting up Routes",
    "Nested Routes",
    "Dynamic Routes",
    "useParams, useNavigate",
    "Protected Routes",

    "State Management",
    "Context API",
    "Redux (Store, Reducers, Actions)",
    "Redux Toolkit",
    "Zustand",
    "Recoil",
    "Jotai",

    "Forms and Validation",
    "Controlled vs Uncontrolled Components",
    "Handling Forms in React",
    "Validation using React Hook Form",
    "Validation using Yup & Formik",

    "API Handling",
    "Fetch API",
    "Axios",
    "Handling Async/Await in React",
    "Error Handling in API Requests",

    "Performance Optimization",
    "React.memo",
    "Lazy Loading & Suspense",
    "Code Splitting",
    "Virtualization (React Window)",

    "Advanced React Concepts",
    "Higher Order Components (HOC)",
    "Render Props",
    "Portals",
    "Forwarding Refs",
    "Error Boundaries",

    "React with TypeScript",
    "Setting up React with TypeScript",
    "Typing Props & State",
    "Using TypeScript with Hooks",

    "Next.js (React Framework)",
    "Introduction to Next.js",
    "Pages and Routing",
    "Static Site Generation (SSG)",
    "Server-Side Rendering (SSR)",
    "API Routes",

    "Testing in React",
    "Unit Testing with Jest",
    "Testing Library (React Testing Library)",
    "End-to-End Testing with Cypress",

    "UI Libraries & Styling",
    "CSS Modules",
    "Styled Components",
    "Tailwind CSS",
    "Material-UI, Shadcn, Chakra UI",

    "React Native (For Mobile Apps)",
    "Introduction to React Native",
    "Navigation in React Native",
    "State Management in React Native",

    "Deployment & Production",
    "Building for Production",
    "Deploying on Vercel, Netlify, or Firebase",
    "CI/CD for React Apps"
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
       const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/getreactcontent`, { params: { title: searchtitle } });
      // const data = await axios.get(`http://localhost:8000/app/getcont/getreactcontent`, { params: { title: searchtitle } });
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
      <Carousel b="State Handling" c="Hooks" d="React Comments" e="Arrow Function" f="UseState" g="Props" h="React Router" i="Event Handling" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}>
      <FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense>
      </button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {react_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,1)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,1)}>Modify Content</button>
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

export default Reacts;
