import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import { NavLink,Link } from "react-router";

 

 

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        background: "#333",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        right: "10px",
        zIndex: 1,
        transition: "all 0.3s ease",
      }}
      onClick={onClick}
    >
      {/* <FaChevronRight size={20} /> */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        background: "#333",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        left: "10px",
        zIndex: 1,
        transition: "all 0.3s ease",
      }}
      onClick={onClick}
    >
      {/* <FaChevronLeft size={20} /> */}
    </div>
  );
};


function Carousel(props) {
  const [display] = useState(true);
  const [width] = useState(600);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding:"20px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,  
        settings: {
          slidesToShow: 5,
          slidesToScroll:1,
          arrows: true,
          // centerPadding:"5px",  
        },
      },
    ],
  };

  return (
    <div className="slider-container navbar2">
       
      <div
        style={{
          width: width + "auto",
          justifyContent:"space-around",
          display: display ? "block" : "none",
          listStyle:"none",
        }}
      >
        <Slider {...settings}>
          <div className="carouseldiv">
            <NavLink to="/python"><h3>Python</h3></NavLink>
          </div>
          <div className="carouseldiv">
          <NavLink to='/react'><h3>{props.b}</h3></NavLink> 
          </div>
          <div className="carouseldiv">
          <NavLink to='/java'><h3>{props.c}</h3> </NavLink>
          </div>
          <div className="carouseldiv">
          <h3>{props.d}</h3> 
          </div>
          <div className="carouseldiv">
            <h3>{props.e}</h3>
          </div>
          <div className="carouseldiv">
            <h3>{props.f}</h3>
          </div>
          <div className="carouseldiv">
            <h3>{props.g}</h3>
          </div>
          <div className="carouseldiv">
            <h3>{props.h}</h3>
          </div>
          <div className="carouseldiv">
            <h3>{props.i}</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;


   