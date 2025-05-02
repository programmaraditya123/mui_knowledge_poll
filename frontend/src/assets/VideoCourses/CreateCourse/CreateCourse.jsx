import React from 'react'
import UploadVideoDescription from '../UploadVideoDiscription/UploadVideoDescription'
import UploadVideo from '../UploadVideo/UploadVideo';
import './CreateCourse.css';
import { Link } from 'react-router';

const CreateCourse = () => {
  return (
    <div className='createcourse'>
      <div className='backtocrator'>
      <Link to='/creatordashboard'><button className='btn-11'>Dashboard</button></Link>
      <h2>Here you can upload your existing course video and description</h2>
      </div>
      <div className='videodesc'>
      <UploadVideoDescription/>
      <UploadVideo/>
      </div>
    </div>
  )
}

export default CreateCourse
