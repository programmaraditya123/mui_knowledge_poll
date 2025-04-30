import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Postgre = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

const postgresql_topics = [
  "Introduction to PostgreSQL",
  "What is PostgreSQL and Why Use It?",
  "Installing and Setting Up PostgreSQL",
  "PostgreSQL Architecture (Client-Server Model)",
  "PostgreSQL Data Types",
  "Basic SQL Queries in PostgreSQL (SELECT, INSERT, UPDATE, DELETE)",
  "WHERE Clause and Filtering Data",
  "Sorting and Ordering Results (ORDER BY)",
  "JOINs in PostgreSQL (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN)",
  "GROUP BY and Aggregate Functions (COUNT, AVG, SUM, MAX, MIN)",
  "HAVING Clause",
  "Subqueries and Nested Queries",
  "PostgreSQL Indexing (B-tree, GiST, GIN)",
  "Creating and Managing Tables",
  "Primary Keys and Foreign Keys",
  "Unique Constraints and Not Null Constraints",
  "Data Integrity and Referential Integrity",
  "Normalization and Denormalization",
  "PostgreSQL Views",
  "Materialized Views",
  "PostgreSQL Functions and Stored Procedures",
  "User-Defined Functions (UDFs)",
  "Triggers in PostgreSQL",
  "PostgreSQL Transactions and ACID Properties",
  "PostgreSQL Locking Mechanisms",
  "Concurrency Control in PostgreSQL",
  "PostgreSQL Error Handling and Exception Handling",
  "PostgreSQL Data Modifying Statements (MERGE, INSERT ON CONFLICT)",
  "PostgreSQL Backup and Restore (pg_dump, pg_restore)",
  "PostgreSQL Table Partitioning",
  "PostgreSQL Schemas and Namespaces",
  "PostgreSQL Roles and Permissions",
  "PostgreSQL Security Best Practices",
  "PostgreSQL Foreign Data Wrappers (FDW)",
  "PostgreSQL JSON and JSONB Data Types",
  "Working with Arrays in PostgreSQL",
  "PostgreSQL Full-Text Search",
  "PostgreSQL Custom Data Types",
  "PostgreSQL Query Optimization and Indexing",
  "EXPLAIN and Query Execution Plans",
  "PostgreSQL Performance Tuning",
  "Vacuuming and Analyzing Tables",
  "PostgreSQL Autovacuum",
  "PostgreSQL Replication (Master-Slave, Streaming Replication)",
  "PostgreSQL High Availability and Failover",
  "PostgreSQL Clustering",
  "PostgreSQL Sharding",
  "PostgreSQL Logging and Monitoring",
  "PostgreSQL Partitioned Tables",
  "PostgreSQL Event Triggers",
  "PostgreSQL JSON Functions and Operators",
  "PostgreSQL Common Table Expressions (CTEs)",
  "PostgreSQL Window Functions",
  "PostgreSQL Backup and PITR (Point-in-Time Recovery)",
  "PostgreSQL Security Features (SSL, Encryption)",
  "PostgreSQL Extension (PostGIS, pg_stat_statements, etc.)",
  "PostgreSQL with Python (psycopg2, SQLAlchemy)",
  "PostgreSQL with Java (JDBC)",
  "PostgreSQL with Node.js",
  "PostgreSQL in Cloud Platforms (AWS RDS, GCP Cloud SQL)",
  "PostgreSQL Data Migration",
  "PostgreSQL and Docker Integration",
  "PostgreSQL and Kubernetes",
  "PostgreSQL Performance Monitoring and Tuning",
  "PostgreSQL Index Optimization (Partial Indexes, Multicolumn Indexes)",
  "PostgreSQL Full-Text Search Optimization",
  "PostgreSQL Partitioning Strategies (Range, List, Hash)",
  "PostgreSQL Backup and Disaster Recovery Planning",
  "PostgreSQL Query Optimization Best Practices",
  "PostgreSQL with Microservices Architecture",
  "PostgreSQL with OLTP and OLAP Workloads",
  "PostgreSQL Advanced Query Techniques (Recursive Queries, Aggregations)",
  "PostgreSQL Certification Preparation"
]


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

              {postgresql_topics.map((topics, index) => (
                <li key={index}><Link to={`/postgre/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="postgre" tagn={34}/>

        <NextPrevTopic topics={postgresql_topics} currentTopic={formattedTopic} basePath="/postgre"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Postgre;
