import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Dbms = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const dbms_topics = [
  "Introduction to DBMS",
  "Database vs File System",
  "Advantages of DBMS",
  "DBMS Architecture (1-tier, 2-tier, 3-tier)",
  "Database Models (Hierarchical, Network, Relational, Object-Oriented)",
  "Relational Model and Terminology",
  "Schema and Instance",
  "Keys in DBMS (Primary, Candidate, Foreign, Composite, Super Key)",
  "Entity-Relationship Model (ER Model)",
  "ER Diagrams (Entities, Attributes, Relationships, Cardinality)",
  "Enhanced ER Model (Generalization, Specialization, Aggregation)",
  "Relational Algebra",
  "Relational Calculus (Tuple and Domain)",
  "Set Operations in DBMS",
  "SQL - Structured Query Language",
  "DDL, DML, DCL, TCL Commands",
  "SQL Joins (INNER, LEFT, RIGHT, FULL, SELF)",
  "Normalization (1NF, 2NF, 3NF, BCNF, 4NF, 5NF)",
  "Denormalization",
  "Functional Dependencies",
  "Multivalued and Join Dependencies",
  "Transaction Management",
  "ACID Properties (Atomicity, Consistency, Isolation, Durability)",
  "Transaction States",
  "Concurrency Control",
  "Lock-Based Protocols (Binary Locks, Shared/Exclusive Locks)",
  "Timestamp-Based Protocols",
  "Deadlock Handling (Detection, Prevention, Avoidance)",
  "Database Recovery Techniques",
  "Log-Based Recovery",
  "Shadow Paging",
  "Database Indexing (Single-level, Multi-level, B-Tree, B+ Tree)",
  "Hashing Techniques",
  "Storage and File Organization",
  "Heap, Sequential, Hashed File Organization",
  "Buffer Management",
  "Data Integrity and Constraints",
  "Check, Unique, Not Null, Default Constraints",
  "Triggers and Stored Procedures",
  "Views in DBMS",
  "Materialized Views",
  "Query Processing and Optimization",
  "Evaluation Plans and Query Cost Estimation",
  "Join Ordering and Optimization",
  "Distributed Databases",
  "Types of Fragmentation",
  "Replication and Consistency Models",
  "CAP Theorem",
  "NoSQL vs RDBMS",
  "Column-Oriented, Document-Oriented, Graph-Based NoSQL Models",
  "Object-Oriented DBMS (OODBMS)",
  "Temporal and Spatial Databases",
  "Big Data and DBMS",
  "Data Warehousing and OLAP",
  "Data Mining Basics",
  "Database Security and Authorization",
  "Encryption and Authentication in DBMS",
  "Backup and Recovery Techniques",
  "Cloud Databases (AWS RDS, Firebase, Azure SQL)",
  "Database Tuning and Performance Optimization",
  "In-Memory Databases",
  "Parallel Databases",
  "NewSQL Databases",
  "Data Dictionary and Metadata",
  "ER to Relational Mapping",
  "Case Studies (Bank, Library, University DBMS)"
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

              {dbms_topics.map((topics, index) => (
                <li key={index}><Link to={`/dbms/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="dbms" tagn={25}/>

        <NextPrevTopic topics={dbms_topics} currentTopic={formattedTopic} basePath="/dbms"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Dbms;
