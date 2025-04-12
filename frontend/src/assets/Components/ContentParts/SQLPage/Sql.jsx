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



const Sql = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to SQL" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const sql_topics = [
  "Introduction to SQL",
  "What is SQL and Why Use It?",
  "SQL Syntax and Structure",
  "SQL Data Types (INT, VARCHAR, DATE, etc.)",
  "Basic SQL Queries (SELECT, INSERT, UPDATE, DELETE)",
  "Filtering Data in SQL (WHERE Clause, LIKE, IN, BETWEEN)",
  "Sorting and Ordering Results (ORDER BY)",
  "Using LIMIT and OFFSET in SQL",
  "Aggregate Functions in SQL (COUNT, SUM, AVG, MIN, MAX)",
  "GROUP BY and HAVING Clauses",
  "SQL JOIN Operations (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN)",
  "Subqueries and Nested Queries",
  "Union and Union All",
  "SQL CASE Expression",
  "SQL Aliases (Table and Column Aliases)",
  "SQL Constraints (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK)",
  "Creating and Altering Tables in SQL",
  "SQL Indexes (Single-Column, Multi-Column, Unique Index)",
  "SQL Views",
  "SQL Triggers",
  "SQL Stored Procedures and Functions",
  "Transactions in SQL (COMMIT, ROLLBACK, SAVEPOINT)",
  "SQL Data Integrity and Referential Integrity",
  "SQL Normalization and Denormalization",
  "SQL Data Types (CHAR, TEXT, ENUM, JSON)",
  "SQL Window Functions",
  "SQL Subqueries vs Joins",
  "SQL Data Modifying Statements (MERGE, INSERT ON DUPLICATE KEY UPDATE)",
  "SQL Performance Optimization (Indexes, Query Tuning)",
  "EXPLAIN and Query Execution Plans",
  "SQL Query Optimization Best Practices",
  "SQL Security (User Roles, Permissions, Privileges)",
  "SQL Data Backup and Restore (Export, Import)",
  "SQL Security and Encryption",
  "SQL Full-Text Search",
  "SQL String Functions (CONCAT, LENGTH, TRIM, REPLACE)",
  "SQL Date and Time Functions (NOW, DATE, EXTRACT, DATE_ADD)",
  "SQL Aggregate Functions (GROUP_CONCAT, STRING_AGG)",
  "SQL Sorting and Pagination",
  "SQL Set Operations (INTERSECT, EXCEPT)",
  "SQL Common Table Expressions (CTEs)",
  "SQL Temporary Tables",
  "SQL Query Profiling and Debugging",
  "SQL Advanced Joins (SELF JOIN, CROSS JOIN)",
  "SQL Data Aggregation Techniques",
  "SQL Foreign Keys and Referential Integrity Constraints",
  "SQL Data Migration and ETL",
  "SQL Batch Processing and Transactions",
  "SQL Performance Monitoring and Profiling",
  "SQL Advanced Indexing Techniques (Full-text, Bitmap, Hash)",
  "SQL Partitioning",
  "SQL Sharding",
  "SQL with NoSQL Databases",
  "SQL and ACID Transactions",
  "SQL for OLTP and OLAP",
  "SQL for Data Warehousing",
  "SQL and Cloud Databases",
  "SQL and Data Warehouses (Star Schema, Snowflake Schema)",
  "SQL and Data Lake Integration",
  "SQL for Real-Time Analytics",
  "SQL for Big Data",
  "SQL in Cloud Databases (AWS RDS, GCP Cloud SQL, Azure SQL Database)",
  "SQL Automation and Scheduling",
  "SQL Integration with Programming Languages (Python, Java, Node.js)",
  "SQL and Reporting (Business Intelligence Tools)",
  "SQL in DevOps Pipelines",
  "SQL Optimization for Large Datasets",
  "SQL and API Integrations",
  "SQL for Microservices",
  "SQL and Data Consistency (Eventual Consistency)",
  "SQL and CAP Theorem (Consistency, Availability, Partition Tolerance)",
  "SQL Backup and Disaster Recovery",
  "SQL Security Best Practices",
  "SQL with Graph Databases (GraphQL, Cypher)",
  "SQL Certification Preparation (SQL Developer, DBA)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getsqlcontent`, { params: { title: searchtitle } });
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

              {sql_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,31)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,31)}>Modify Content</button>
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

export default Sql;
