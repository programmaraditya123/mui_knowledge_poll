import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Numpy = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

const numpy_topics = [
  "Introduction to NumPy",
  "Installing NumPy",
  "NumPy Arrays",
  "Creating Arrays (array, arange, linspace, etc.)",
  "Array Indexing and Slicing",
  "Array Data Types",
  "Array Shape and Reshape",
  "Array Broadcasting",
  "Array Iteration",
  "Array Mathematics",
  "Element-wise Operations",
  "Matrix Multiplication",
  "Dot Product and Inner Product",
  "Aggregate Functions (sum, mean, std, etc.)",
  "Axis-based Operations",
  "Conditional Selection",
  "Filtering Arrays",
  "NumPy Random Module",
  "Random Sampling",
  "Random Distributions",
  "Set Operations (unique, intersect1d, union1d)",
  "Sorting Arrays",
  "Searching Arrays (where, nonzero, argmax, argmin)",
  "Working with NaN and Inf",
  "Boolean Masking",
  "Copy vs View",
  "Array Flattening and Raveling",
  "Stacking and Splitting Arrays",
  "Tiling and Repeating Arrays",
  "Reading and Writing Files with NumPy",
  "Structured Arrays",
  "Vectorization",
  "Performance Comparison with Python Lists",
  "Memory Layout and Strides",
  "Using NumPy with Pandas",
  "NumPy and Broadcasting Rules",
  "Linear Algebra with NumPy (linalg)",
  "Inverse and Determinant of Matrices",
  "Eigenvalues and Eigenvectors",
  "Solving Linear Equations",
  "Fourier Transform (fft)",
  "Polynomials in NumPy",
  "NumPy for Image Processing",
  "Best Practices in NumPy Usage"
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

              {numpy_topics.map((topics, index) => (
                <li key={index}><Link to={`/numpy/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="numpy" tagn={21}/>

        <NextPrevTopic topics={numpy_topics} currentTopic={formattedTopic} basePath="/numpy"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Numpy;
