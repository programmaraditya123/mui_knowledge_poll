import React, { lazy, Suspense } from 'react';
import './Cards.css';
import a from '../Images/a.jpeg';

const FaHeart = lazy(() => import('react-icons/fa6').then(module => ({ default: module.FaHeart })));
const FiMessageSquare = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiMessageSquare })));
 
const Cards = ({title,description,creator,likes,comments}) => {
  return (
    <div className='lowerdiv'>
    <div className='crd1'>
            <img src={a} alt='this is tut'/>
            <div className='des'>
            <h4>{title}</h4>
            <h2>{description}</h2>
            </div>
            <div className='tutdes'>
             
            <div className='tutdes1'>
              <div>
              <img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>{creator}</p>
              </div>
              </div>
               
               
            </div>
            <div className='rating'>
              <div><FaHeart /> {likes}</div>
              <div><FiMessageSquare />  {comments}</div> 
               
            </div>
            
          </div>
      
    </div>
  )
}

export default Cards;
