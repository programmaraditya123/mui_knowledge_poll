import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Kubernetes = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState();
   
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   

const kubernetes_topics = [
  "Introduction to Kubernetes",
  "What is Kubernetes and Why Use It?",
  "Kubernetes Architecture (Master, Nodes, Pods)",
  "Kubernetes Cluster Components",
  "Kubernetes Pods and Pod Lifecycle",
  "Kubernetes Deployments",
  "Kubernetes Services (ClusterIP, NodePort, LoadBalancer, ExternalName)",
  "Kubernetes Namespaces",
  "Kubernetes Labels and Selectors",
  "Kubernetes ReplicaSets",
  "Kubernetes StatefulSets",
  "Kubernetes DaemonSets",
  "Kubernetes Jobs and CronJobs",
  "Kubernetes ConfigMaps and Secrets",
  "Kubernetes Volumes (Persistent Volumes and Claims)",
  "Kubernetes Storage Classes",
  "Kubernetes Network Policies",
  "Kubernetes Ingress Controllers and Resources",
  "Kubernetes DNS",
  "Kubernetes API Server",
  "Kubernetes Scheduler",
  "Kubernetes Controller Manager",
  "Kubernetes Kubelet and Kube Proxy",
  "Kubernetes Node Management",
  "Kubernetes CLI (kubectl)",
  "Kubernetes YAML Files and Configuration",
  "Kubernetes Resource Requests and Limits",
  "Kubernetes Horizontal Pod Autoscaling",
  "Kubernetes Vertical Pod Autoscaling",
  "Kubernetes Cluster Autoscaler",
  "Kubernetes Logging and Monitoring",
  "Kubernetes Metrics Server",
  "Kubernetes Troubleshooting and Debugging",
  "Helm for Kubernetes (Package Manager)",
  "Kubernetes CI/CD with Jenkins and GitLab CI",
  "Kubernetes on Cloud Platforms (AWS, GCP, Azure)",
  "Kubernetes Security Best Practices",
  "RBAC (Role-Based Access Control) in Kubernetes",
  "Service Mesh with Istio in Kubernetes",
  "Kubernetes Federation and Multi-cluster Management",
  "Kubernetes Operators",
  "Kubernetes Networking and CNI (Container Network Interface)",
  "Kubernetes Stateful Applications",
  "Kubernetes with Docker and Containerization",
  "Kubernetes Cluster Setup (Minikube, kubeadm, kops)",
  "Kubernetes and Docker Swarm Comparison",
  "Kubernetes API Aggregation Layer",
  "Kubernetes Admission Controllers",
  "Kubernetes Custom Resources and Controllers",
  "Kubernetes Persistent Storage with AWS EBS, GCP PD",
  "Kubernetes Backup and Disaster Recovery",
  "Kubernetes High Availability (HA) Setup",
  "Kubernetes Scheduler Policies",
  "Kubernetes Cloud-native Applications",
  "Kubernetes with Microservices Architecture",
  "Kubernetes and Serverless",
  "Kubernetes Network Troubleshooting",
  "Kubernetes Performance Tuning",
  "Kubernetes Resource Management (Quota, LimitRange)",
  "Kubernetes for Developers and Operations (DevOps)",
  "Preparing for Kubernetes Certifications (CKA, CKAD, CKS)"
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

              {kubernetes_topics.map((topics, index) => (
                <li key={index}><Link to={`/kubernetes/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="kubernetes" tagn={36}/>

        <NextPrevTopic topics={kubernetes_topics} currentTopic={formattedTopic} basePath="/kubernetes"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Kubernetes;
