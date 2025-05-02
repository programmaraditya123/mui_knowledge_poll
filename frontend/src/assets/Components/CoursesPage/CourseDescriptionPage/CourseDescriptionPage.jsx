import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CourseDescriptionPage = () => {
  const [course,setCourse] = useState();
  const {id} = useParams();
  const navigate = useNavigate();
  // console.log("--------",id)

  const getoneCourse = async () => {
    try {
        const data = await axios.get(`${BASE_URL}/app/getcourse/getcoursebyid`,{params : {id:id}});
        setCourse(data.data);
        console.log("888888888888",data.data)
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getoneCourse();
  },[])

  const videopage = (videos) => {
    const path = "/course/allcourses/startcourse"
    navigate(path,{state:{videos}})

  }

  return (
    <div>
    <button className='btn-12' onClick={() => videopage(course.videos)}>Start Course</button>
    <h1>This is detailed explanation of your Course</h1>
      <h1>{course && course.title}</h1>
      <h2>{course && course.description}</h2>
    </div>
  )
}

export default CourseDescriptionPage
