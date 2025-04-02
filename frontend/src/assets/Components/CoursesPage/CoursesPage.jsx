import React, { lazy, Suspense } from 'react';
//import Cards from '../Cards';
import './CoursesPage.css';
//import CoursePageNavbar from './CoursePageNavbar/CoursePageNavbar';
import { useNavigate } from 'react-router';

const Cards = lazy(() => import('../Cards'));
const CoursePageNavbar = lazy(() => import('./CoursePageNavbar/CoursePageNavbar'))

const CoursesPage = () => {
  const navigate = useNavigate();

  const courseDetail = () => {
    navigate("/course/coursedetail")
  };
  return (
    <Suspense fallback={<div>Loading ...</div>}>
    <div className='cr'>
    <div className='coursenavbar'><CoursePageNavbar/></div>
    <h1>Machine Learning</h1>
       <div className='carding'>
    <div className='carditem' onClick={courseDetail}><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      
     </div>
     <h1>Python</h1>
     <div className='card'>
    <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      
     </div>
     <h1>Design Architecture</h1>
     <div className='card'>
    <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      
     </div>
     <h1>Data Science</h1>
     <div className='card'>
    <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      
     </div>
     <h1>Deep Learning</h1>
     <div className='card'>
    <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      
     </div>
    </div>
    </Suspense>
  )
}

export default CoursesPage
