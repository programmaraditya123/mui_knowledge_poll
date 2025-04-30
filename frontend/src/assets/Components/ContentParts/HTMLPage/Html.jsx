import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Html = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const html_topics = [
    "Introduction to HTML",
    "HTML Document Structure",
    "HTML Tags and Elements",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Text Formatting",
    "HTML Comments",
    "HTML Links",
    "HTML Images",
    "HTML Lists (Ordered and Unordered)",
    "HTML Tables",
    "HTML Forms",
    "HTML Input Types",
    "HTML Form Attributes",
    "HTML Semantic Elements",
    "HTML Block vs Inline Elements",
    "HTML Iframes",
    "HTML Media (Audio and Video)",
    "HTML5 New Elements",
    "HTML Meta Tags",
    "HTML Entities",
    "HTML Symbols",
    "HTML Charset",
    "HTML Colors",
    "HTML Attributes",
    "HTML Global Attributes",
    "HTML Classes and IDs",
    "HTML Layout (div, span)",
    "HTML Responsive Design",
    "HTML Accessibility (ARIA)",
    "HTML Canvas",
    "HTML SVG",
    "HTML Best Practices",
    "HTML vs XHTML",
    "HTML Deprecated Tags",
    "HTML APIs (Geolocation, Drag & Drop, etc.)"
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

              {html_topics.map((topics, index) => (
                <li key={index}><Link to={`/html/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="html" tagn={9}/>

      <NextPrevTopic topics={html_topics} currentTopic={formattedTopic} basePath="/html"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Html;
