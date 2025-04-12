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
          <NavLink to='/c'><h3>{props.d}</h3></NavLink> 
          </div>
          <div className="carouseldiv">
          <NavLink to='/rust'><h3>{props.e}</h3></NavLink>
          </div>
          <div className="carouseldiv">
            
            <NavLink to='/golang'><h3>{props.f}</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/cpp'><h3>{props.g}</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/perl'><h3>{props.h}</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/js'><h3>{props.i}</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/html'><h3>HTML</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/css'><h3>CSS</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/bootstrap'><h3>Bootstrap</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/tailwind'><h3>Tailwind</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/datascience'><h3>Data Science</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/machinelearning'><h3>Machine learning</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/deeplearning'><h3>Deep learning</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/dataanalyst'><h3>Deep Analyst</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/aiagents'><h3>Ai Agents</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/sklearn'><h3>Scikit-learn</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/matplotlib'><h3>Matplotlib</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/numpy'><h3>Numpy</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/seaborn'><h3>Seaborn</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/os'><h3>Opearating System</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/cn'><h3>Computer Network</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/dbms'><h3>DBMS</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/oops'><h3>OOPS</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/fla'><h3>FLA</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/cd'><h3>Compiler Design</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/dsa'><h3>DSA</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/isdh'><h3>ISDH</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/sql'><h3>SQL</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/mysql'><h3>MYSQL</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/mongodb'><h3>MongoDB</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/postgre'><h3>Postgre SQL</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/docker'><h3>Docker</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/kubernetes'><h3>Kubernetes</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/git'><h3>Git</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/aws'><h3>AWS</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/gradle'><h3>Gradle</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/gitlab'><h3>Gitlab</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/systemdesign'><h3>System Design</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/android'><h3>Android</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/linux'><h3>Linux</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/st'><h3>Software Testing</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/pm'><h3>Project Manag.</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/excel'><h3>Excel</h3></NavLink>
          </div>
          <div className="carouseldiv">
            <NavLink to='/productm'><h3>Product Manag.</h3></NavLink>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;


   