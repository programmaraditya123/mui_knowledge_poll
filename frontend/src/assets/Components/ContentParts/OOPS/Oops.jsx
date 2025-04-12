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



const Oops = () => {
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle, setSearchTitle] = useState(title === "" || title === undefined ? "Introduction to OOPs" : title);
  // console.log("++++++++++++", searchtitle);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // console.log("------------",cont)
  // console.log("2222222222",title)
   

const oops_topics = [
  "Introduction to OOPs",
  "Procedural vs Object-Oriented Programming",
  "Principles of OOP",
  "Classes and Objects",
  "Attributes and Methods",
  "Encapsulation",
  "Abstraction",
  "Inheritance",
  "Polymorphism",
  "Types of Inheritance (Single, Multiple, Multilevel, Hierarchical, Hybrid)",
  "Method Overloading",
  "Method Overriding",
  "Constructor and Destructor",
  "Types of Constructors (Default, Parameterized, Copy)",
  "Access Modifiers (Public, Private, Protected)",
  "Static Members (Static Methods and Variables)",
  "The `self` and `this` Keyword",
  "Object Lifecycle",
  "Class vs Object vs Instance",
  "Instance Variables vs Class Variables",
  "Property Decorators and Getters/Setters",
  "Abstract Classes and Interfaces",
  "Composition vs Inheritance",
  "Duck Typing in OOP",
  "Multiple Inheritance and MRO (Method Resolution Order)",
  "Operator Overloading",
  "Magic Methods / Dunder Methods (e.g., `__init__`, `__str__`, `__eq__`)",
  "Inner Classes",
  "Object Cloning (Shallow vs Deep Copy)",
  "Dynamic Binding and Late Binding",
  "Overriding vs Overloading",
  "Object Slicing",
  "Encapsulation vs Abstraction",
  "Design Principles (SOLID, DRY, KISS, YAGNI)",
  "OOP in Python",
  "OOP in Java",
  "OOP in C++",
  "Real-life Examples of OOP",
  "UML Diagrams (Class Diagram, Sequence Diagram)",
  "Use of OOP in Frameworks (Django, Spring, etc.)",
  "Error Handling in OOP",
  "OOP Design Patterns (Singleton, Factory, Observer, etc.)",
  "OOP and Unit Testing",
  "Serialization and Deserialization of Objects",
  "Garbage Collection in OOP Languages",
  "Best Practices in Object-Oriented Design",
  "Comparison of OOP Features Across Languages"
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
      const data = await axios.get(`${BASE_URL}/app/getcont/getoopscontent`, { params: { title: searchtitle } });
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

              {oops_topics.map((topics, index) => (
                <li onClick={() => { setSearchTitle(topics) }} key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
          {/* {cont} */}

          <div dangerouslySetInnerHTML={{ __html: cont }} />
          {cont?.trim() === `${searchtitle} contetnt not available`.trim() ?  
          <button className='btn-18' onClick={() => routerchange(searchtitle,26)}>Write Content</button> : <button className='btn-18' onClick={() => routerchange1(searchtitle,cont,26)}>Modify Content</button>
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

export default Oops;
