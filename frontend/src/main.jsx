import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import App from './App.jsx';
import C from './assets/Components/ContentParts/C/C.jsx';
import Golang from './assets/Components/ContentParts/Golang/Golang.jsx';
import Rust from './assets/Components/ContentParts/Rust/Rust.jsx';
import Perl from './assets/Components/ContentParts/Perl/Perl.jsx';
import Cplusplus from './assets/Components/ContentParts/C++/Cplusplus.jsx';
import Javascript from './assets/Components/ContentParts/Javascript/Javascript.jsx';
import Html from './assets/Components/ContentParts/HTMLPage/Html.jsx';
import CssPage from './assets/Components/ContentParts/CssPage/CssPage.jsx';
import Bootstrap from './assets/Components/ContentParts/Bootstrap/Bootstrap.jsx';
import Tailwindcss from './assets/Components/ContentParts/Tailwindcss/Tailwindcss.jsx';
import Datascience from './assets/Components/ContentParts/DataScience/Datascience.jsx';
import Ml from './assets/Components/ContentParts/MachineLearning/Ml.jsx';
import Dl from './assets/Components/ContentParts/DeepLearning/Dl.jsx';
import Da from './assets/Components/ContentParts/DataAnalyst/Da.jsx';
import Aiagents from './assets/Components/ContentParts/Aiagents/Aiagents.jsx';
import Sklearn from './assets/Components/ContentParts/Sklearn/Sklearn.jsx';
import Matplotlib from './assets/Components/ContentParts/Matplotlib/Matplotlib.jsx';
import Pandas from './assets/Components/ContentParts/Pandas/Pandas.jsx';
import Numpy from './assets/Components/ContentParts/Numpy/Numpy.jsx';
import Seaborn from './assets/Components/ContentParts/Seaborn/Seaborn.jsx';
import OperatingSystem from './assets/Components/ContentParts/OperatingSystem/OperatingSystem.jsx';
import ComputerNetwork from './assets/Components/ContentParts/ComputerNetwork/ComputerNetwork.jsx';
import Dbms from './assets/Components/ContentParts/Dbms/Dbms.jsx';
import Oops from './assets/Components/ContentParts/OOPS/Oops.jsx';
import Fla from './assets/Components/ContentParts/FLA/Fla.jsx';
import Cd from './assets/Components/ContentParts/CD/Cd.jsx';
import Dsa from './assets/Components/ContentParts/DSA/Dsa.jsx';
import Isdh from './assets/Components/ContentParts/ISDH/Isdh.jsx';
import Sql from './assets/Components/ContentParts/SQLPage/Sql.jsx';
import Mysql from './assets/Components/ContentParts/MysqlPage/Mysql.jsx';
import Mongodb from './assets/Components/ContentParts/MongoDBPage/Mongodb.jsx';
import Postgre from './assets/Components/ContentParts/PostgreSql/Postgre.jsx';
import DockerPage from './assets/Components/ContentParts/DockerPage/DockerPage.jsx';
import Kubernetes from './assets/Components/ContentParts/KubernetesPage/kubernetes.jsx';
import Git from './assets/Components/ContentParts/Git/Git.jsx';
import AWS from './assets/Components/ContentParts/AWSPage/AWS.jsx';
import Gradle from './assets/Components/ContentParts/GradlePage/Gradle.jsx';
import Gitlab from './assets/Components/ContentParts/Gitlab/Gitlab.jsx';
import Systemdesign from './assets/Components/ContentParts/Systemdesign/Systemdesign.jsx';
import Android from './assets/Components/ContentParts/AndroidPage/Android.jsx';
import Linux from './assets/Components/ContentParts/LinuxPage/Linux.jsx';
import St from './assets/Components/ContentParts/Softwaretesting/St.jsx';
import Projectmanagement from './assets/Components/ContentParts/Projectmanagement/Projectmanagement.jsx';
import Excel from './assets/Components/ContentParts/Excel/Excel.jsx';
import Productmanagement from './assets/Components/ContentParts/Productmanagement/Productmanagement.jsx';
 
 
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
          <Route path='/c' element={<C/>}/>
          <Route path='/golang' element={<Golang/>}/>
          <Route path='/rust' element={<Rust/>}/>
          <Route path='/perl' element={<Perl/>}/>
          <Route path='/cpp' element={<Cplusplus/>}/>
          <Route path='/js' element={<Javascript/>}/>
          <Route path='/html' element={<Html/>}/>
          <Route path='/css' element={<CssPage/>}/>
          <Route path='/bootstrap' element={<Bootstrap/>}/>
          <Route path='/tailwind' element={<Tailwindcss/>}/>
          <Route path='/datascience' element={<Datascience/>}/>
          <Route path='/machinelearning' element={<Ml/>}/>
          <Route path='/deeplearning' element={<Dl/>}/>
          <Route path='/dataanalyst' element={<Da/>}/>
          <Route path='/aiagents' element={<Aiagents/>}/>
          <Route path='/sklearn' element={<Sklearn/>}/>
          <Route path='/matplotlib' element={<Matplotlib/>}/>
          <Route path='/pandas' element={<Pandas/>}/>
          <Route path='/numpy' element={<Numpy/>}/>
          <Route path='/seaborn' element={<Seaborn/>}/>
          <Route path='/os' element={<OperatingSystem/>}/>
          <Route path='/cn' element={<ComputerNetwork/>}/>
          <Route path='/dbms' element={<Dbms/>}/>
          <Route path='/oops' element={<Oops/>}/>
          <Route path='/fla' element={<Fla/>}/>
          <Route path='/cd' element={<Cd/>}/>
          <Route path='/dsa' element={<Dsa/>}/>
          <Route path='/isdh' element={<Isdh/>}/>
          <Route path='/sql' element={<Sql/>}/>
          <Route path='/mysql' element={<Mysql/>}/>
          <Route path='/mongodb' element={<Mongodb/>}/>
          <Route path='/postgre' element={<Postgre/>}/>
          <Route path='/docker' element={<DockerPage/>}/>
          <Route path='/kubernetes' element={<Kubernetes/>}/>
          <Route path='/git' element={<Git/>}/>
          <Route path='/aws' element={<AWS/>}/>
          <Route path='/gradle' element={<Gradle/>}/>
          <Route path='/gitlab' element={<Gitlab/>}/>
          <Route path='/systemdesign' element={<Systemdesign/>}/>
          <Route path='/android' element={<Android/>}/>
          <Route path='/linux' element={<Linux/>}/>
          <Route path='/st' element={<St/>}/>
          <Route path='/pm' element={<Projectmanagement/>}/>
          <Route path='/excel' element={<Excel/>}/>
          <Route path='/productm' element={<Productmanagement/>}/>
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
