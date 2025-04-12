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



const Rust = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to Rust" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

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
      const data = await axios.get(`${BASE_URL}/app/getcont/getrustcontent`, { params: { title: searchtitle } });
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

              {rust_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,4)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,4)}>Modify Content</button>
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

export default Rust;
