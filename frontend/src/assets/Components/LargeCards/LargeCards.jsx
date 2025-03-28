import React from 'react';
import './LargeCards.css';
import { GoArrowRight } from "react-icons/go";


const LargeCards = (props) => {
  return (
    <div className='lgcrds' style={{backgroundColor:props.c}}>
    <div className='lgcrds-cont'>
    <p>{props.title}</p>
    <button className='btn11'>View All<GoArrowRight /></button>
    </div>
       
    </div>
  )
}

export default LargeCards
