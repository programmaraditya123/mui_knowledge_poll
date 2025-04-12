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



const Gradle = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ?  "Introduction to Gradle" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const gradle_topics = [
  "Introduction to Gradle",
  "Gradle vs Maven vs Ant",
  "Setting Up Gradle",
  "Gradle Project Structure",
  "Understanding Gradle Build Script (build.gradle)",
  "Gradle DSL Basics",
  "Gradle Tasks and Task Execution",
  "Using Gradle Wrapper",
  "Gradle Dependencies and Dependency Management",
  "Configuring Repositories (Maven, Ivy, etc.)",
  "Gradle Plugins Overview",
  "Applying Plugins (java, android, etc.)",
  "Building Java Projects with Gradle",
  "Building Android Projects with Gradle",
  "Gradle Multi-Project Builds",
  "Gradle Build Lifecycle (Initialization, Configuration, Execution)",
  "Gradle Build Phases",
  "Custom Gradle Tasks",
  "Gradle Build Scans and Debugging",
  "Gradle Properties and Configuration",
  "Gradle Profiles (build.gradle vs settings.gradle)",
  "Gradle Wrapper (Version Management)",
  "Gradle Caching and Performance Optimization",
  "Gradle Build Types and Flavors",
  "Gradle Test Integration (JUnit, TestNG)",
  "Continuous Integration with Gradle (Jenkins, GitLab CI)",
  "Gradle and Docker Integration",
  "Gradle Dependency Configuration (compile, runtime, implementation)",
  "Gradle's Groovy-based Build Scripts",
  "Gradle Kotlin DSL (build.gradle.kts)",
  "Managing Multiple Gradle Modules",
  "Publishing Artifacts with Gradle",
  "Gradle Versioning",
  "Using Gradle with Gradle Enterprise",
  "Gradle in Continuous Deployment Pipelines",
  "Gradle Wrapper Task Configuration",
  "Gradle Build Customization",
  "Gradle and IDE Integration (Eclipse, IntelliJ, VSCode)",
  "Using Gradle with Cloud Platforms (AWS, GCP)",
  "Gradle for Android Development (Gradle for Android Studio)",
  "Gradle for Kotlin Projects",
  "Gradle and Gradle Plugin Development",
  "Gradle Performance Tuning (Parallel Execution, Dependency Caching)",
  "Gradle Custom Plugins",
  "Advanced Dependency Management with Gradle",
  "Gradle and Native Builds (C, C++)",
  "Gradle for Microservices and Distributed Systems",
  "Building and Deploying Java Microservices with Gradle",
  "Best Practices for Gradle Builds",
  "Troubleshooting Gradle Build Failures",
  "Gradle vs Build Systems like Bazel and Buck",
  "Creating and Managing Gradle Wrapper"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getgradlecontent`, { params: { title: searchtitle } });
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

              {gradle_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,39)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,39)}>Modify Content</button>
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

export default Gradle;
