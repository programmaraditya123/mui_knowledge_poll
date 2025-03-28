import React from 'react';
import './CoursePageNavbar.css'
//import Footer from '../../Footer/Footer';

const CoursePageNavbar = () => {
  return (
    <>
    <div>
      <div className='crnav'>
        <div className='crnavl'>
            <li>Knowledge Poll</li>
        </div>
        <div className="crnavr">
            <input type='text' placeholder='Search Course Here ..'/>
        </div>
      </div>
       
    </div>
     
    </>
    
  )
}

export default CoursePageNavbar
