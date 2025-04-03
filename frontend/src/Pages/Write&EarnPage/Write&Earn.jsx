import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';
import './Write&Earn.css';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";


const WriteEarn = ({ placeholder }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const editor = useRef(null);
  const Title = location.state?.Title;
  const Content = location.state?.Content;
  const tag = location.state?.tag;
  const[title,setTitle] = useState(Title);
  const [content, setContent] = useState(Content);
  console.log('...........',tag)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.matches('.btn-16')) {
        document.getElementById("mydropwe")?.classList.remove("show");
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


    const getToken = () =>{
      return localStorage.getItem('token');
    }

  const config = useMemo(
    () => ({
      readonly: false,  
      placeholder: placeholder || 'Start typings...',
      height:500
    }),
    [placeholder]
  );

  const addcont = async () =>{
    try {
      if (tag === 1){
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addreactcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      setContent("");
      setTitle("");
      navigate('/react');
      }else{
        alert("User Must be loggedin to post content");
        navigate("/react");
      }
    } 
    if (tag === 2){
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addjavacontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      setContent("");
      setTitle("");
      navigate('/java');
      }else{
        alert("User Must be loggedin to post content")
        navigate("/java")
      }

    }else {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/getcont/addcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/python');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }

    } catch (error) {
      console.log("Error----------",error)
      // alert("User Must be loggedin to post content")
      // navigate('/login')
      
    }
  }

  


  return (

    <>
    <div className='navbartop'>
    <div className='drop-features'>
    <div className='btninput'>
    <button className='btn-16'  ><FaBars /></button>
    <input onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title here'/>

    </div>
    <div id='mydropwe' className='dropdown-features'>
          <li>Knowledge Pool</li>
          <li>Write Article</li>
          <li>My Articles</li>
          <li>Suggest an Article</li>
          <li>My suggested aticles</li>
          <li>Edit Profile</li>
          <li>Payout Details</li>
          <li>Student DashBoard</li>
          <li>Sign Out</li>
    </div>
    </div>
   
    </div>
      <div className='writepart'>
        <div className='writepart1'>
          <p>Knowledge Pool</p>
          <li>Write Article</li>
          <li>My Articles</li>
          <li>Suggest an Article</li>
          <li>My suggested aticles</li>
          <li>Edit Profile</li>
          <li>Payout Details</li>
          <li>Student DashBoard</li>
          <li>Sign Out</li>
        </div>
        
        <div className='writepart2'>
        <input 
  value={title} 
  onChange={(e) => setTitle(e.target.value)} 
  placeholder="Enter title here" 
/>
           
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => { }}
          />

         
          <button className='btn-15' onClick={addcont}>Save</button>
        </div>
      </div>

    </>
  );
};

export default WriteEarn;
