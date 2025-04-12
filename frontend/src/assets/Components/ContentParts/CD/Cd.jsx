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



const Cd = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Compiler Design" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const compiler_design_topics = [
  "Introduction to Compiler Design",
  "Phases of a Compiler",
  "Structure of a Compiler",
  "Lexical Analysis",
  "Lexical Analyzer and Token Generation",
  "Role of Lexical Analyzer",
  "Input Buffering",
  "Finite Automata for Lexical Analysis",
  "Regular Expressions and Tokens",
  "Lex Tools (e.g., Lex, Flex)",
  "Syntax Analysis",
  "Parsers and Parsing Techniques",
  "Context-Free Grammar (CFG)",
  "Parse Trees and Derivations",
  "Leftmost and Rightmost Derivation",
  "Ambiguity in Grammar",
  "Eliminating Left Recursion",
  "Left Factoring",
  "Top-down Parsing",
  "Recursive Descent Parsing",
  "Predictive Parsing",
  "LL(1) Parser",
  "Bottom-up Parsing",
  "Operator Precedence Parsing",
  "LR Parsing Techniques (SLR, LALR, Canonical LR)",
  "Constructing Parsing Tables",
  "Shift-Reduce Parsing",
  "Yacc Tool",
  "Syntax-Directed Translation",
  "Syntax-Directed Definitions (SDD)",
  "Inherited and Synthesized Attributes",
  "Annotated Parse Trees",
  "Intermediate Code Generation",
  "Three-Address Code (TAC)",
  "Quadruples, Triples, Indirect Triples",
  "Postfix and Polish Notation",
  "Type Checking and Type Systems",
  "Type Conversion and Coercion",
  "Symbol Table Management",
  "Run-time Environments",
  "Storage Organization",
  "Activation Records",
  "Parameter Passing Techniques",
  "Static and Dynamic Scoping",
  "Heap and Stack Memory Management",
  "Garbage Collection",
  "Code Optimization",
  "Peephole Optimization",
  "Loop Optimization",
  "Constant Folding and Propagation",
  "Dead Code Elimination",
  "Strength Reduction",
  "Common Subexpression Elimination",
  "Register Allocation",
  "Control Flow Analysis",
  "Data Flow Analysis",
  "Basic Blocks and Flow Graphs",
  "Dominators and Natural Loops",
  "Global Optimization Techniques",
  "Code Generation",
  "Target Code Generation",
  "Instruction Selection and Scheduling",
  "Machine-Independent Optimization",
  "Machine-Dependent Optimization",
  "Error Detection and Recovery",
  "Lexical and Syntax Errors",
  "Semantic Errors",
  "Error Recovery Strategies",
  "Bootstrapping and Cross Compilation",
  "Interpreters vs Compilers",
  "JIT Compilation",
  "Linkers and Loaders",
  "Compiler Construction Tools",
  "Differences between Compiler and Interpreter",
  "Just-In-Time Compilation (JVM/CLR Context)",
  "Case Studies of Real Compilers (GCC, LLVM, JVM)"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getcdcontent`, { params: { title: searchtitle } });
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

              {compiler_design_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,28)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,28)}>Modify Content</button>
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

export default Cd;
