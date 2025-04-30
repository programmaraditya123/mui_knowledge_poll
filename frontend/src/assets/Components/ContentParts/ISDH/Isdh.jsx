import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Isdh = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const isdh_topics = [
  
  "Introduction to Information Security",
  "CIA Triad (Confidentiality, Integrity, Availability)",
  "Threats, Vulnerabilities, and Attacks",
  "Security Goals and Principles",
  "Security Mechanisms and Services",

   
  "Basics of Cryptography",
  "Symmetric Key Cryptography",
  "Asymmetric Key Cryptography",
  "Block Ciphers (DES, AES)",
  "Stream Ciphers",
  "Public Key Algorithms (RSA, ECC)",
  "Diffie-Hellman Key Exchange",
  "Hash Functions (SHA, MD5)",
  "Message Authentication Codes (MACs)",
  "Digital Signatures",
  "Certificates and PKI (Public Key Infrastructure)",

  
  "IP Security (IPSec)",
  "Secure Sockets Layer (SSL) / TLS",
  "Firewalls and Intrusion Detection Systems",
  "Virtual Private Networks (VPNs)",
  "Wi-Fi Security (WEP, WPA, WPA2, WPA3)",
  "Denial of Service (DoS) and DDoS Attacks",
  "Phishing and Social Engineering",
  "Man-in-the-Middle (MITM) Attacks",
  "Secure Email (PGP, S/MIME)",
  "DNS Security (DNSSEC)",

   
  "Authentication Methods",
  "Multifactor Authentication (MFA)",
  "Biometric Authentication",
  "Access Control Models (DAC, MAC, RBAC, ABAC)",
  "Identity and Access Management (IAM)",

  
  "Introduction to Data Hiding",
  "Types of Data Hiding Techniques",
  "Steganography (Image, Audio, Video)",
  "Digital Watermarking",
  "Least Significant Bit (LSB) Method",
  "Transform Domain Techniques (DCT, DWT)",
  "Text Steganography",
  "Audio Steganography Techniques",
  "Steganalysis Techniques",
  "Robustness and Imperceptibility",

  
  "Secure Software Development Lifecycle (SSDLC)",
  "Buffer Overflow Attacks and Prevention",
  "Malware Types (Viruses, Worms, Trojans, Ransomware)",
  "Antivirus and Anti-malware",
  "Sandboxing and Virtualization Security",
  "Patch Management and Vulnerability Assessment",

   
  "Information Security Policies",
  "IT Laws and Cyber Laws",
  "GDPR, HIPAA, and Other Data Protection Regulations",
  "Ethical Hacking and Penetration Testing",
  "Cyber Forensics and Incident Response",

   
  "Blockchain in Security",
  "Zero Trust Security Model",
  "Cloud Security",
  "IoT Security",
  "AI and ML in Cybersecurity",
  "Quantum Cryptography",
  "Homomorphic Encryption",
  "Secure Multi-party Computation",

  
  "Kali Linux and Penetration Testing Tools",
  "Wireshark, Nmap, Metasploit",
  "Stego Tools (Steghide, OpenStego)",
  "Security Frameworks (NIST, ISO 27001)",

  
  "Case Studies of Security Breaches",
  "Security in Banking and Finance",
  "Security in Healthcare Systems",
  "Secure Communication Protocols"
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

              {isdh_topics.map((topics, index) => (
                <li key={index}><Link to={`/isdh/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="isdh" tagn={30}/>

        <NextPrevTopic topics={isdh_topics} currentTopic={formattedTopic} basePath="/isdh"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Isdh;
