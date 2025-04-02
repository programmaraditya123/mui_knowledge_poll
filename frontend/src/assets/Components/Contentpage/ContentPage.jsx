import React, { lazy, Suspense } from 'react';
import './ContentPage.css';
// import Carousel from '../Carousel';

const Carousel = lazy(() => import('../Carousel'))

const ContentPage = () => {
  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
    <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <div className='disp-cont'>
        <div className='disp-cont-1'>
          <div className='disp-cont-items'>
            <li>What is python</li>


          </div>
        </div>
        {/* <div className='disp-cont-center'>  */}
        <div className='disp-cont-2'>
          <p>jdgb</p>
          <div className='disp-cont-btns'>
            <button className='btn-12'>Previous Topic Topic Name</button>
            <button className='btn-12'>Next Topic Topic Name</button>
          </div>
        </div>

        {/* </div> */}
        <div className='disp-cont-3'>this is the right content</div>


      </div>
    </>
  )
}

export default ContentPage
