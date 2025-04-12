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



const DockerPage = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Docker" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const docker_topics = [
  "Introduction to Docker",
  "What is Docker and Why Use It?",
  "Docker Architecture (Docker Engine, Docker Daemon, Docker CLI)",
  "Docker Images and Containers",
  "Creating Docker Images (Dockerfile Basics)",
  "Building Docker Images with `docker build`",
  "Docker Hub and Private Registries",
  "Running Containers with `docker run`",
  "Docker Container Lifecycle (Start, Stop, Restart, Remove)",
  "Docker Volumes for Persistent Storage",
  "Docker Networks (Bridge, Host, Overlay)",
  "Docker Compose for Multi-Container Applications",
  "Docker Compose YAML Configuration",
  "Docker Compose Commands",
  "Docker Networking (Bridge, Host, Custom Networks)",
  "Docker Swarm (Swarm Mode)",
  "Docker Swarm Services and Stacks",
  "Docker Service Discovery and Load Balancing",
  "Scaling Applications in Docker Swarm",
  "Docker Stack Deploy",
  "Docker Registry (Public vs Private)",
  "Docker Container Logs and Monitoring",
  "Docker Security Best Practices",
  "Managing Docker Containers with `docker ps`, `docker exec`",
  "Dockerfile Best Practices (Multi-stage Builds, Caching)",
  "Docker Image Layers and Caching",
  "Docker Container Orchestration vs Kubernetes",
  "Docker CLI vs Docker Desktop",
  "Working with Docker Volumes and Bind Mounts",
  "Docker Health Checks",
  "Docker Compose vs Kubernetes",
  "Docker Swarm vs Kubernetes",
  "Docker and Continuous Integration/Delivery",
  "Docker and DevOps Workflows",
  "Docker and Kubernetes Integration",
  "Docker for Microservices",
  "Docker Desktop for Windows and Mac",
  "Docker Machine (Creating Docker Hosts)",
  "Docker in the Cloud (AWS, Azure, GCP)",
  "Docker and AWS ECS (Elastic Container Service)",
  "Docker and Kubernetes for Orchestration",
  "Docker Secrets and Configs",
  "Docker CI/CD with Jenkins and GitLab",
  "Docker for Local Development Environments",
  "Docker and Serverless Architectures",
  "Docker Registry Authentication",
  "Docker Container Performance Optimization",
  "Docker Security Scanning with Clair or Trivy",
  "Docker Multi-Stage Builds",
  "Docker and Continuous Deployment",
  "Docker with Cloud Platforms (AWS ECR, GCP Container Registry)",
  "Docker and Serverless Functions",
  "Docker Container Troubleshooting and Debugging",
  "Docker Compose with Multiple Environments (Dev, Prod)",
  "Docker with Monitoring and Logging Tools (Prometheus, ELK)",
  "Docker Networking Advanced Concepts (Overlay, macvlan)",
  "Docker Best Practices for Production Environments",
  "Docker on CI/CD Pipelines (Jenkins, GitLab, Travis CI)",
  "Creating and Using Docker Images from Dockerfile",
  "Docker Image Optimization",
  "Docker and Kubernetes Best Practices"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getdockercontent`, { params: { title: searchtitle } });
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

              {docker_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,35)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,35)}>Modify Content</button>
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

export default DockerPage;
