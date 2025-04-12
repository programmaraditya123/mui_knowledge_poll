import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
//import Carousel from '../../Carousel';
import axios from 'axios';
import  '../Python/Python.css';
//import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Android = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Android Development" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const android_topics = [
  "Introduction to Android Development",
  "Android Architecture Overview",
  "Android Studio Setup",
  "Kotlin for Android",
  "Java for Android",
  "Creating Your First Android App",
  "Activities and Lifecycle",
  "Fragments and Fragment Lifecycle",
  "Intents and Intent Filters",
  "User Interface Design (XML Layouts)",
  "ViewGroups and View Hierarchy",
  "RecyclerView and Adapters",
  "Navigation Components",
  "Menus and Dialogs",
  "Styles, Themes, and Material Design",
  "Custom Views and Canvas",
  "Event Handling and Input",
  "Resources and Asset Management",
  "Data Storage (SharedPreferences, Files)",
  "SQLite and Room Database",
  "LiveData and ViewModel",
  "Data Binding and View Binding",
  "MVVM Architecture",
  "Jetpack Components Overview",
  "Jetpack Compose Basics",
  "Dependency Injection (Dagger, Hilt, Koin)",
  "Networking (Retrofit, OkHttp, Volley)",
  "Parsing JSON and XML",
  "Background Tasks (AsyncTask, Coroutines, WorkManager)",
  "Broadcast Receivers",
  "Services and Foreground Services",
  "Notifications and Push Notifications (FCM)",
  "Permissions Handling",
  "Sensors and Location Services",
  "Google Maps Integration",
  "Media Playback and Camera",
  "Animations and Transitions",
  "Security and Best Practices",
  "Unit Testing and UI Testing (JUnit, Espresso)",
  "Debugging and Profiling Tools",
  "Play Store Publishing Process",
  "App Bundles and APKs",
  "Gradle and Build System",
  "Multilingual Support and Localization",
  "Accessibility in Android Apps",
  "Jetpack Navigation and Safe Args",
  "AndroidX Libraries",
  "Firebase Integration (Auth, Realtime DB, Firestore)",
  "In-App Purchases and Billing",
  "Android App Architecture Patterns",
  "Handling Configuration Changes",
  "Modularization in Android Projects"
]






   

  const navigate = useNavigate();
  const routerchange = (Title,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,tag}});
  }
  const routerchange1 = (Title,Content,tag) => {
    const path = "/writeearn"
    navigate(path,{state:{Title,Content,tag}})
  }
  // http://13.201.93.211/api/home

  const getContent = async () => {
    // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
    try {
      const data = await axios.get(`${BASE_URL}/app/getcont/getandroidcontent`, { params: { title: searchtitle } });
      //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
      setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
    } catch (error) {
      console.log("Error", error)

    }
  }
  useEffect(() => {
    getContent();
  }, [searchtitle])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}><FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {android_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,42)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,42)}>Modify Content</button>
          }

           

          <div className='disp-cont-btns'>
            <button className='btn-12'>Previous Topic Topic Name</button>
            <button className='btn-12'>Next Topic Topic Name</button>
          </div>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Android;
