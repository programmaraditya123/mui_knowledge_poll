import React, { useState,useRef,useEffect } from 'react';
import './AIContentGenerationPage.css';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

const AIContentGenerationPage = () => {
  const chatRef = useRef(null);
  const[messages,setMessages] = useState([{text:"ASK AI Anything",sender:'ai'},]);
  const[input,setInput] = useState("");
  // const[output,setOutput] = useState("");
  // console.log("-----------",output)
  console.log("++++++++++++",input)
   
   
    
  const generateContent = async () =>{
    setMessages([...messages,{text:input,sender:'user'}]);
    setInput("");
    try {
      const content = await axios.post(`http://localhost:8000/app/getcont/generate`,{prompt:input});
      // setOutput(content.data.content);
      setTimeout(() => {
          setMessages((prevMessages) =>[...prevMessages,{text:content.data.content,sender:'ai'}]);
           });
      
    } catch (error) {
      console.log("Error",error)
      
    }
  };

  

  
   
  useEffect(() => {
    if(chatRef.current){
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  },[messages])

  return (
    <div className='ai0'>
      {/* <div className='ai1'>This  is the history section</div> */}
      <div className='ai2'>
        <div className='ai1'>
          <div className='ai11'>
            <div className='bars'><HiBars3CenterLeft /></div>
            <div className='models-drop'>SELECT MODELS <IoIosArrowDown /></div>
          </div>
          <div className='aibtns'>
            <button className='btn-15'>Pricing</button>
            <button className='btn-15'>Email Login</button>
            <button className='btn-15'>Login with Google <FaGoogle /></button>
          </div>
        </div>
        <div className='ai12' ref={chatRef}>
        {/* <div className="chat-box"> */}
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender === "user" ? "user chat" : "ai chat"}>
          {msg.text}
        </div>
      ))}
    {/* </div> */}
           
           
          
        </div>
        <div className='ai13'>
          <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Ask AI Anything' />

           
          <div className='textareabtns'>
            <button className='btn-15' onClick={generateContent}>Search</button>
            <button className='btn-15'>Deep Search</button>
            <button className='btn-15'>Add Files</button>
          </div>
        </div>

      </div>
    </div>
  )
}



export default AIContentGenerationPage
