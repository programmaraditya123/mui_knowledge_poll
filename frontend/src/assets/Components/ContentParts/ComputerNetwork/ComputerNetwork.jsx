import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';

import { useNavigate , useLocation , useParams , Link } from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const ComputerNetwork = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' ')) 
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
 
   
   

const computer_network_topics = [
  "Introduction to Computer Networks",
  "What is a Computer Network?",
  "Types of Networks (LAN, WAN, MAN, PAN)",
  "Network Topologies (Bus, Star, Ring, Mesh, Hybrid)",
  "Network Devices (Router, Switch, Hub, Bridge, Gateway)",
  "OSI Model (Layers 1 to 7)",
  "TCP IP Model (Layers 1 to 4)",
  "IP Addressing and Subnetting",
  "IPv4 Addressing (Class A, B, C, D, E)",
  "Subnet Masks and CIDR",
  "IP Address Classes (Private and Public IPs)",
  "IPv6 Addressing",
  "Network Protocols (TCP, UDP, ICMP)",
  "Routing and Switching",
  "Router Functionality and Configuration",
  "Switching Concepts and VLANs",
  "Ethernet and MAC Addressing",
  "ARP (Address Resolution Protocol)",
  "Network Communication Models (Connection-Oriented, Connectionless)",
  "TCP Protocol (Flow Control, Error Detection)",
  "UDP Protocol (Unreliable Communication)",
  "DNS (Domain Name System)",
  "DHCP (Dynamic Host Configuration Protocol)",
  "TCP Handshake and Termination",
  "Window Size and Flow Control",
  "Congestion Control Algorithms (TCP Reno, Tahoe)",
  "ICMP Protocol (Ping, Traceroute)",
  "Socket Programming (TCP/UDP Sockets)",
  "IP Routing and Forwarding",
  "Static vs Dynamic Routing",
  "Routing Algorithms (Distance Vector, Link-State, Path-Vector)",
  "OSPF (Open Shortest Path First)",
  "BGP (Border Gateway Protocol)",
  "NAT (Network Address Translation)",
  "PAT (Port Address Translation)",
  "NAT Types and Implementation",
  "VPN (Virtual Private Network)",
  "Firewall Concepts and Types",
  "Network Addressing and Subnetting Calculations",
  "Data Link Layer Protocols (Ethernet, Wi-Fi)",
  "Wireless Networks (Wi-Fi, Bluetooth)",
  "Network Security",
  "Network Encryption (SSL/TLS, IPSec)",
  "Secure Network Protocols (SSH, HTTPS, SFTP)",
  "Intrusion Detection and Prevention Systems (IDS/IPS)",
  "Access Control Lists (ACLs)",
  "Public Key Infrastructure (PKI)",
  "Cryptographic Algorithms (Symmetric, Asymmetric)",
  "Authentication Protocols (RADIUS, TACACS+)",
  "Network Monitoring and Management (SNMP, NetFlow)",
  "Bandwidth Management and QoS (Quality of Service)",
  "Load Balancing and Redundancy",
  "Network Topology Design and Planning",
  "Routing Protocols (RIP, OSPF, EIGRP)",
  "Link-State vs Distance-Vector Routing",
  "Software-Defined Networking (SDN)",
  "Network Virtualization (VXLAN, VLAN)",
  "Cloud Networking and Cloud Services (AWS VPC, Azure VNet)",
  "Internet of Things (IoT) and Networking",
  "Network Troubleshooting Tools (Ping, Traceroute, Netstat, Nslookup)",
  "Packet Analysis and Wireshark",
  "Network Performance Tuning",
  "Network Traffic Analysis and Optimization",
  "IP Multicast",
  "Network Layer Security",
  "Wireless Network Security (WEP, WPA, WPA2)",
  "Network Redundancy and Failover",
  "Carrier-Grade NAT and IPv6 Transition",
  "QoS and Traffic Shaping",
  "Network Access Control (NAC)",
  "VLAN Configuration and Inter-VLAN Routing",
  "IEEE 802 Standards (Ethernet, Wi-Fi, Bluetooth)",
  "Mobile Networks (4G, 5G)",
  "Network Design and Architecture",
  "Cloud Networking and SaaS Integration",
  "Network Simulation Tools (GNS3, Packet Tracer)",
  "Network Automation and DevOps",
  "Wi-Fi Standards and Configuration",
  "Mesh Networks",
  "Wireless Communication (802.11, LTE, Zigbee)",
  "Network Forensics",
  "Bandwidth Management and Throttling",
  "Network Redundancy (H.A, Load Balancers)",
  "Network Topology and Security",
  "TCP/IP Stack Deep Dive",
  "Network Management Protocols (SNMP, NetFlow)",
  "IPv4 vs IPv6 Comparison",
  "Networking in Virtualized Environments",
  "Virtual Private Cloud (VPC) Architecture",
  "Network Security and Firewalls (Stateful vs Stateless)",
  "Network Security Best Practices",
  "Network Penetration Testing",
  "Wi-Fi Security (WEP, WPA, WPA2, WPA3)",
  "Zero Trust Networking",
  "Network Attack Types (MITM, DDoS, Phishing)",
  "Intrusion Detection Systems (IDS)",
  "Intrusion Prevention Systems (IPS)",
  "Data Loss Prevention (DLP)",
  "Network Security Tools (Nmap, OpenVAS)",
  "Penetration Testing of Network Services",
  "Network Attack Mitigation Techniques",
  "Network Security Frameworks (NIST, ISO 27001)",
  "Network Security Architecture and Design"
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

              {computer_network_topics.map((topics, index) => (
                 <li key={index}><Link to={`/cn/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>

        <CreatorViews formattedTopic={formattedTopic} tit="cn" tagn={24}/>

        <NextPrevTopic topics={computer_network_topics} currentTopic={formattedTopic} basePath="/cn"/>

         
        </div>
        

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default ComputerNetwork;
