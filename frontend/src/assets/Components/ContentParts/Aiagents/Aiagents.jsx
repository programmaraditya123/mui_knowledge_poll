import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate ,useLocation, useParams, Link } from 'react-router';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Aiagents = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' ')) || "Intelligent Agents";
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   
   

const ai_agents_topics = [
  "Intelligent Agents",
  "Types of Agents",
  "Simple Reflex Agents",
  "Model Based Reflex Agents",
  "Goal Based Agents",
  "Utility Based Agents",
  "Learning Agents",
  "Multi-Agent Systems",
  "Agent Communication Languages",
  "Perception and Sensors",
  "Environment Types (Deterministic, Stochastic, etc.)",
  "Agent Architectures",
  "Deliberative Agents",
  "Reactive Agents",
  "Hybrid Agents",
  "Cognitive Architectures",
  "Knowledge Representation",
  "Ontologies",
  "Search and Planning",
  "State Space Search",
  "Uninformed Search Algorithms",
  "Informed Search Algorithms (A*, Greedy)",
  "Adversarial Search (Minimax, Alpha-Beta Pruning)",
  "Constraint Satisfaction Problems (CSP)",
  "Planning in AI",
  "STRIPS",
  "Partial Order Planning",
  "Probabilistic Reasoning",
  "Markov Decision Processes (MDP)",
  "Partially Observable MDPs (POMDP)",
  "Bayesian Networks",
  "Decision Networks",
  "Game Theory in AI",
  "Cooperative vs Competitive Agents",
  "Reinforcement Learning Agents",
  "Agent-Based Modeling and Simulation",
  "Swarm Intelligence",
  "Evolutionary Algorithms for Agents",
  "Learning in Multi-Agent Systems",
  "Negotiation and Bargaining",
  "Trust and Reputation in MAS",
  "Distributed AI",
  "Fuzzy Logic in Agents",
  "Rule-Based Agents",
  "Ethical and Social Aspects of AI Agents",
  "Human-Agent Interaction",
  "Natural Language Interfaces for Agents",
  "Autonomous Systems",
  "Robotics and AI Agents",
  "Software Agents",
  "Agent Development Frameworks (JADE, SPADE)"
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

              {ai_agents_topics.map((topics, index) => (
                <li key={index}><Link to={`/aiagents/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="aiagents" tagn={17}/>

        <NextPrevTopic topics={ai_agents_topics} currentTopic={formattedTopic} basePath="/aiagents"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Aiagents;
