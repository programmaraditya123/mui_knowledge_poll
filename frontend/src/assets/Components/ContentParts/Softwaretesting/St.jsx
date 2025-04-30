import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const St = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const software_testing_topics = [
  "Introduction to Software Testing",
  "Importance of Testing in Software Development",
  "Software Development Life Cycle (SDLC)",
  "Software Testing Life Cycle (STLC)",
  "Manual Testing Basics",
  "Types of Testing (Manual vs. Automated)",
  "Levels of Testing (Unit, Integration, System, Acceptance)",
  "Functional Testing",
  "Non-Functional Testing",
  "Black Box Testing",
  "White Box Testing",
  "Grey Box Testing",
  "Smoke Testing",
  "Sanity Testing",
  "Regression Testing",
  "Re-testing",
  "User Acceptance Testing (UAT)",
  "Exploratory Testing",
  "Ad-hoc Testing",
  "Performance Testing",
  "Load Testing",
  "Stress Testing",
  "Scalability Testing",
  "Security Testing",
  "Compatibility Testing",
  "Usability Testing",
  "Alpha and Beta Testing",
  "Test Plan and Test Strategy",
  "Test Case Design Techniques",
  "Boundary Value Analysis (BVA)",
  "Equivalence Partitioning",
  "Decision Table Testing",
  "State Transition Testing",
  "Test Case vs. Test Scenario",
  "Defect Lifecycle and Bug Reporting",
  "Severity vs. Priority",
  "Testing Tools Overview (Selenium, JMeter, Postman, etc.)",
  "Automated Testing Fundamentals",
  "Unit Testing Frameworks (JUnit, NUnit, etc.)",
  "Integration Testing Tools",
  "Test Automation Frameworks (Keyword, Data-driven, Hybrid)",
  "Continuous Integration and Continuous Testing",
  "Agile Testing and Scrum",
  "Behavior Driven Development (BDD)",
  "Test-Driven Development (TDD)",
  "Acceptance Test-Driven Development (ATDD)",
  "Mobile Application Testing",
  "API Testing",
  "Database Testing",
  "Cross-Browser Testing",
  "Test Metrics and Reporting",
  "Bug Tracking Tools (JIRA, Bugzilla, etc.)",
  "Quality Assurance vs. Quality Control",
  "Ethics and Best Practices in Testing"
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

              {software_testing_topics.map((topics, index) => (
                <li key={index}><Link to={`/st/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="softwaretesting" tagn={44}/>

        <NextPrevTopic topics={software_testing_topics} currentTopic={formattedTopic} basePath="/st"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default St;
