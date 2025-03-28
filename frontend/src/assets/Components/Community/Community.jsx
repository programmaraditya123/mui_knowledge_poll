import React from 'react'
import CommunityNavbar from './CommunityNavbar/CommunityNavbar';
import './Community.css';
import CommunityHomeBody from './CommunityHomeBody/CommunityHomeBody';

const Community = () => {
  return (
    <div className='cdiv'>
    <CommunityNavbar/>
    <CommunityHomeBody/>
       
    </div>
  )
}

export default Community
