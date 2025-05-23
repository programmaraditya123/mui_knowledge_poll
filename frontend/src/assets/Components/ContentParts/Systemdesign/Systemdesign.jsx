import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Systemdesign = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ?  "Introduction to System Design" : title);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const system_design_topics = [
  "Introduction to System Design",
  "Types of System Design (High-Level vs Low-Level)",
  "Monolithic vs Microservices Architecture",
  "Client-Server Architecture",
  "Load Balancing",
  "Caching Strategies",
  "Database Design and Modeling",
  "SQL vs NoSQL Databases",
  "Sharding and Partitioning",
  "Indexing and Query Optimization",
  "CAP Theorem",
  "Consistency, Availability, Partition Tolerance",
  "Replication (Master-Slave, Master-Master)",
  "Data Redundancy and Backups",
  "Message Queues and Pub/Sub Systems",
  "Asynchronous Processing",
  "Rate Limiting and Throttling",
  "Content Delivery Network (CDN)",
  "Designing Scalable Systems",
  "Horizontal vs Vertical Scaling",
  "Stateless vs Stateful Services",
  "RESTful APIs and API Gateway",
  "Authentication and Authorization (OAuth, JWT)",
  "Security in System Design (SSL, Encryption, CSRF, XSS)",
  "Logging and Monitoring",
  "Metrics and Observability",
  "Service Discovery",
  "Circuit Breakers and Failover Mechanisms",
  "Designing for High Availability",
  "Designing for Fault Tolerance",
  "Event-Driven Architecture",
  "Distributed Systems Concepts",
  "Consensus Algorithms (Raft, Paxos)",
  "Distributed Transactions and Sagas",
  "Data Lake vs Data Warehouse",
  "Design Patterns in System Design",
  "Designing Notification Systems",
  "Designing News Feed Systems",
  "Designing URL Shorteners",
  "Designing File Storage Systems (e.g., Dropbox)",
  "Designing Video Streaming Systems (e.g., YouTube)",
  "Designing Messaging Systems (e.g., WhatsApp, Slack)",
  "Designing Search Systems (e.g., Google Search)",
  "Designing E-commerce Systems",
  "Designing Social Media Platforms",
  "Designing Ride Sharing Platforms",
  "Designing Real-Time Systems",
  "Containerization (Docker, Kubernetes)",
  "CI/CD and Deployment Pipelines",
  "API Rate Limiting and Pagination",
  "Schema Design and Data Migration",
  "Case Studies and Interview Scenarios"
]



  // const navigate = useNavigate();
  // const routerchange = (Title,tag) => {
  //   const path = "/writeearn"
  //   navigate(path,{state:{Title,tag}});
  // }
  // const routerchange1 = (Title,Content,tag) => {
  //   const path = "/writeearn"
  //   navigate(path,{state:{Title,Content,tag}})
  // }
  // // http://13.201.93.211/api/home

  // const getContent = async () => {
  //   // console.log("Fetching from",`${BASE_URL}/app/getcont/content`)
  //   try {
  //     const data = await axios.get(`${BASE_URL}/app/getcont/getsystemdesigncontent`, { params: { title: searchtitle } });
  //     //const data = await axios.get(`https://knowledgepoll.site/api/app/getcont/content`, { params: { title: searchtitle } });
  //     setCont(data.data[0]?.content || `${searchtitle} contetnt not available`);
  //   } catch (error) {
  //     console.log("Error", error)

  //   }
  // }
  // useEffect(() => {
  //   getContent();
  // }, [searchtitle])

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

              {system_design_topics.map((topics, index) => (
                <li key={index}><Link to={`/systemdesign/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="systemdesign" tagn={41}/>

        <NextPrevTopic topics={system_design_topics} currentTopic={formattedTopic} basePath="/systemdesign"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Systemdesign;
