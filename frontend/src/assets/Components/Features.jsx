import React from 'react';
import './Features.css';
import { NavLink } from 'react-router';
import { FaBars } from "react-icons/fa";

const Features = () => {
  const myfunc = () => {
    document.getElementById("mydrop").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-16')) {
    var dropdowns = document.getElementsByClassName("dropdown-features");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  return (
    <>
    <div className='all-features'>
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/aicont'><li>Choose your AI</li></NavLink>
    <NavLink to='/course/allcourses'><li>Courses</li></NavLink>
    <li>Contests</li>
    <li>Jobs</li>
    <li>Categories</li>
    <li>Research Papers</li>
    <NavLink to='writeearn'><li>Write & Earn</li></NavLink>
    <li>Promote & Earn</li>
    <NavLink to='/community'><li>Community</li></NavLink>
    </div>
    <div className='navbartop'>
    <div className='drop-features'>
    <button className='btn-16' onClick={myfunc}><FaBars /></button>
    <div id='mydrop' className='dropdown-features'>
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/aicont'><li>Choose your AI</li></NavLink>
    <li>Courses</li>
    <li>Contests</li>
    <li>Jobs</li>
    <li>Categories</li>
    <li>Research Papers</li>
    <NavLink to='writeearn'><li>Write & Earn</li></NavLink>
    <li>Promote & Earn</li>
    </div>
    </div>
    <div className='navbarsearch'>
      <input type='text' placeholder='Seacrh here'/>
    </div>
    </div>
    
    </>
    
  )
}

export default Features;
