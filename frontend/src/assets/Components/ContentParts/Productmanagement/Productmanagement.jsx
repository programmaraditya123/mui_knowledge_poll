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



const Productmanagement = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Product Management" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

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
      const data = await axios.get(`${BASE_URL}/app/getcont/getproductmanagementcontent`, { params: { title: searchtitle } });
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

              {product_management_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,47)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,47)}>Modify Content</button>
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

export default Productmanagement;
