import React, { lazy, Suspense } from 'react'
//import CommunityNavbar from './CommunityNavbar/CommunityNavbar';
import './Community.css';
//import CommunityHomeBody from './CommunityHomeBody/CommunityHomeBody';
const CommunityNavbar = lazy(() => import('./CommunityNavbar/CommunityNavbar'));
const CommunityHomeBody = lazy(() => import( './CommunityHomeBody/CommunityHomeBody'));

const Community = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
    <div className='cdiv'>
    <CommunityNavbar/>
    <CommunityHomeBody/>
       
    </div>
    </Suspense>
  )
}

export default Community
