import { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import { Link, useNavigate, useParams,useLocation} from 'react-router';
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ReactContent = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' ')) || "Basics of React";
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
  const  react_topics = [
    "Basics of React",
    "Introduction to React",
    "Setting up a React project (Vite, CRA)",
    "Understanding JSX",
    "Components (Functional & Class)",
    "Props & State",
    "Event Handling",
    "Conditional Rendering",
    "Lists and Keys",
    "React Hooks",
    "useState",
    "useEffect",
    "useContext",
    "useRef",
    "useReducer",
    "useMemo",
    "useCallback",
    "Custom Hooks",
    "React Router",
    "Introduction to React Router",
    "Setting up Routes",
    "Nested Routes",
    "Dynamic Routes",
    "useParams, useNavigate",
    "Protected Routes",
    "State Management",
    "Context API",
    "Redux (Store, Reducers, Actions)",
    "Redux Toolkit",
    "Zustand",
    "Recoil",
    "Jotai",
    "Forms and Validation",
    "Controlled vs Uncontrolled Components",
    "Handling Forms in React",
    "Validation using React Hook Form",
    "Validation using Yup & Formik",
    "API Handling",
    "Fetch API",
    "Axios",
    "Handling Async/Await in React",
    "Error Handling in API Requests",
    "Performance Optimization",
    "React.memo",
    "Lazy Loading & Suspense",
    "Code Splitting",
    "Virtualization (React Window)",
    "Advanced React Concepts",
    "Higher Order Components (HOC)",
    "Render Props",
    "Portals",
    "Forwarding Refs",
    "Error Boundaries",
    "React with TypeScript",
    "Setting up React with TypeScript",
    "Typing Props & State",
    "Using TypeScript with Hooks",
    "Next.js (React Framework)",
    "Introduction to Next.js",
    "Pages and Routing",
    "Static Site Generation (SSG)",
    "Server-Side Rendering (SSR)",
    "API Routes",
    "Testing in React",
    "Unit Testing with Jest",
    "Testing Library (React Testing Library)",
    "End-to-End Testing with Cypress",
    "UI Libraries & Styling",
    "CSS Modules",
    "Styled Components",
    "Tailwind CSS",
    "Material-UI, Shadcn, Chakra UI",
    "React Native (For Mobile Apps)",
    "Introduction to React Native",
    "Navigation in React Native",
    "State Management in React Native",
    "Deployment & Production",
    "Building for Production",
    "Deploying on Vercel, Netlify, or Firebase",
    "CI/CD for React Apps"
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
      <Carousel b="State Handling" c="Hooks" d="React Comments" e="Arrow Function" f="UseState" g="Props" h="React Router" i="Event Handling" />
      </Suspense>
      <button className='btn-17' >
       
      <FaBars onClick={()=>setShowMenu(!showMenu)} />
       
      </button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {react_topics.map((topics, index) => (
                <li key={index}><Link to={`/react/${topics.replace(/\s+/g, '-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="react" tagn={1}/>

        <NextPrevTopic topics={react_topics} currentTopic={formattedTopic} basePath="/react"/>
           
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default ReactContent;