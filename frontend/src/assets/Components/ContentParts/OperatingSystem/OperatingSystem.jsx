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



const OperatingSystem = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ?  "Introduction to Operating Systems" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const operating_system_topics = [
  "Introduction to Operating Systems",
  "What is an Operating System?",
  "Operating System Functions (Process Management, Memory Management, File System Management)",
  "Types of Operating Systems (Batch, Time-Sharing, Real-Time, Distributed)",
  "Operating System Architecture",
  "Kernel and User Space",
  "System Calls and API",
  "Operating System Services",
  "Boot Process and Bootloaders",
  "Process Management",
  "Processes and Threads",
  "Process States (New, Ready, Running, Waiting, Terminated)",
  "Process Control Block (PCB)",
  "Context Switching",
  "Scheduling Algorithms (FCFS, SJF, Round Robin, Priority Scheduling)",
  "Inter-Process Communication (IPC)",
  "Pipes, Message Queues, Shared Memory",
  "Synchronization and Mutexes",
  "Deadlock and Deadlock Prevention, Avoidance, Detection",
  "Memory Management",
  "Memory Hierarchy (Registers, Cache, RAM, Disk Storage)",
  "Virtual Memory and Paging",
  "Segmentation",
  "Page Replacement Algorithms (FIFO, LRU, Optimal)",
  "Memory Allocation (Contiguous, Paging, Segmentation)",
  "Memory Protection and Fragmentation",
  "File Systems",
  "File System Structure and Types (FAT, NTFS, ext4)",
  "File Operations (Create, Delete, Open, Close)",
  "File Allocation Methods (Contiguous, Linked, Indexed)",
  "Directory Structure",
  "File Permissions and Access Control",
  "Disk Scheduling Algorithms (FCFS, SSTF, SCAN)",
  "Storage Management (RAID, Disk Arrays)",
  "I/O Management",
  "Device Drivers and I/O Controllers",
  "Interrupts and Interrupt Handling",
  "Operating System Security",
  "User Authentication and Authorization",
  "Access Control and File Permissions",
  "Encryption and Decryption",
  "Operating System Protection Mechanisms",
  "Operating System Virtualization",
  "Virtual Machines and Hypervisors",
  "Containers and Docker",
  "Multitasking and Multi-Threading",
  "Concurrency and Race Conditions",
  "Critical Section Problem and Solution",
  "File System Mounting and Unmounting",
  "Networking in Operating Systems",
  "Socket Programming",
  "TCP/IP Stack and Networking Protocols",
  "Network File System (NFS)",
  "Distributed Systems and Distributed File Systems",
  "Real-Time Operating Systems (RTOS)",
  "Kernel Space vs User Space",
  "System Programming and Shell Scripting",
  "Process Synchronization Mechanisms",
  "Semaphore and Monitor",
  "Operating System for Embedded Systems",
  "Performance Optimization in Operating Systems",
  "Operating System Debugging and Profiling",
  "Operating System Security (Buffer Overflow, Access Control Lists)",
  "Operating System Resource Allocation",
  "Load Balancing and Process Scheduling",
  "Operating System APIs (POSIX, Windows API)",
  "Power Management in Operating Systems",
  "Cloud Computing and Operating Systems",
  "Operating Systems for Mobile Devices (Android, iOS)",
  "File System Mounting (Network Drives, Remote File Systems)",
  "Operating System Concepts (Linux, Windows, macOS)",
  "OS in Virtualization (VMware, Hyper-V)",
  "Linux/Unix Operating Systems and Shell",
  "System Calls in Linux and Unix",
  "Process Scheduling in Linux",
  "Linux File Systems (ext3, ext4, Btrfs)",
  "Linux Kernel and Modules",
  "User and Group Management in Linux",
  "Linux Permissions and Access Control",
  "Linux Network Configuration and Management",
  "Linux System Monitoring Tools (top, ps, vmstat)",
  "Windows Operating System Architecture",
  "Windows Process Management",
  "Windows File Systems (NTFS, ReFS)",
  "Windows Kernel and Drivers",
  "Windows Security Features (Active Directory, Group Policy)",
  "macOS Operating System Architecture",
  "macOS File Systems (HFS+, APFS)",
  "Operating System Performance Tuning and Optimization",
  "Operating System in Cloud Environments (AWS EC2, Azure Virtual Machines)",
  "Operating System with Kubernetes and Docker",
  "Operating Systems and Microservices Architecture",
  "Security Patches and OS Updates",
  "System Resource Management and Scheduling",
  "Operating System Certification Preparation (Linux, Windows Server, etc.)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getoscontent`, { params: { title: searchtitle } });
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

              {operating_system_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,23)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,23)}>Modify Content</button>
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

export default OperatingSystem;
