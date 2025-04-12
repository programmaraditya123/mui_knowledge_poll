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



const Aiagents = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Intelligent Agents" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const ai_agents_topics = [
  "Intelligent Agents",
  "Types of Agents",
  "Simple Reflex Agents",
  "Model-Based Reflex Agents",
  "Goal-Based Agents",
  "Utility-Based Agents",
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getaiagentscontent`, { params: { title: searchtitle } });
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

              {ai_agents_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,17)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,17)}>Modify Content</button>
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

export default Aiagents;
