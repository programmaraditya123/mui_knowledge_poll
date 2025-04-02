import React, { lazy, Suspense } from 'react';
import './Cards.css';
// import { FaHeart } from "react-icons/fa";
// import { FiMessageSquare } from "react-icons/fi";
import a from '../Images/a.jpeg';

const FaHeart = lazy(() => import('react-icons/fa6').then(module => ({ default: module.FaHeart })));
const FiMessageSquare = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiMessageSquare })));
//const a = lazy(() => import('../Images/a.jpeg'))
 
const Cards = () => {
  return (
    <div className='lowerdiv'>
    <div className='crd1'>
            <img src={a} alt='this is tut'/>
            <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
             
            <div className='tutdes1'>
              <div>
              <img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
               
               
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div> 
               
            </div>
            
          </div>
      
    </div>
  )
}

export default Cards
