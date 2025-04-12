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



const Projectmanagement = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Project Management" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const project_management_topics = [
  "Introduction to Project Management",
  "Project Life Cycle",
  "Project Management Process Groups (Initiating, Planning, Executing, Monitoring and Controlling, Closing)",
  "Project Scope Management",
  "Project Time Management",
  "Project Cost Management",
  "Project Quality Management",
  "Project Integration Management",
  "Project Resource Management",
  "Project Communication Management",
  "Project Risk Management",
  "Project Procurement Management",
  "Project Stakeholder Management",
  "Work Breakdown Structure (WBS)",
  "Gantt Charts and Scheduling",
  "Critical Path Method (CPM)",
  "Program Evaluation and Review Technique (PERT)",
  "Agile Project Management",
  "Scrum Framework",
  "Kanban Boards",
  "Lean Project Management",
  "Waterfall Model",
  "Project Charter Development",
  "Project Objectives and Deliverables",
  "Stakeholder Analysis and Engagement",
  "Project Planning Tools and Techniques",
  "Earned Value Management (EVM)",
  "Change Management",
  "Resource Allocation and Optimization",
  "Budgeting and Cost Estimation",
  "Team Management and Leadership",
  "Conflict Resolution in Projects",
  "Communication Planning",
  "Monitoring and Controlling Techniques",
  "Risk Identification and Mitigation",
  "Quality Assurance vs. Quality Control",
  "Project Closure and Lessons Learned",
  "Project Management Software (MS Project, Jira, Asana, Trello, etc.)",
  "Project Governance",
  "Project Audits and Compliance",
  "Project Documentation and Reporting",
  "Project Ethics and Professionalism",
  "Sustainability in Project Management",
  "PMBOK Guide Overview",
  "PRINCE2 Methodology",
  "Project Portfolio Management (PPM)",
  "Agile vs Traditional Project Management",
  "Case Studies and Real-world Applications",
  "Project Management Certifications (PMP, CAPM, PRINCE2, etc.)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getprojectmanagementcontent`, { params: { title: searchtitle } });
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

              {project_management_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,45)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,45)}>Modify Content</button>
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

export default Projectmanagement;
