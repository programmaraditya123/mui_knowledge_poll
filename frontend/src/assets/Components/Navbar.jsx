import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [pdrop,setPdrop] = useState(false);
  const[isSignin,setIsSignIn] = useState(false);
  const[email,setEmail] = useState("");
  const dropref = useRef(null);
  
  useEffect (()=>{
    function handleClickOutside (event) {
      if (dropref.current && ! dropref.current.contains(event.target)){
        setPdrop(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside);

    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[])

  useEffect (() =>{
    const user = JSON.parse(localStorage.getItem("token"))
    const email = JSON.parse(localStorage.getItem("email"))
    if (user && email){
      setIsSignIn(true);
      setEmail(email.split("@")[0]);
    }
  },[]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    setIsSignIn(false);
    setEmail("");


  };
  
  return (
    <div>
    <div className='navhome'>
      <div className='navhome1'>
        <li><FaBars className='navicons'/></li>
        <li>Knowledge Poll</li>
        <input type='text' placeholder='Search here ...'/>
      </div>
      <div className='navhome2'>
      {!isSignin ? (<NavLink to='/login'><li>Log in</li></NavLink>) :
       (<NavLink onClick={handleLogOut}><li>Log out</li></NavLink>)}
       
        <li><IoMdNotifications /></li>
        <li onClick={()=> setPdrop(!pdrop)}><RiAccountPinCircleFill /></li>
        <li>{isSignin && <span className='user-email'>{email}</span>}</li>
        {/* <li></li> */}
        <div ref={dropref} className={`navdrop ${pdrop ? "navdropshow" : ""}`}>
          <li>Profile</li>
          <Link to='/creatordashboard'><li>Dashboard</li></Link>
          <li>Setting</li>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Navbar;