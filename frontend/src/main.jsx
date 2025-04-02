import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import App from './App.jsx';
 
 
const Features = lazy(() => import('./assets/Components/Features.jsx'))
const PythonPage = lazy(() => import('./assets/Components/ContentParts/Python/Python.jsx'));
const WriteEarnPage = lazy(() => import('./Pages/Write&EarnPage/Write&Earn.jsx'));
const AIContentGeneration = lazy(() => import('./Pages/AIContentGenerationPage/AIContentGenerationPage.jsx'));
const CommunityPage = lazy(() => import('./assets/Components/Community/Community.jsx'));
const JoinCommunityPage = lazy(() => import('./assets/Components/Community/JoinCommunity/JoinCommunity.jsx'));
const CreateCommunity = lazy(() => import('./assets/Components/Community/CreateCommunityPage/CreateCommunityPage.jsx'));
const CommunityPricingPage = lazy(() => import('./assets/Components/Community/CommunityPricing/CommunityPricing.jsx'));
const CommunityAboutUsPage = lazy(() => import('./assets/Components/Community/CommunityAboutus/CommunityAboutus.jsx'));
const Courses = lazy(() => import('./assets/Components/CoursesPage/CoursesPage.jsx'));
const CourseDetail = lazy(() => import('./assets/Components/CoursesPage/CourseContVideoPage/CourseContVideoPage.jsx'));
const ReactComponent = lazy(() => import('./assets/Components/ContentParts/React/React.jsx'));
const JavaComponent = lazy(() => import('./assets/Components/ContentParts/Java/Java.jsx'));
const RegisterPage = lazy(() => import('./assets/Components/Register/Register.jsx'));
const LoginPage = lazy(() => import('./assets/Components/Login/Login.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Features /> {/* Consider if this should be inside Routes or lazy-loaded */}
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/react" element={<ReactComponent />} />
          <Route path="/java" element={<JavaComponent />} />
          <Route path="/writeearn" element={<WriteEarnPage />} />
          <Route path="/aicont" element={<AIContentGeneration />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/join" element={<JoinCommunityPage />} />
          <Route path="/community/create" element={<CreateCommunity />} />
          <Route path="/community/pricing" element={<CommunityPricingPage />} />
          <Route path="/community/aboutus" element={<CommunityAboutUsPage />} />
          <Route path="/course/allcourses" element={<Courses />} />
          <Route path="/course/coursedetail" element={<CourseDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
       
    </BrowserRouter>
  </StrictMode>
);
