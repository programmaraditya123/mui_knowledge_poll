import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Productmanagement = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  

const product_management_topics = [
  "Introduction to Product Management",
  "Roles and Responsibilities of a Product Manager",
  "Product Lifecycle Management",
  "Market Research and User Research",
  "Competitive Analysis",
  "Product Vision and Strategy",
  "Product Roadmapping",
  "Idea Generation and Prioritization",
  "Agile Methodologies (Scrum, Kanban)",
  "MVP (Minimum Viable Product)",
  "Product Requirement Documents (PRD)",
  "Wireframing and Prototyping",
  "Stakeholder Management",
  "Cross-functional Team Collaboration",
  "User Stories and Acceptance Criteria",
  "Backlog Management",
  "Metrics and KPIs (Product Analytics)",
  "Customer Feedback and Iteration",
  "Go-to-Market Strategy",
  "Product Launch Planning",
  "A/B Testing and Experimentation",
  "Data-Driven Decision Making",
  "UX/UI Principles for PMs",
  "Pricing and Monetization Strategies",
  "Retention and Growth Hacking",
  "Product Marketing Basics",
  "Business Model Canvas",
  "Customer Journey Mapping",
  "Product-Led Growth",
  "Roadmap Communication",
  "Product Discovery Techniques",
  "Jobs To Be Done (JTBD) Framework",
  "OKRs and Goal Setting",
  "Design Thinking",
  "Leadership and Influence",
  "Managing Up and Executive Communication",
  "Tech Fundamentals for PMs (APIs, Databases, Cloud)",
  "Ethical Product Management",
  "Accessibility in Product Design",
  "Internationalization and Localization",
  "Working with Remote Teams",
  "Product Management Tools (Jira, Trello, Figma, etc.)",
  "Career Paths in Product Management",
  "Case Studies and Real-World Scenarios",
  "Interview Preparation and PM Frameworks"
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

              {product_management_topics.map((topics, index) => (
                <li key={index}><Link to={`/productm/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="productmanagement" tagn={47}/>

         <NextPrevTopic topics={product_management_topics} currentTopic={formattedTopic} basePath="/productm"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Productmanagement;
