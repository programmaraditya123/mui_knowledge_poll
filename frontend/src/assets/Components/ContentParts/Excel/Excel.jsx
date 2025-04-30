import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Excel = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

const excel_topics = [
  "Introduction to Excel Interface",
  "Workbook and Worksheet Basics",
  "Data Entry and Cell Formatting",
  "Basic Formulas and Functions",
  "Relative and Absolute Cell References",
  "Data Types and Number Formats",
  "Sorting and Filtering Data",
  "Tables and Structured References",
  "Conditional Formatting",
  "Charts and Graphs",
  "Named Ranges",
  "Data Validation and Drop-down Lists",
  "Lookup Functions (VLOOKUP, HLOOKUP)",
  "INDEX and MATCH",
  "Logical Functions (IF, AND, OR, NOT)",
  "Date and Time Functions",
  "Text Functions (LEFT, RIGHT, MID, CONCAT, TEXT)",
  "Math and Statistical Functions (SUM, AVERAGE, COUNT, MAX, MIN)",
  "Error Handling Functions (IFERROR, ISERROR)",
  "Pivot Tables and Pivot Charts",
  "Data Analysis Toolpak",
  "Goal Seek and What-If Analysis",
  "Scenario Manager",
  "Slicers and Timelines",
  "Creating Dashboards",
  "Excel Templates",
  "Macros and VBA Basics",
  "Excel Shortcuts and Tips",
  "Data Import and Export (CSV, TXT, Web)",
  "Working with Multiple Worksheets and Workbooks",
  "Collaboration and Sharing",
  "Protection and Security (Sheet, Workbook, Cells)",
  "Power Query Basics",
  "Power Pivot Introduction",
  "Using Excel with Power BI",
  "Form Controls (Checkboxes, Dropdowns)",
  "Dynamic Arrays and New Functions (SORT, FILTER, UNIQUE, SEQUENCE)",
  "Sparklines",
  "Hyperlinks and Comments",
  "Custom Number Formatting",
  "Keyboard Shortcuts",
  "Printing and Page Setup",
  "Troubleshooting Formulas",
  "Working with Large Data Sets"
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

              {excel_topics.map((topics, index) => (
                <li key={index}><Link to={`/excel/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="excel" tagn={46}/>

        <NextPrevTopic topics={excel_topics} currentTopic={formattedTopic} basePath="/excel"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Excel;
