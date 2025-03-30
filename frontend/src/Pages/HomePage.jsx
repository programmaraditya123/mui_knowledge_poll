import React from 'react';
import './HomePage.css'
import PrimarySearchAppBar from '../assets/Components/Navbar'
import Searcharea from '../assets/Components/Searcharea'
import TextCarousel from '../assets/Components/Carousel'
//import Features from '../assets/Components/Features'
import Cards from '../assets/Components/Cards';
import EmblaCarousel from '../assets/Components/EmblaCarousel/EmblaCarousel';
import a from '../assets/Images/a.jpeg'
import b from '../assets/Images/b.jpeg'
import c from '../assets/Images/c.jpeg'
import d from '../assets/Images/b.jpeg'
import SmallCards from '../assets/Components/SmallCards/SmallCards';
import LargeCards from '../assets/Components/LargeCards/LargeCards';
import Footer from '../assets/Components/Footer/Footer';
import { useNavigate } from 'react-router';
const SLIDES = [a,b,c,d]

const OPTIONS = { loop: true }
const HomePage = () => {
  const navigate = useNavigate();

  const coursePage = () => {
    let path = `course/allcourses`
    navigate(path)
  };
  return (
    <>
    {/* <Features/> */}
    <div className='searchnav'>
     <PrimarySearchAppBar/>
     </div>
     <TextCarousel b="React" c="Java" d="C++" e="Rust" f="Golang" g="C" h="Perl" i="Javscript"/> 
     <Searcharea/>
      <div className='margin-cont'>
      
      
     <div className='hed1'>
      <h1>Courses</h1>
      <button className='btn10' onClick={coursePage} >View All</button>
      </div>
     
     <div className='card'>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
</div>
     
     <div className='ebla'>
     <h3>OFFERS</h3><br/>
     <EmblaCarousel slides={SLIDES} options={OPTIONS} />

     <h3>Must Explore</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Jobs for you"/>
     <SmallCards title = "Hire with us"/>
     <SmallCards title="Advertise with us"/>
     <SmallCards title="Placement Training..."/><br/>
      </div>
      
     <h3>Explore</h3>
     <div className='lrgcrd'>
      <LargeCards title="Data Structure and Algorithms" c="cyan"/>
      <LargeCards title="Practice DSA" c="Green"/>
      <LargeCards title="Data Structure and Algorithms" c="cyan"/>
      <LargeCards title="Practice DSA" c="Green"/>
      <LargeCards title="Data Structure and Algorithms" c="cyan"/>
      <LargeCards title="Practice DSA" c="Green"/>
      <LargeCards title="Data Structure and Algorithms" c="cyan"/>
      <LargeCards title="Practice DSA" c="Green"/>
      </div>
      <h3>Web Development</h3><br/>
      <div className='smcrds'>
     <SmallCards title ="HTML"/><SmallCards title = "CSS"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>AI ML & Data Science</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Data Science"/><SmallCards title = "Machine Learning"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>Programming Languages</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Python"/><SmallCards title = "Java"/><SmallCards title="Javascript"/><SmallCards title="C++"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>Interview Preparation</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="SDE sheets"/><SmallCards title = "Puzzles"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>CS Subjects</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Operating System"/><SmallCards title = "CN"/><SmallCards title="DBMS"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>DataBases</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="SQL"/><SmallCards title = "MYSQL"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>Devops</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Data Science"/><SmallCards title = "Machine Learning"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     <h3>Tutorials</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="Data Science"/><SmallCards title = "Machine Learning"/><SmallCards title="Javascript"/><SmallCards title="React"/><SmallCards title="Bpptstrap"/><SmallCards title="Tailwind CSS"/><SmallCards title="Frontend Dev..."/><SmallCards title="Backend Dev.."/><br/>
      
     </div>
     </div>
     </div>
     {/* <Footer/> */}
     
      
      
      
     
    </>
  )
}

export default HomePage
