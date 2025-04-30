import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Projectmanagement = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

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
                 <li key={index}><Link to={`/pm/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="projectmanagement" tagn={45}/>

        <NextPrevTopic topics={project_management_topics} currentTopic={formattedTopic} basePath="/pm"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Projectmanagement;
