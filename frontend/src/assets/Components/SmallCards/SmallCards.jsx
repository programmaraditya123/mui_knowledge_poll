import React from 'react';
import { GoArrowRight } from "react-icons/go";
import './SmallCards.css'

const SmallCards = (props) => {
  return (
    <div className="jobs-card">
  <span className='tit'>{props.title}</span>
  <span className="arrow"><GoArrowRight/></span>
</div>

  )
}

export default SmallCards
