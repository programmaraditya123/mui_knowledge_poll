import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { useNavigate , useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Fla = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

const fla_topics = [
  "Introduction to Formal Languages and Automata",
  "Alphabets, Strings, and Languages",
  "Operations on Strings and Languages",
  "Finite Automata (FA)",
  "Deterministic Finite Automata (DFA)",
  "Non-Deterministic Finite Automata (NFA)",
  "DFA vs NFA",
  "Equivalence of DFA and NFA",
  "ε-NFA (Epsilon NFA)",
  "Conversion of NFA to DFA",
  "Minimization of DFA",
  "Regular Languages",
  "Regular Expressions",
  "Regular Expressions to FA",
  "FA to Regular Expressions",
  "Pumping Lemma for Regular Languages",
  "Closure Properties of Regular Languages",
  "Limitations of Finite Automata",
  "Introduction to Grammars",
  "Chomsky Hierarchy",
  "Regular Grammar",
  "Context-Free Grammar (CFG)",
  "Derivations (Leftmost, Rightmost)",
  "Parse Trees and Ambiguity",
  "Ambiguous and Unambiguous Grammars",
  "Simplification of CFG (Removing Useless, Null, Unit Productions)",
  "Chomsky Normal Form (CNF)",
  "Greibach Normal Form (GNF)",
  "Pumping Lemma for Context-Free Languages",
  "Pushdown Automata (PDA)",
  "Deterministic PDA vs Non-Deterministic PDA",
  "Design of PDA for CFG",
  "Equivalence of PDA and CFG",
  "Turing Machines (TM)",
  "Design of Turing Machines",
  "Multi-tape Turing Machines",
  "Universal Turing Machine",
  "Church-Turing Thesis",
  "Recursive and Recursively Enumerable Languages",
  "Decidability and Undecidability",
  "Halting Problem",
  "Rice’s Theorem",
  "Post Correspondence Problem (PCP)",
  "Context-Sensitive Grammar and Languages",
  "Linear Bounded Automata (LBA)",
  "Type-0 Grammars (Unrestricted)",
  "Hierarchy of Language Classes",
  "Comparison of FA, PDA, and TM",
  "Applications of Automata in Compilers",
  "Lexical Analysis and Tokenization",
  "Regular vs Context-Free vs Context-Sensitive vs Recursively Enumerable",
  "Closure Properties of CFLs",
  "Decision Properties of Regular and CFLs",
  "Parsing Techniques (Top-down, Bottom-up)",
  "LL(1) and LR Parsers (Overview)",
  "Use of Automata in Real World (Text Search, Protocols, etc.)"
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

              {fla_topics.map((topics, index) => (
                <li key={index}><Link to={`/fla/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="fla" tagn={27}/>

        <NextPrevTopic topics={fla_topics} currentTopic={formattedTopic} basePath="/fla"/>

        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Fla;
