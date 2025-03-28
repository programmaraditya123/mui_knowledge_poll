import React from 'react';
import './CommunityNavbar.css';
//import { IoLogoSass } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import { FaPeopleLine } from "react-icons/fa6";
import {NavLink} from 'react-router';

const CommunityNavbar = () => {
  return (
    <div className='cnav1'>
       <div className='cnav'>
       {/* <li><IoLogoSass /></li> */}
       <li>Knowledge Poll Community</li>
       {/* <NavLink to='/'><li><RiDashboardLine className='reacticon'/>Dashboard</li></NavLink> */}
       {/* <li>Community Members <FaPeopleLine /></li> */}
        
       <NavLink to='/community/join'><li><FaPeopleLine className='reacticon'/> Join Comunity</li></NavLink>
        <NavLink to='/community/create'><li>Create Community</li></NavLink>
        <NavLink to='/community/pricing'><li>Pricing</li></NavLink>
        <NavLink to='/community/aboutus'><li>About Us</li></NavLink>
        {/* <input type='text' placeholder='Search Community'/> */}
       </div>
       <div className='cnav2'>
        <button className='btn-2'>Get Started</button>
       </div>
    </div>
  )
}

export default CommunityNavbar
