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



const Mysql = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to MySQL" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const mysql_topics = [
  "Introduction to MySQL",
  "What is MySQL and Why Use It?",
  "Installing MySQL (Local and Cloud Setup)",
  "MySQL Architecture (Client-Server Model)",
  "MySQL Data Types (INT, VARCHAR, DATE, etc.)",
  "Basic SQL Queries in MySQL (SELECT, INSERT, UPDATE, DELETE)",
  "Filtering Data in MySQL (WHERE Clause, LIKE, IN, BETWEEN)",
  "Sorting and Ordering Results (ORDER BY)",
  "Using LIMIT and OFFSET",
  "Aggregate Functions in MySQL (COUNT, SUM, AVG, MIN, MAX)",
  "GROUP BY and HAVING Clauses",
  "JOIN Operations in MySQL (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN)",
  "Subqueries and Nested Queries",
  "MySQL Indexing (Primary Key, Unique Index, Full-text Index)",
  "Creating and Managing Tables in MySQL",
  "MySQL Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)",
  "Normalization and Denormalization in MySQL",
  "MySQL Views",
  "MySQL Stored Procedures and Functions",
  "Triggers in MySQL",
  "Transactions in MySQL (COMMIT, ROLLBACK, SAVEPOINT)",
  "MySQL Foreign Keys and Referential Integrity",
  "MySQL Locking Mechanisms (Row-Level, Table-Level)",
  "MySQL Transactions and Isolation Levels",
  "MySQL Security Best Practices",
  "User Management and Permissions in MySQL",
  "Working with MySQL Backups (mysqldump, MySQL Workbench)",
  "MySQL Backup and Restore (Point-in-Time Recovery)",
  "MySQL Performance Optimization",
  "Query Execution Plans and EXPLAIN",
  "MySQL Query Caching",
  "MySQL Optimizing Joins",
  "Optimizing MySQL Indexes",
  "MySQL Query Optimization Best Practices",
  "MySQL Full-Text Search",
  "MySQL Partitioning",
  "Replication in MySQL (Master-Slave, Master-Master)",
  "MySQL Clustering",
  "MySQL High Availability and Failover",
  "MySQL Sharding",
  "MySQL with Cloud Platforms (AWS RDS, GCP Cloud SQL)",
  "Using MySQL with Docker",
  "MySQL Cluster and NDB",
  "MySQL Error Handling and Exception Handling",
  "MySQL Stored Procedures and Triggers Debugging",
  "MySQL Event Scheduler",
  "MySQL Data Import and Export (CSV, JSON)",
  "MySQL Foreign Data Wrappers (FDW)",
  "MySQL User-Defined Functions (UDFs)",
  "MySQL JSON Data Type and Functions",
  "MySQL Spatial Data and GIS Functions",
  "MySQL with Python (MySQL Connector, SQLAlchemy)",
  "MySQL with Node.js (MySQL Node.js Module)",
  "MySQL with Java (JDBC)",
  "MySQL in Microservices Architecture",
  "MySQL and Docker Containers",
  "MySQL in Continuous Integration/Continuous Deployment (CI/CD)",
  "MySQL Performance Monitoring and Tuning",
  "MySQL Security and Encryption",
  "MySQL Query Profiling and Debugging",
  "MySQL Data Consistency and ACID Properties",
  "MySQL with Data Warehousing",
  "MySQL Partitioning and Table Sharding",
  "MySQL Certification Preparation (MySQL DBA, Developer)",
  "MySQL for Big Data and Analytics",
  "MySQL with Kubernetes",
  "MySQL Replication and Data Synchronization",
  "MySQL with API and Web Services",
  "MySQL for Cloud-native Applications",
  "Best Practices for MySQL Database Design",
  "MySQL Data Model for OLTP and OLAP Workloads",
  "Managing MySQL Configurations and Variables",
  "MySQL Data Migration Strategies",
  "MySQL Cluster Configuration and Tuning",
  "MySQL Performance Bottlenecks and Troubleshooting",
  "MySQL Data Modeling and Schema Design Patterns"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getmysqlcontent`, { params: { title: searchtitle } });
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

              {mysql_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,32)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,32)}>Modify Content</button>
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

export default Mysql;
