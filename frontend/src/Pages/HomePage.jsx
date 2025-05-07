import React, { lazy, Suspense } from 'react';
import './HomePage.css';
//const Styling = lazy(() => import('./HomePage.css'))
import a from '../assets/Images/a.jpeg'
import b from '../assets/Images/b.jpeg'
import c from '../assets/Images/c.jpeg'
import d from '../assets/Images/b.jpeg'
import { NavLink, useNavigate } from 'react-router';
import CoursesPage from '../assets/Components/CoursesPage/CoursesPage';
import SEO from '../SearchEngineOptimization/Seo';
const TextCarousel = lazy(() => import('../assets/Components/Carousel'))
const EmblaCarousel = lazy(() => import('../assets/Components/EmblaCarousel/EmblaCarousel'))
const SmallCards = lazy(() => import('../assets/Components/SmallCards/SmallCards'))
const LargeCards = lazy(() => import('../assets/Components/LargeCards/LargeCards'))
const Cards = lazy(() => import('../assets/Components/Cards'))  
const Searcharea = lazy(() => import('../assets/Components/Searcharea'));
const PrimarySearchAppBar = lazy(() => import('../assets/Components/Navbar'))
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
    <SEO
        title="Home-Knowledgepoll"
        description="education platform for all learners"
        canonical="https://www.knowledgepoll.site/"
        ogTitle="python java react php c c++"
        ogDescription="Buy the latest Nike Air Max online."
        // ogImage="https://yourdomain.com/images/nike-air-max.jpg"
        twitterCard="this is the home page"
        twitterSite="@knowledgepoll"
        twitterCreator="@aditya"
      />
     <Suspense fallback={<>{null}</>}>
      {/* <Styling/> */}
    
    <div className='searchnav'>
     <PrimarySearchAppBar/>
     </div>
     <TextCarousel b="React" c="Java" d="C" e="Rust" f="Golang" g="C++" h="Perl" i="Javscript"/> 
     <Searcharea/>
      <div className='margin-cont'>
      
      
     <div className='hed1'>
      <h1>Courses</h1>
      <button className='btn10' onClick={coursePage} >View All</button>
      </div>
     
     <div className='card'>
     <CoursesPage/>
     {/* <div className='carditem'><Cards title="mern stack" description="Learn Full Stack Web development" 
        creator="aditya" likes = {10} comments = {4}
       /></div> */}
      {/* <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div>
      <div className='carditem'><Cards/></div> */}
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
     <NavLink to='/html'><SmallCards title ="HTML"/></NavLink>
     <NavLink to='/css'><SmallCards title="CSS"/></NavLink>
     <NavLink to='/js'><SmallCards title="Javascript"/></NavLink>
     <NavLink to='/react'><SmallCards title="React"/></NavLink>
     <NavLink to='/bootstrap'><SmallCards title="Bootstrap"/></NavLink>
     <NavLink to='/tailwind'><SmallCards title="Tailwind CSS"/></NavLink>
     

     <br/>
      
     </div>
     <h3>AI ML & Data Science</h3><br/>
     <div className='smcrds'>
     <NavLink to='/datascience'><SmallCards title ="Data Science"/></NavLink>
     <NavLink to='/machinelearning'><SmallCards title = "Machine Learning"/></NavLink>
     <NavLink to='/deeplearning'><SmallCards title="Deep Learning"/></NavLink>
     <NavLink to='/dataanalyst'><SmallCards title="Data Analyst"/></NavLink>
     <NavLink to='/aiagents'> <SmallCards title="AI agents"/></NavLink>
     <NavLink to='/sklearn'><SmallCards title="Scikit Learn"/></NavLink>
     <NavLink to='/matplotlib'><SmallCards title="Matplotlib"/></NavLink>
     <NavLink to='/pandas'><SmallCards title="Pandas"/></NavLink>
     <NavLink to='/numpy'><SmallCards title="Numpy"/></NavLink>
     <NavLink to='/seaborn'><SmallCards title="Seaborn"/></NavLink>

     <br/>
      
     </div>
     <h3>Programming Languages</h3><br/>
     <div className='smcrds'>
     <NavLink to='/python'><SmallCards title ="Python"/></NavLink>
    <NavLink to='/java'> <SmallCards title = "Java"/></NavLink>
     <NavLink to='/js'><SmallCards title="Javascript"/></NavLink>
    <NavLink to='/cpp'> <SmallCards title="C++"/></NavLink>
     <NavLink to='/golang'><SmallCards title="Golang"/></NavLink>
     <NavLink to='/css'><SmallCards title="CSS"/></NavLink>
     <NavLink to='/rust'><SmallCards title="Rust"/></NavLink>
    <NavLink to='/perl'> <SmallCards title="Perl"/></NavLink>
    <NavLink to='/python'> <SmallCards title="Python"/></NavLink>
    <NavLink to='/c'> <SmallCards title="C"/></NavLink>
    <NavLink to='/tailwind'><SmallCards title="Tailwind CSS"/></NavLink>

     <br/>
      
     </div>
     <h3>Interview Preparation</h3><br/>
     <div className='smcrds'>
     <SmallCards title ="SDE sheets"/>
     <SmallCards title = "Puzzles"/>
     <SmallCards title="Javascript"/>
     <SmallCards title="React"/>
     <NavLink to='/bootstrap'><SmallCards title="Bootstrap"/></NavLink>
     <NavLink to='/tailwind'><SmallCards title="Tailwind CSS"/></NavLink>
     <SmallCards title="Frontend Dev..."/>
     <SmallCards title="Backend Dev.."/>

     <br/>
      
     </div>
     <h3>CS Subjects</h3><br/>
     <div className='smcrds'>
     <NavLink to='/os'><SmallCards title ="Operating System"/></NavLink>
    <NavLink to='/cn'> <SmallCards title = "CN"/></NavLink>
    <NavLink to='/dbms'> <SmallCards title="DBMS"/></NavLink>
     <NavLink to='/oops'><SmallCards title="OOPS"/></NavLink>
     <NavLink to='/fla'><SmallCards title="FLA"/></NavLink>
     <NavLink to='/cd'><SmallCards title="CD"/></NavLink>
     <NavLink to='/dsa'><SmallCards title="DSA"/></NavLink>
     <NavLink to='/isdh'><SmallCards title="ISDH/NS"/></NavLink>

     <br/>
      
     </div>
     <h3>DataBases</h3><br/>
     <div className='smcrds'>
     <NavLink to='/sql'><SmallCards title ="SQL"/></NavLink>
      <NavLink to='/mysql'><SmallCards title = "MYSQL"/></NavLink>
     <NavLink to='/mongodb'><SmallCards title="MongoDB"/></NavLink>
     <NavLink to='/postgre'><SmallCards title="Postgre SQL"/></NavLink>
      

     <br/>
      
     </div>
     <h3>Devops</h3><br/>
     <div className='smcrds'>
     <NavLink to='/docker'><SmallCards title ="Docker"/></NavLink>
     <NavLink to='/kubernetes'><SmallCards title = "Kubernetes"/></NavLink>
     <NavLink to='/git'><SmallCards title="Git"/></NavLink>
     <NavLink to='/aws'><SmallCards title="AWS"/></NavLink>
     <NavLink to='/gradle'><SmallCards title="Gradle"/></NavLink>
     <NavLink to='/gitlab'><SmallCards title="GitLab"/></NavLink>
     
      
     </div>
     <h3>Tutorials</h3><br/>
     <div className='smcrds'>
     <NavLink to='/systemdesign'><SmallCards title ="System Design"/></NavLink>
     <NavLink to='/android'><SmallCards title = "Android"/></NavLink>
     <NavLink to='/linux'><SmallCards title="Linux"/></NavLink>
    <NavLink to='/st'> <SmallCards title="Software Testing"/></NavLink>
     <NavLink to='/pm'><SmallCards title="Project Management"/></NavLink>
    <NavLink to='/excel'><SmallCards title="Excel"/></NavLink>
     <NavLink to='/productm'><SmallCards title="Product Management"/></NavLink>
     

     <br/>
      
     </div>
     </div>
     </div>
     
      
      
      
     
    </Suspense>
    </>
    
  )
}

export default HomePage
