import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Gradle = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

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
               <li key={index}><Link to={`/gradle/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="gradle" tagn={39}/>

        <NextPrevTopic topics={gradle_topics} currentTopic={formattedTopic} basePath="/gradle"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Gradle;
