import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import {  useLocation , useParams  , Link} from 'react-router';
const CreatorViews  = lazy(() => import('../../../SmallComponents/CreatorViewsSection/CreatorViews'));
const NextPrevTopic = lazy(() => import( '../../../SmallComponents/NextPrevTopic/NextPrevTopic'));

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const Rust = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '))
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
   

const rust_topics = [
    "Introduction to Rust",
    "History and Features of Rust",
    "Installing Rust (rustup, cargo)",
    "Rust Toolchain and Project Structure",
    "Hello World Program",
    "Variables and Mutability",
    "Data Types",
    "Scalar Types",
    "Compound Types (Tuples, Arrays)",
    "Functions",
    "Parameters and Return Values",
    "Statements and Expressions",
    "Control Flow",
    "if, else",
    "loop, while, for",
    "Ownership",
    "Ownership Rules",
    "Move, Copy, and Clone",
    "Borrowing and References",
    "Mutable References",
    "Slices",
    "Memory Safety and Lifetimes",
    "Lifetime Annotations",
    "Lifetime Elision Rules",
    "Structs",
    "Named Fields and Tuple Structs",
    "Associated Functions and Methods",
    "Enums and Pattern Matching",
    "Option and Result Types",
    "match, if let, while let",
    "Collections",
    "Vectors",
    "Strings",
    "HashMaps",
    "Error Handling",
    "panic! macro",
    "Result and Option Handling",
    "? Operator",
    "Modules and Packages",
    "mod, use, pub",
    "Crates and Cargo",
    "workspaces",
    "Ownership with Structs and Enums",
    "Traits and Generics",
    "Defining and Implementing Traits",
    "Trait Bounds",
    "Generic Structs and Functions",
    "Closures and Functional Programming",
    "Iterators",
    "map, filter, fold",
    "Higher-order Functions",
    "Smart Pointers",
    "Box",
    "Rc, Arc",
    "RefCell, Mutex",
    "Concurrency in Rust",
    "Threads",
    "Message Passing (mpsc)",
    "Shared State with Mutex and Arc",
    "async/await",
    "Futures and tokio",
    "File and IO Handling",
    "std::fs and std::io",
    "Reading and Writing Files",
    "Error Propagation",
    "Testing in Rust",
    "Unit Tests",
    "Integration Tests",
    "Test Organization",
    "Macros",
    "Declarative (macro_rules!)",
    "Procedural Macros (Custom Derive, Attribute-like, Function-like)",
    "Unsafe Rust",
    "Raw Pointers",
    "Dereferencing and Slice Manipulation",
    "Calling C Code (FFI)",
    "Working with External Crates",
    "Using crates.io",
    "serde, regex, rand, etc.",
    "Web Development with Rust",
    "Rocket, Actix-web, Axum",
    "REST API Development",
    "Database Integration",
    "Diesel, sqlx, PostgreSQL",
    "Building CLI Applications",
    "clap, structopt",
    "Rust and WebAssembly (Wasm)",
    "wasm-pack and wasm-bindgen",
    "Project Architecture and Best Practices",
    "Rust Performance Tuning",
    "Memory Management and Profiling Tools",
    "Common Rust Design Patterns",
    "Idiomatic Rust and Best Practices"
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

              {rust_topics.map((topics, index) => (
                <li key={index}><Link to={`/rust/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="rust" tagn={4}/>

        <NextPrevTopic topics={rust_topics} currentTopic={formattedTopic} basePath="/rust"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default Rust;
