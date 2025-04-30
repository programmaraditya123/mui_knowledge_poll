import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Tailwindcss = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Tailwind CSS" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const tailwind_topics = [
    "Introduction to Tailwind CSS",
    "Installation & Setup (CDN, PostCSS, CLI, Frameworks)",
    "Tailwind CSS Configuration (tailwind.config.js)",
    "Utility-First CSS Philosophy",
    
     
    "Container",
    "Box Sizing",
    "Display",
    "Floats",
    "Clear",
    "Object Fit & Position",
    "Overflow",
    "Position",
    "Top / Right / Bottom / Left",
    "Z-Index",
    "Flexbox",
    "Grid",
    "Spacing (Margin & Padding)",
    
     
    "Width",
    "Min-Width / Max-Width",
    "Height",
    "Min-Height / Max-Height",

    
    "Font Family",
    "Font Size",
    "Font Smoothing",
    "Font Style",
    "Font Weight",
    "Line Height",
    "Letter Spacing",
    "Text Alignment",
    "Text Color",
    "Text Decoration",
    "Text Transform",
    "Text Overflow (truncate, ellipsis, etc.)",
    "Vertical Alignment",
    "Whitespace",
    "Word Break",

    
    "Background Color",
    "Background Opacity",
    "Background Position",
    "Background Size",
    "Background Repeat",
    "Background Image",
    "Gradient Color Stops",

    
    "Border Radius",
    "Border Width",
    "Border Color",
    "Border Opacity",
    "Divide Width / Color",
    "Ring Width / Color / Offset",
 
    "Box Shadow",
    "Opacity",
    "Mix Blend Mode",
    "Background Blend Mode",

     
    "Blur",
    "Brightness",
    "Contrast",
    "Drop Shadow",
    "Grayscale",
    "Hue Rotate",
    "Invert",
    "Saturate",
    "Sepia",
    "Backdrop Filters",

    
    "Transition Property",
    "Transition Duration",
    "Transition Timing Function",
    "Transition Delay",
    "Animation",
    "Keyframes",

    
    "Transform Scale / Rotate / Translate / Skew / Origin",

    
    "Cursor",
    "User Select",
    "Pointer Events",
    "Resize",
    "Scroll Behavior",
    "Touch Action",
    "Visibility",

    
    "Table Layout",
    "Border Collapse",

     
    "Screen Readers",
    "Keyboard Navigation Helpers",

     
    "Responsive Variants (sm, md, lg, xl, 2xl)",
    "Media Queries",
    "Mobile-First Design",

     
    "Dark Mode Configuration and Utilities",

     
    "Hover, Focus, Active, Group Hover, Focus Within",
    "First, Last, Odd, Even",
    "Disabled, Checked",
    "Custom Variants",

 
    "Using Official Plugins (Typography, Forms, Aspect Ratio, Line Clamp)",
    "Creating Custom Plugins",

    
    "Extending the Theme",
    "Custom Utilities and Components",
    "Adding Fonts and Colors",
    "PurgeCSS & Optimization",
    "JIT Mode (Just-in-Time Compilation)",
    
     
    "Composition and Reusability",
    "Component Extraction",
    "Using @apply",
    "Maintaining Tailwind Projects"
]







   

  // const navigate = useNavigate();
  // const routerchange = (Title,tag) => {
  //   const path = "/writeearn"
  //   navigate(path,{state:{Title,tag}});
  // }
  // const routerchange1 = (Title,Content,tag) => {
  //   const path = "/writeearn"
  //   navigate(path,{state:{Title,Content,tag}})
  // }
  // // http://13.201.93.211/api/home

  // const getContent = async () => {
  //   // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
  //   try {
  //     const data = await axios.get(`${BASE_URL}/app/getcont/gettailwindcsscontent`, { params: { title: searchtitle } });
  //     //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
  //     setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
  //   } catch (error) {
  //     console.log("Error", error)

  //   }
  // }
  // useEffect(() => {
  //   getContent();
  // }, [searchtitle])

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

              {tailwind_topics.map((topics, index) => (
               <li key={index}><Link to={`/tailwind/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="tailwindcss" tagn={12}/>

        <NextPrevTopic topics={tailwind_topics} currentTopic={formattedTopic} basePath="/tailwind"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Tailwindcss;
