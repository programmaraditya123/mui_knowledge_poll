import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import axios from 'axios';
import  '../Python/Python.css';
import { Link, useNavigate, useParams,useLocation} from 'react-router';
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import { FaArrowLeft , FaArrowRight} from "react-icons/fa";
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Cd = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' ')) 
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

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
               <li key={index}><Link to={`/cd/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="cd" tagn={28}/>

     <NextPrevTopic topics={compiler_design_topics} currentTopic={formattedTopic} basePath="/cd"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Cd;
