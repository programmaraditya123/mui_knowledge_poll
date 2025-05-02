import React, { lazy, Suspense, useEffect, useState } from 'react';
import './CoursesPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Cards = lazy(() => import('../Cards'));
const CoursePageNavbar = lazy(() => import('./CoursePageNavbar/CoursePageNavbar'))
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CoursesPage = () => {
  const navigate = useNavigate();
  const [courses,setCourses] = useState([]);

  const getCourse = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/app/getcourse/getcourses`);
      setCourses(data.data);
      // console.log("...........",data.data)
    } catch (error) {
      console.log("Error in fetching courses")
      
    }
  }

  useEffect(() => {
    getCourse();
  },[])

  const courseDetail = (id) => {
    navigate(`/course/allcourses/course/${id}`)
  };
  return (
    <Suspense fallback={<div>Loading ...</div>}>
    {/* <div className='coursenavbar'><CoursePageNavbar/></div> */}
    {/* <h1>Web Development</h1> */}
   {courses && courses.map((course) =>(
    <div className='cr' key={course._id} onClick={() => courseDetail(course._id)}>
    <div className='carding'>
       <div className='carditem'><Cards title={course.title} description={course.description} 
        creator={course.instructor} likes = {course.likes} comments={course.comments.length}
       /></div>
      </div>
    </div>
  ) )}

    </Suspense>
  )
}

export default CoursesPage
