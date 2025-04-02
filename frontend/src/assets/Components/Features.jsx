import React, { useState, useRef, useEffect } from 'react';
import './Features.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Features = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current !== event.target) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <div className="all-features">
        {/* ... your other NavLinks ... */}
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

      
      <div className="navbartop">
        <div className="drop-features" ref={dropdownRef}>
          <button className="btn-16" onClick={toggleDropdown} ref={buttonRef}>
            <FaBars />
          </button>
          <div id="mydrop" className={`dropdown-features ${isDropdownOpen ? 'show' : ''}`}>
            {/* ... your NavLinks in the dropdown ... */}
            <NavLink to='/'><li>Home</li></NavLink>
     <NavLink to='/aicont'><li>Choose your AI</li></NavLink>
     <NavLink to='/course/allcourses'><li>Courses</li></NavLink>
     <li>Contests</li>
     <li>Jobs</li>
     <li>Categories</li>
     <li>Research Papers</li>
     <NavLink to='writeearn'><li>Write & Earn</li></NavLink>
     <li>Promote & Earn</li>
          </div>
        </div>
        <div className="navbarsearch">
          <input type="text" placeholder="Search here" />
        </div>
      </div>
    </>
  );
};

export default Features;
