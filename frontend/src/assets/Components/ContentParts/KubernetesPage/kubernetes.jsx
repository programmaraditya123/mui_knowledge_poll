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



const Kubernetes = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ?  "Introduction to Kubernetes" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

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
      const data = await axios.get(`${BASE_URL}/app/getcont/getkubernetescontent`, { params: { title: searchtitle } });
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

              {kubernetes_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,36)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,36)}>Modify Content</button>
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

export default Kubernetes;
