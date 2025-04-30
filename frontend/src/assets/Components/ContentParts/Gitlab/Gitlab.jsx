import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
 
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Gitlab = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const gitlab_topics = [
  "Introduction to GitLab",
  "GitLab vs GitHub vs Bitbucket",
  "Installing and Setting Up GitLab",
  "Understanding GitLab Interface",
  "Creating and Managing Repositories",
  "Git Basics (Clone, Commit, Push, Pull, Merge)",
  "Branches and Merge Requests (MRs)",
  "Issue Tracking and Boards",
  "Labels, Milestones, and Epics",
  "Wiki and Project Documentation",
  "GitLab CI CD Basics",
  "GitLab Runners",
  "Writing `.gitlab-ci.yml` File",
  "CI CD Pipelines and Stages",
  "Build, Test, and Deploy Jobs",
  "Artifacts and Caching in Pipelines",
  "Manual Jobs and Environment Triggers",
  "Environments and Deployments",
  "Auto DevOps",
  "Docker Integration with GitLab",
  "Kubernetes Integration",
  "GitLab Pages for Static Site Hosting",
  "Security and Compliance Features",
  "Code Quality and SAST DAST Tools",
  "License Compliance and Container Scanning",
  "Secrets Management and CI CD Variables",
  "GitLab Webhooks and API",
  "Protected Branches and Tags",
  "User Roles and Permissions",
  "Forking and Code Review",
  "Project and Group Settings",
  "Self-Hosted GitLab Administration",
  "Backup and Restore in GitLab",
  "Monitoring and Logging",
  "Audit Logs and Activity Tracking",
  "Integrations with Slack, Jira, and Others",
  "GitLab CLI and Extensions",
  "Best Practices for GitLab Projects",
  "Using GitLab for Agile Project Management",
  "GitLab Flow vs Git Flow",
  "Troubleshooting and Common Issues"
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

              {gitlab_topics.map((topics, index) => (
                <li key={index}><Link to={`/gitlab/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="gitlab" tagn={40}/>

        <NextPrevTopic topics={gitlab_topics} currentTopic={formattedTopic} basePath="/gitlab"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Gitlab;
