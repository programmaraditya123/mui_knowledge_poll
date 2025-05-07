import React from 'react';
import './CreatorDashBoardHome.css';
import { Link } from 'react-router';
//import CourseContVideoPage from '../../Components/CoursesPage/CourseContVideoPage/CourseContVideoPage';

const CreatorDashBoardHome = () => {
  return (
    <div className='creatorDash'>
    <Link to='/createnewcourse'><button className='btn-10'>Create New Course</button></Link>
    {/* <CourseContVideoPage/> */}
      
    </div>
  )
}

export default CreatorDashBoardHome
