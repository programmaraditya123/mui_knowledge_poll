import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Matplotlib = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const matplotlib_topics = [
  "Introduction to Matplotlib",
  "Installing Matplotlib",
  "Matplotlib Architecture",
  "Pyplot API",
  "Object-Oriented API",
  "Figure and Axes Objects",
  "Creating Basic Plots",
  "Line Plots",
  "Bar Charts",
  "Horizontal Bar Charts",
  "Histograms",
  "Scatter Plots",
  "Pie Charts",
  "Stacked Plots",
  "Box Plots",
  "Violin Plots",
  "Error Bars",
  "Area Plots",
  "Stem Plots",
  "Step Plots",
  "Polar Plots",
  "3D Plotting with mpl_toolkits.mplot3d",
  "Surface Plots",
  "Wireframe Plots",
  "Contour Plots",
  "Subplots and GridSpec",
  "Multiple Plots in One Figure",
  "Figure Size and DPI",
  "Customizing Axes",
  "Ticks and Tick Labels",
  "Axis Limits",
  "Logarithmic Scale",
  "Adding Titles and Labels",
  "Legends",
  "Text Annotations",
  "Adding Shapes and Arrows",
  "Colors and Colormaps",
  "Markers and Linestyles",
  "Customizing Plot Styles",
  "Using Style Sheets",
  "Saving Plots (savefig)",
  "Interactive Plots with %matplotlib notebook",
  "Animations with FuncAnimation",
  "Working with Dates",
  "Using Matplotlib with Pandas",
  "Seaborn Integration",
  "Matplotlib in Jupyter Notebooks",
  "Best Practices for Plot Design"
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

              {matplotlib_topics.map((topics, index) => (
                <li key={index}><Link to={`/matplotlib/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="matplotlib" tagn={19}/>

        <NextPrevTopic topics={matplotlib_topics} currentTopic={formattedTopic} basePath="/matplotlib"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Matplotlib;
