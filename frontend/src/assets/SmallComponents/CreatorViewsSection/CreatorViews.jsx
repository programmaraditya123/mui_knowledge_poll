import React from 'react';
import './CreatorViews.css'
import { BsPersonSquare } from "react-icons/bs";

const CreatorViews = (props) => {
  return (
    <div className='crt'>
      <div className='creator'>
      <div className='creatorphoto'><BsPersonSquare className='creicon'/></div>
      <div className='creatorname'>{props.name}</div>
      </div>
      <div className='views'>
        <div className='updatetime'>{props.time}</div>
        <div className='totalviews'>{props.views}</div>
      </div>
    </div>
  )
}

export default CreatorViews
