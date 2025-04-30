import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Seaborn = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Seaborn" : title);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   

const seaborn_topics = [
    "Introduction to Seaborn",
    "Installing Seaborn",
    "Seaborn vs Matplotlib",
    "Seaborn Built-in Datasets",
    "Seaborn Themes and Styles",
    "Color Palettes",
    "Figure Aesthetics and Customization",
    "Line Plot (lineplot)",
    "Scatter Plot (scatterplot)",
    "Bar Plot (barplot)",
    "Count Plot (countplot)",
    "Box Plot (boxplot)",
    "Violin Plot (violinplot)",
    "Strip Plot (stripplot)",
    "Swarm Plot (swarmplot)",
    "Point Plot (pointplot)",
    "Histogram (histplot)",
    "Kernel Density Estimate Plot (kdeplot)",
    "Dist Plot (distplot - deprecated)",
    "Joint Plot (jointplot)",
    "Pair Plot (pairplot)",
    "Facet Grid (FacetGrid)",
    "Cat Plot (catplot)",
    "Heatmap",
    "Clustermap",
    "Time Series Plotting",
    "Multi-plot Grids",
    "Annotating Plots",
    "Customizing Axes and Legends",
    "Combining Plots with Matplotlib",
    "Working with Categorical Data",
    "Data Aggregation with Estimators",
    "Controlling Plot Size and Aspect",
    "Seaborn Contexts (paper, notebook, talk, poster)",
    "Seaborn with Pandas DataFrames",
    "Seaborn with NumPy Arrays",
    "Saving Seaborn Figures",
    "Interactive Plots with Seaborn and Jupyter",
    "Best Practices for Data Visualization with Seaborn"
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

              {seaborn_topics.map((topics, index) => (
                <li key={index}><Link to={`/seaborn/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="seaborn" tagn={22}/>

        <NextPrevTopic topics={seaborn_topics} currentTopic={formattedTopic} basePath="/seaborn"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Seaborn;
