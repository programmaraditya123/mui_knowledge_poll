import React, { useState, useRef, useMemo } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';
import './Write&Earn.css';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router';


const WriteEarn = ({ placeholder }) => {
  const location = useLocation();
  const editor = useRef(null);
  //const [cdata,setCData] = useState("")
  //console.log('------------',title)
  const Title = location.state?.Title;
  const Content = location.state?.Content;
  const[title,setTitle] = useState(Title);
  const [content, setContent] = useState(Content);
  console.log("***********",title)

  const myfunc = () => {
    document.getElementById("mydropwe").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-16')) {
    var dropdowns = document.getElementsByClassName("dropdown-features");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
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
      const data = await axios.post(`http://13.201.93.211/api/app/getcont/addcontent`,{title:title,content:content});
      console.log("++++++++++++Content Generated sucessfully");
      
    } catch (error) {
      console.log("Error",error)
      
    }
  }

  


  return (

    <>
    <div className='navbartop'>
    <div className='drop-features'>
    <div className='btninput'>
    <button className='btn-16' onClick={myfunc}><FaBars /></button>
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
    {/* <div className='navbarsearch'>
      <input type='text' placeholder='Seacrh here'/>
    </div> */}
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
          {/* <input onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title here'/> */}
          {/* {Title?.trim() === "" ? (<input onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title chnage here'/>) :
          (<input value={title} placeholder='enter title here'/>)} */}
          {/* {Title?.trim() === "" ? (<input value={title} placeholder='enter title here'/>) : (<input onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title chnage here'/>)} */}
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
