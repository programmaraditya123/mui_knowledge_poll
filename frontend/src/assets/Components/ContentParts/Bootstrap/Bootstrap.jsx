import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import { useNavigate , useLocation, useParams, Link } from 'react-router';
import { FaArrowLeft , FaArrowRight} from "react-icons/fa";
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Bootstrap = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '));
  const location = useLocation();
  const title = location.state?.Title;
   
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

const bootstrap_topics = [
    "Introduction to Bootstrap",
    "Setting Up Bootstrap (CDN, NPM, etc.)",
    "Bootstrap Containers",
    "Bootstrap Grid System",
    "Bootstrap Breakpoints & Responsive Utilities",
    "Bootstrap Colors",
    "Bootstrap Typography",
    "Bootstrap Tables",
    "Bootstrap Images",
    "Bootstrap Buttons",
    "Bootstrap Button Groups",
    "Bootstrap Alerts",
    "Bootstrap Badges",
    "Bootstrap Breadcrumbs",
    "Bootstrap Cards",
    "Bootstrap Collapse",
    "Bootstrap Dropdowns",
    "Bootstrap Forms",
    "Bootstrap Form Controls",
    "Bootstrap Form Layouts",
    "Bootstrap Form Validation",
    "Bootstrap Input Groups",
    "Bootstrap Navs and Tabs",
    "Bootstrap Navbar",
    "Bootstrap Pagination",
    "Bootstrap Popovers",
    "Bootstrap Progress Bars",
    "Bootstrap Spinners",
    "Bootstrap Toasts",
    "Bootstrap Tooltips",
    "Bootstrap Modals",
    "Bootstrap Offcanvas",
    "Bootstrap Accordions",
    "Bootstrap Carousels (Sliders)",
    "Bootstrap List Groups",
    "Bootstrap Scrollspy",
    "Bootstrap Utilities (margins, padding, display, etc.)",
    "Bootstrap Flex Utilities",
    "Bootstrap Position Utilities",
    "Bootstrap Shadows",
    "Bootstrap Z-Index Utilities",
    "Bootstrap Sizing Utilities",
    "Bootstrap Borders and Rounded Corners",
    "Bootstrap Visibility and Display",
    "Customizing Bootstrap (SASS, Theming)",
    "Bootstrap Icons (via Bootstrap Icons library)",
    "Bootstrap Responsive Embeds",
    "Bootstrap RTL (Right-to-Left) Support",
    "Bootstrap Best Practices",
    "Bootstrap with JavaScript Plugins"
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

              {bootstrap_topics.map((topics, index) => (
                <li key={index}><Link to={`/bootstrap/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="bs" tagn={11}/>

        <NextPrevTopic topics={bootstrap_topics} currentTopic={formattedTopic} basePath="/bootstrap"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Bootstrap;
