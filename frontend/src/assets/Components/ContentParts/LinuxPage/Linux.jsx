import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Linux = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   

const linux_topics = [
  "Introduction to Linux",
  "Linux Distributions (Ubuntu, CentOS, Fedora, etc.)",
  "Linux Installation and Setup",
  "Linux File System Structure",
  "Basic Linux Commands",
  "File and Directory Management",
  "User and Group Management",
  "File Permissions and Ownership",
  "Process Management (ps, top, kill)",
  "Package Management (apt, yum, dnf, snap)",
  "Shell and Terminal Basics",
  "Bash Shell Scripting",
  "Environment Variables",
  "Cron Jobs and Scheduling Tasks",
  "Disk Management (df, du, mount, umount, fdisk)",
  "File Compression (tar, gzip, zip, etc.)",
  "Text Editors (vi/vim, nano)",
  "Networking Commands (ifconfig, ip, ping, netstat, ss)",
  "SSH and Remote Access",
  "System Logs and Log Files",
  "System Monitoring Tools",
  "Linux Boot Process",
  "Systemd and Init Systems",
  "Firewall and Security (iptables, ufw, firewalld)",
  "SELinux and AppArmor",
  "Managing Services and Daemons",
  "Linux Kernel Basics",
  "Grub Bootloader",
  "NFS and Samba (File Sharing)",
  "Disk Partitioning and LVM",
  "Backup and Restore",
  "RAID Configuration",
  "Linux for Developers",
  "Linux Performance Tuning",
  "Linux Networking Fundamentals",
  "DNS, DHCP, FTP, and Web Servers",
  "Linux as a Server (Web, Mail, DB Servers)",
  "Using Git and Version Control on Linux",
  "Containers and Docker on Linux",
  "Virtualization (KVM, QEMU, VirtualBox)",
  "Linux System Hardening",
  "Linux in the Cloud (AWS EC2, Azure VM)",
  "Advanced Shell Scripting and Automation",
  "Regular Expressions and Text Processing (grep, sed, awk)",
  "Troubleshooting Linux Issues",
  "Customizing the Linux Environment",
  "Linux Certifications (RHCSA, RHCE, LFCS, etc.)"
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

              {linux_topics.map((topics, index) => (
                <li key={index}><Link to={`/linux/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="linux" tagn={43}/>

          <NextPrevTopic topics={linux_topics} currentTopic={formattedTopic} basePath="/linux"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Linux;
