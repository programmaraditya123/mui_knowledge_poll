import React from 'react';
import './Cards.css';
import { CiClock2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
// import { FaRegStar } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// import { FaTv } from "react-icons/fa";
// import { FaRunning } from "react-icons/fa";
import a from '../Images/a.jpeg';
// import b from '../Images/b.jpeg';
// import c from '../Images/c.jpeg';

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
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div> 
              {/* <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div> */}
            </div>
            
          </div>
      
    </div>
  )
}

export default Cards
