import React, { lazy, Suspense } from 'react';
import './CommunityNavbar.css';
//import { FaPeopleLine } from "react-icons/fa6";
import {NavLink} from 'react-router-dom';
const FaPeopleLine = lazy(() => import('react-icons/fa6').then(module => ({ default: module.FaPeopleLine })));

const CommunityNavbar = () => {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  )
}

export default CommunityNavbar
