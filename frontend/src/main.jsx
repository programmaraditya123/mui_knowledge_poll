import { lazy, Suspense  } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';  
import CreatorDashBoardHome from './assets/CreatorDashboard/CreatorDashBoardHome/CreatorDashBoardHome.jsx';
import CreateCourse from './assets/VideoCourses/CreateCourse/CreateCourse.jsx';
import CourseDescriptionPage from './assets/Components/CoursesPage/CourseDescriptionPage/CourseDescriptionPage.jsx';
import CreatorUploadVedioPage from './KnowledgeTube/CreatorUploadVedioPage/CreatorUploadVedioPage.jsx';
import KnowledgeTubeHome from './KnowledgeTube/KnowledgeTubeHome/KnowledgeTubeHome.jsx';
import KnowTubeVideo from './KnowledgeTube/KnowTubeVideo/KnowTubeVideo.jsx';
//import UploadVideoHome from './assets/VideoCourses/UploadVideoHome/UploadVideoHome.jsx';
const App = lazy(() => import('./App.jsx'));
const Javascript = lazy(() => import('./assets/Components/ContentParts/Javascript/Javascript.jsx'));
const Html = lazy(() => import('./assets/Components/ContentParts/HTMLPage/Html.jsx'));
const CssPage = lazy(() => import('./assets/Components/ContentParts/CssPage/CssPage.jsx'));
const Bootstrap = lazy(() => import('./assets/Components/ContentParts/Bootstrap/Bootstrap.jsx'));
const Tailwindcss = lazy(() => import('./assets/Components/ContentParts/Tailwindcss/Tailwindcss.jsx'));
const Datascience = lazy(() => import('./assets/Components/ContentParts/DataScience/Datascience.jsx'));
const Ml = lazy(() => import('./assets/Components/ContentParts/MachineLearning/Ml.jsx'));
const Dl = lazy(() => import('./assets/Components/ContentParts/DeepLearning/Dl.jsx'));
const Da = lazy(() => import('./assets/Components/ContentParts/DataAnalyst/Da.jsx'));
const Aiagents = lazy(() => import('./assets/Components/ContentParts/Aiagents/Aiagents.jsx'));
const Sklearn = lazy(() => import('./assets/Components/ContentParts/Sklearn/Sklearn.jsx'));
const Matplotlib = lazy(() => import('./assets/Components/ContentParts/Matplotlib/Matplotlib.jsx'));
const Pandas = lazy(() => import('./assets/Components/ContentParts/Pandas/Pandas.jsx'));
const Numpy = lazy(() => import('./assets/Components/ContentParts/Numpy/Numpy.jsx'));
const Seaborn = lazy(() => import('./assets/Components/ContentParts/Seaborn/Seaborn.jsx'));
const OperatingSystem = lazy(() => import('./assets/Components/ContentParts/OperatingSystem/OperatingSystem.jsx'));
const ComputerNetwork = lazy(() => import('./assets/Components/ContentParts/ComputerNetwork/ComputerNetwork.jsx'));
const Dbms = lazy(() => import('./assets/Components/ContentParts/Dbms/Dbms.jsx'));
const Oops = lazy(() => import('./assets/Components/ContentParts/OOPS/Oops.jsx'));
const Fla = lazy(() => import('./assets/Components/ContentParts/FLA/Fla.jsx'));
const Cd = lazy(() => import('./assets/Components/ContentParts/CD/Cd.jsx'));
const Dsa = lazy(() => import('./assets/Components/ContentParts/DSA/Dsa.jsx'));
const Isdh = lazy(() => import('./assets/Components/ContentParts/ISDH/Isdh.jsx'));
const Sql = lazy(() => import('./assets/Components/ContentParts/SQLPage/Sql.jsx'));
const Mysql = lazy(() => import('./assets/Components/ContentParts/MysqlPage/Mysql.jsx'));
const Mongodb = lazy(() => import('./assets/Components/ContentParts/MongoDBPage/Mongodb.jsx'));
const Postgre = lazy(() => import('./assets/Components/ContentParts/PostgreSql/Postgre.jsx'));
const DockerPage = lazy(() => import('./assets/Components/ContentParts/DockerPage/DockerPage.jsx'));
//const Kubernetes = lazy(() => import('./assets/Components/ContentParts/KubernetesPage/Kubernetes.jsx'));
const Git = lazy(() => import('./assets/Components/ContentParts/Git/Git.jsx'));
const AWS = lazy(() => import('./assets/Components/ContentParts/AWSPage/AWS.jsx'));
const Gradle = lazy(() => import('./assets/Components/ContentParts/GradlePage/Gradle.jsx'));
const Gitlab = lazy(() => import('./assets/Components/ContentParts/Gitlab/Gitlab.jsx'));
const Systemdesign = lazy(() => import('./assets/Components/ContentParts/Systemdesign/Systemdesign.jsx'));
const Android = lazy(() => import('./assets/Components/ContentParts/AndroidPage/Android.jsx'));
const Linux = lazy(() => import('./assets/Components/ContentParts/LinuxPage/Linux.jsx'));
const St = lazy(() => import('./assets/Components/ContentParts/Softwaretesting/St.jsx'));
const Projectmanagement = lazy(() => import('./assets/Components/ContentParts/Projectmanagement/Projectmanagement.jsx'));
const Excel = lazy(() => import('./assets/Components/ContentParts/Excel/Excel.jsx'));
const Productmanagement = lazy(() => import('./assets/Components/ContentParts/Productmanagement/Productmanagement.jsx'));
 
 
const Features = lazy(() => import('./assets/Components/Features.jsx'))
const PythonPage = lazy(() => import('./assets/Components/ContentParts/Python/Python.jsx'));
const WriteEarn = lazy(() => import('./Pages/Write&EarnPage/Write&Earn.jsx'));
const AIContentGeneration = lazy(() => import('./Pages/AIContentGenerationPage/AIContentGenerationPage.jsx'));
const CommunityPage = lazy(() => import('./assets/Components/Community/Community.jsx'));
const JoinCommunityPage = lazy(() => import('./assets/Components/Community/JoinCommunity/JoinCommunity.jsx'));
const CreateCommunity = lazy(() => import('./assets/Components/Community/CreateCommunityPage/CreateCommunityPage.jsx'));
const CommunityPricingPage = lazy(() => import('./assets/Components/Community/CommunityPricing/CommunityPricing.jsx'));
const CommunityAboutUsPage = lazy(() => import('./assets/Components/Community/CommunityAboutus/CommunityAboutus.jsx'));
const Courses = lazy(() => import('./assets/Components/CoursesPage/CoursesPage.jsx'));
const CourseDetail = lazy(() => import('./assets/Components/CoursesPage/CourseContVideoPage/CourseContVideoPage.jsx'));
const ReactContent = lazy(() => import('./assets/Components/ContentParts/React/React.jsx'));
const JavaComponent = lazy(() => import('./assets/Components/ContentParts/Java/Java.jsx'));
const RegisterPage = lazy(() => import('./assets/Components/Register/Register.jsx'));
const LoginPage = lazy(() => import('./assets/Components/Login/Login.jsx'));
const C = lazy(() => import('./assets/Components/ContentParts/C/C.jsx'));
const Golang = lazy(() => import('./assets/Components/ContentParts/Golang/Golang.jsx'));
const Rust = lazy(() => import('./assets/Components/ContentParts/Rust/Rust.jsx'));
const Perl = lazy(() => import('./assets/Components/ContentParts/Perl/Perl.jsx'));
const Cplusplus = lazy(() => import('./assets/Components/ContentParts/C++/Cplusplus.jsx'));

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading ....</div>}>
      <Features /> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/python" element={<Navigate to='/python/Introduction-to-Python' />} />
          <Route path="/python/:topic" element={<PythonPage />} />
          <Route path="/react" element={<Navigate to="/react/Basics-of-React" />} />
          <Route path="/react/:topic" element={<ReactContent/>} />
          <Route path="/java" element={<Navigate to='/java/Introduction-to-Java' />} />
          <Route path="/java/:topic" element={<JavaComponent />} />
          <Route path='/c' element={<Navigate to='/c/Introduction-to-C'/>}/>
          <Route path='/c/:topic' element={<C/>}/>
          <Route path='/golang' element={<Navigate to='/golang/Introduction-to-Go'/>}/>
          <Route path='/golang/:topic' element={<Golang/>}/>
          <Route path='/rust' element={<Navigate to='/rust/Introduction-to-Rust'/>}/>
          <Route path='/rust/:topic' element={<Rust/>}/>
          <Route path='/perl' element={<Navigate to='/perl/Introduction-to-Perl'/>}/>
          <Route path='/perl/:topic' element={<Perl/>}/>
          <Route path='/cpp' element={<Navigate to='/cpp/Introduction-to-C++'/>}/>
          <Route path='/cpp/:topic' element={<Cplusplus/>}/>
          <Route path='/js' element={<Navigate to='/js/Introduction-to-JavaScript'/>}/>
          <Route path='/js/:topic' element={<Javascript/>}/>
          <Route path='/html' element={<Navigate to='/html/Introduction-to-HTML'/>}/>
          <Route path='/html/:topic' element={<Html/>}/>
          <Route path='/css' element={<Navigate to='/css/Introduction-to-CSS'/>}/>
          <Route path='/css/:topic' element={<CssPage/>}/>
          <Route path='/bootstrap' element={<Navigate to={'/bootstrap/Introduction-to-Bootstrap'}/>}/>
          <Route path='/bootstrap/:topic' element={<Bootstrap/>}/>
          <Route path='/tailwind' element={<Navigate to='/tailwind/Introduction-to-Tailwind-CSS'/>}/>
          <Route path='/tailwind/:topic' element={<Tailwindcss/>}/>
          <Route path='/datascience' element={<Navigate to='/datascience/Introduction-to-Data-Science'/>}/>
          <Route path='/datascience/:topic' element={<Datascience/>}/>
          <Route path='/machinelearning' element={<Navigate to='/machinelearning/Supervised-Learning'/>}/>
          <Route path='/machinelearning/:topic' element={<Ml/>}/>
          <Route path='/deeplearning' element={<Navigate to='/deeplearning/Perceptron'/>}/>
          <Route path='/deeplearning/:topic' element={<Dl/>}/>
          <Route path='/dataanalyst' element={<Navigate to='/dataanalyst/Data-Collection'/>}/>
          <Route path='/dataanalyst/:topic' element={<Da/>}/>
          <Route path='/aiagents' element={<Navigate to="/aiagents/Intelligent-Agents"/>}/>
          <Route path='/aiagents/:topic' element={<Aiagents/>}/>
          <Route path='/sklearn' element={<Navigate to='/sklearn/Introduction-to-Scikit-learn'/>}/>
          <Route path='/sklearn/:topic' element={<Sklearn/>}/>
          <Route path='/matplotlib' element={<Navigate to='/matplotlib/Introduction-to-Matplotlib'/>}/>
          <Route path='/matplotlib/:topic' element={<Matplotlib/>}/>
          <Route path='/pandas' element={<Navigate to='/pandas/Introduction-to-Pandas'/>}/>
          <Route path='/pandas/:topic' element={<Pandas/>}/>
          <Route path='/numpy' element={<Navigate to='/numpy/Introduction-to-NumPy'/>}/>
          <Route path='/numpy/:topic' element={<Numpy/>}/>
          <Route path='/seaborn' element={<Navigate to='/seaborn/Introduction-to-Seaborn'/>}/>
          <Route path='/seaborn/:topic' element={<Seaborn/>}/>
          <Route path='/os' element={<Navigate to='/os/Introduction-to-Operating-Systems'/>}/>
          <Route path='/os/:topic' element={<OperatingSystem/>}/>
          <Route path='/cn' element={<Navigate to='/cn/Introduction-to-Computer-Networks'/>}/>
          <Route path='/cn/:topic' element={<ComputerNetwork/>}/>
          <Route path='/dbms' element={<Navigate to='/dbms/Introduction-to-DBMS'/>}/>
          <Route path='/dbms/:topic' element={<Dbms/>}/>
          <Route path='/oops' element={<Navigate to='/oops/Introduction-to-OOPs'/>}/>
          <Route path='/oops/:topic' element={<Oops/>}/>
          <Route path='/fla' element={<Navigate to='/fla/Introduction-to-Formal-Languages-and-Automata'/>}/>
          <Route path='/fla/:topic' element={<Fla/>}/>
          <Route path='/cd' element={<Navigate to='/cd/Introduction-to-Compiler-Design'/>}/>
          <Route path='/cd/:topic' element={<Cd/>}/>
          <Route path='/dsa' element={<Navigate to='/dsa/Introduction-to-DSA' />}/>
          <Route path='/dsa/:topic' element={<Dsa/>}/>
          <Route path='/isdh' element={<Navigate to='/isdh/Introduction-to-Information-Security'/>}/>
          <Route path='/isdh/:topic' element={<Isdh/>}/>
          <Route path='/sql' element={<Navigate to='/sql/Introduction-to-SQL'/>}/>
          <Route path='/sql/:topic' element={<Sql/>}/>
          <Route path='/mysql' element={<Navigate to='/mysql/Introduction-to-MySQL'/>}/>
          <Route path='/mysql/:topic' element={<Mysql/>}/>
          <Route path='/mongodb' element={<Navigate to='/mongodb/Introduction-to-MongoDB'/>}/>
          <Route path='/mongodb/:topic' element={<Mongodb/>}/>
          <Route path='/postgre' element={<Navigate to='/postgre/Introduction-to-PostgreSQL'/>}/>
          <Route path='/postgre/:topic' element={<Postgre/>}/>
          <Route path='/docker' element={<Navigate to='/docker/Introduction-to-Docker'/>}/>
          <Route path='/docker/:topic' element={<DockerPage/>}/>
          {/* <Route path='/kubernetes' element={<Navigate to='/kubernetes/Introduction-to-Kubernetes'/>}/>
          <Route path='/kubernetes/:topic' element={<Kubernetes/>}/> */}
          <Route path='/git' element={<Navigate to='/git/Introduction-to-Version-Control'/>}/>
          <Route path='/git/:topic' element={<Git/>}/>
          <Route path='/aws' element={<Navigate to='/aws/Introduction-to-AWS'/>}/>
          <Route path='/aws/:topic' element={<AWS/>}/>
          <Route path='/gradle' element={<Navigate to='/gradle/Introduction-to-Gradle'/>}/>
          <Route path='/gradle/:topic' element={<Gradle/>}/>
          <Route path='/gitlab' element={<Navigate to='/gitlab/Introduction-to-GitLab'/>}/>
          <Route path='/gitlab/:topic' element={<Gitlab/>}/>
          <Route path='/systemdesign' element={<Navigate to='/systemdesign/Introduction-to-System-Design'/>}/>
          <Route path='/systemdesign/:topic' element={<Systemdesign/>}/>
          <Route path='/android' element={<Navigate to="/android/Introduction-to-Android-Development"/>}/>
          <Route path='/android/:topic' element={<Android/>}/>
          <Route path='/linux' element={<Navigate to='/linux/Introduction-to-Linux'/>}/>
          <Route path='/linux/:topic' element={<Linux/>}/>
          <Route path='/st' element={<Navigate to='/st/Introduction-to-Software-Testing'/>}/>
          <Route path='/st/:topic' element={<St/>}/>
          <Route path='/pm' element={<Navigate to='/pm/Introduction-to-Project-Management'/>}/>
          <Route path='/pm/:topic' element={<Projectmanagement/>}/>
          <Route path='/excel' element={<Navigate to='/excel/Introduction-to-Excel-Interface'/>}/>
          <Route path='/excel/:topic' element={<Excel/>}/>
          <Route path='/productm' element={<Navigate to='/productm/Introduction-to-Product-Management'/>}/>
          <Route path='/productm/:topic' element={<Productmanagement/>}/>
          <Route path="/writeearn" element={<WriteEarn />} />
          <Route path="/aicont" element={<AIContentGeneration />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/join" element={<JoinCommunityPage />} />
          <Route path="/community/create" element={<CreateCommunity />} />
          <Route path="/community/pricing" element={<CommunityPricingPage />} />
          <Route path="/community/aboutus" element={<CommunityAboutUsPage />} />
          <Route path="/course/allcourses" element={<Courses />} />
          <Route path="/course/allcourses/startcourse" element={<CourseDetail />} />
          <Route path="/course/allcourses/course/:id" element={<CourseDescriptionPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/creatordashboard' element={<CreatorDashBoardHome/>}/>
          {/* <Route path='uploadvideo' element={<UploadVideoHome/>}/> */}
          <Route path='/createnewcourse' element={<CreateCourse/>}/>
          <Route path='/knowtube' element={<KnowledgeTubeHome/>}/>
          <Route path='/knowtube/creatorupload' element={<CreatorUploadVedioPage/>}/>
          <Route path='/knowtube/:video' element={<KnowTubeVideo />}/>
        </Routes>
      </Suspense>
       
    </BrowserRouter>
  </>
);
