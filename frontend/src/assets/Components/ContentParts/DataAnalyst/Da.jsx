import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Da = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   

const data_analyst_topics = [
  "Data Collection",
  "Data Cleaning",
  "Data Wrangling",
  "Exploratory Data Analysis (EDA)",
  "Descriptive Statistics",
  "Inferential Statistics",
  "Probability Distributions",
  "Hypothesis Testing",
  "Correlation and Causation",
  "Outlier Detection",
  "Missing Value Treatment",
  "Data Transformation",
  "Feature Engineering",
  "Data Visualization",
  "Dashboards and Reports",
  "KPI Identification",
  "Business Metrics Understanding",
  "SQL for Data Analysis",
  "Joins and Subqueries",
  "Window Functions",
  "Data Aggregation in SQL",
  "Excel for Analysis",
  "Pivot Tables",
  "Data Filtering and Sorting",
  "Data Modeling",
  "Relational Databases",
  "NoSQL Databases",
  "ETL Processes",
  "Python for Data Analysis",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Tableau",
  "Power BI",
  "Time Series Analysis",
  "Forecasting",
  "Regression Analysis",
  "Classification Basics",
  "Clustering Basics",
  "A/B Testing",
  "Cohort Analysis",
  "Customer Segmentation",
  "Churn Analysis",
  "Data-Driven Decision Making",
  "Storytelling with Data",
  "Presentation Skills",
  "Reporting Automation",
  "Big Data Concepts",
  "Cloud Platforms (AWS, GCP, Azure)",
  "Data Privacy and Ethics",
  "Version Control with Git",
  "Project Management for Data Analysts"
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

              {data_analyst_topics.map((topics, index) => (
                 <li key={index}><Link to={`/dataanalyst/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="da" tagn={16}/>

       <NextPrevTopic topics={data_analyst_topics} currentTopic={formattedTopic} basePath="/dataanalyst"/>

       
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Da;
