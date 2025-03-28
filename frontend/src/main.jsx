import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
// import './index.css'
import App from './App.jsx'
//import ContentPage from './assets/Components/Contentpage/ContentPage.jsx';
//import Footer from './assets/Components/Footer/Footer.jsx'
import WriteEarn from './Pages/Write&EarnPage/Write&Earn.jsx';
import Features from './assets/Components/Features.jsx';
import Python from './assets/Components/ContentParts/Python/Python.jsx';
import AIContentGenerationPage from './Pages/AIContentGenerationPage/AIContentGenerationPage.jsx';
import Community from './assets/Components/Community/Community.jsx';
import JoinCommunity from './assets/Components/Community/JoinCommunity/JoinCommunity.jsx';
import CreateCommunityPage from './assets/Components/Community/CreateCommunityPage/CreateCommunityPage.jsx';
import CommunityPricing from './assets/Components/Community/CommunityPricing/CommunityPricing.jsx';
import CommunityAboutus from './assets/Components/Community/CommunityAboutus/CommunityAboutus.jsx';
import CoursesPage from './assets/Components/CoursesPage/CoursesPage.jsx';
import CourseContVideoPage from './assets/Components/CoursesPage/CourseContVideoPage/CourseContVideoPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Features/>
  <Routes>
  <Route path='/' element={<App />}/>
  <Route path='/python' element={<Python/>}/>
  <Route path='/writeearn' element = {<WriteEarn/>}/>
  <Route path='/aicont' element={<AIContentGenerationPage/>}/>
  <Route path='/community' element={<Community/>}/>
  <Route path='/community/join' element ={<JoinCommunity/>}/>
  <Route path='/community/create' element={<CreateCommunityPage/>}/>
  <Route path='/community/pricing' element={<CommunityPricing/>}/>
  <Route path='/community/aboutus' element={<CommunityAboutus/>}/>
  <Route path='/course/allcourses' element={<CoursesPage/>}/>
  <Route path='/course/coursedetail' element={<CourseContVideoPage/>}/>
    {/* <App /> */}
    </Routes>
  </BrowserRouter>
  {/* <Footer/> */}
  </StrictMode>
  
)
