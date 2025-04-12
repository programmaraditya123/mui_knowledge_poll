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



const Mongodb = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to MongoDB" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const mongodb_topics = [
  "Introduction to MongoDB",
  "What is MongoDB and Why Use It?",
  "Installing MongoDB (Local and Cloud Setup)",
  "MongoDB Architecture (Replica Sets, Sharding)",
  "MongoDB Data Model (Collections, Documents)",
  "MongoDB BSON Format",
  "Basic MongoDB Operations (CRUD: Create, Read, Update, Delete)",
  "MongoDB Query Language (MQL)",
  "Working with MongoDB Shell",
  "Filtering Data in MongoDB (Find, Operators)",
  "Projection in MongoDB",
  "Sorting and Limiting Results",
  "MongoDB Aggregation Framework",
  "MongoDB Aggregation Pipelines",
  "Grouping and Aggregation Operators",
  "MongoDB Indexing (Single Field, Compound Indexes)",
  "Geospatial Indexing and Queries",
  "Text Indexing and Full-Text Search",
  "Creating and Managing MongoDB Indexes",
  "MongoDB Relationships and Embedding Documents",
  "Referencing Data in MongoDB (Normalization vs Embedding)",
  "MongoDB Schema Design Best Practices",
  "MongoDB Validation Rules",
  "MongoDB Transactions",
  "MongoDB Replication",
  "MongoDB Sharding",
  "Working with MongoDB Atlas (Cloud Database)",
  "MongoDB Backup and Restore (mongodump, mongorestore)",
  "MongoDB Authentication and Authorization",
  "MongoDB Security Best Practices",
  "MongoDB Monitoring and Performance Tuning",
  "MongoDB Performance Optimization (Indexes, Caching)",
  "MongoDB Data Modeling and Schema Design Patterns",
  "Data Aggregation and MapReduce in MongoDB",
  "MongoDB Data Import and Export (JSON, CSV)",
  "MongoDB GridFS for Storing Large Files",
  "MongoDB with Docker",
  "MongoDB with Kubernetes",
  "Using MongoDB with Node.js (Mongoose)",
  "Using MongoDB with Python (PyMongo)",
  "Using MongoDB with Java (MongoDB Java Driver)",
  "MongoDB with JavaScript and Express",
  "Integrating MongoDB with GraphQL",
  "MongoDB for Real-time Applications",
  "MongoDB in Microservices Architecture",
  "MongoDB and Full-Text Search",
  "Replication Strategies in MongoDB",
  "MongoDB Failover and High Availability",
  "Sharding Strategies in MongoDB",
  "MongoDB with Cloud Platforms (AWS, Azure, GCP)",
  "MongoDB Atlas Data Federation",
  "Working with MongoDB in a Serverless Environment",
  "MongoDB Data Migration and ETL",
  "MongoDB with Kafka for Event Streaming",
  "MongoDB and Data Consistency (Eventual Consistency)",
  "MongoDB Data Access Patterns",
  "MongoDB Change Streams",
  "MongoDB Backup and Disaster Recovery",
  "MongoDB Change Streams and Real-time Data Processing",
  "MongoDB Performance Monitoring with MongoDB Atlas",
  "MongoDB Versioning and Upgrades",
  "MongoDB for Big Data Applications",
  "MongoDB for Analytics and Data Warehousing",
  "MongoDB for IoT and Edge Computing",
  "MongoDB and Data Encryption",
  "MongoDB Certification Preparation (MongoDB DBA, Developer)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getmongodbcontent`, { params: { title: searchtitle } });
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

              {mongodb_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,33)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,33)}>Modify Content</button>
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

export default Mongodb;
