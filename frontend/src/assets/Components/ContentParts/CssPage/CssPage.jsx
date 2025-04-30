import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
 
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const CssPage = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' ')) 
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

const css_topics = [
    "Introduction to CSS",
    "CSS Syntax and Selectors",
    "CSS Colors",
    "CSS Box Model",
    "CSS Typography (Fonts, Text)",
    "CSS Backgrounds",
    "CSS Borders",
    "CSS Margins and Padding",
    "CSS Display Property",
    "CSS Positioning (static, relative, absolute, fixed, sticky)",
    "CSS Float and Clear",
    "CSS Overflow",
    "CSS Flexbox",
    "CSS Grid",
    "CSS Alignments (Vertical and Horizontal)",
    "CSS Z-Index",
    "CSS Pseudo classes (:hover, :focus, :nth-child, etc.)",
    "CSS Pseudo elements (::before, ::after)",
    "CSS Media Queries (Responsive Design)",
    "CSS Variables (Custom Properties)",
    "CSS Transitions",
    "CSS Animations",
    "CSS Transform (rotate, scale, translate, skew)",
    "CSS Shadows (Box Shadow, Text Shadow)",
    "CSS Filters",
    "CSS Visibility and Opacity",
    "CSS Object fit and Object position",
    "CSS Cursor",
    "CSS Combinators (descendant, child, sibling selectors)",
    "CSS Specificity and Inheritance",
    "CSS Important Rule",
    "CSS Shorthand Properties",
    "CSS Layout Techniques (Float, Flexbox, Grid)",
    "CSS Resets and Normalize",
    "CSS Frameworks Overview (Bootstrap, Tailwind, etc.)",
    "Modern CSS Features (clamp, min(), max(), aspect-ratio)",
    "Print CSS",
    "Dark Mode with CSS",
    "CSS Best Practices",
    "Browser Compatibility in CSS"
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

              {css_topics.map((topics, index) => (
                <li key={index}><Link to={`/css/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="css" tagn={10}/>

        <NextPrevTopic topics={css_topics} currentTopic={formattedTopic} basePath="/css"/>

        
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default CssPage;
