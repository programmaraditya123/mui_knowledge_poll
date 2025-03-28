import { useState } from "react"
import React from 'react';
import './ChatInterFace.css'

const ChatInterFace = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you?", sender: "bot" },
      ]);
      const [input, setInput] = useState("");
    
      const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");
        setTimeout(() => {
          setMessages((prev) => [...prev, { text: "Got it!", sender: "bot" }]);
        }, 1000);
      };
  return (
    <div className="chat-container">
    {/* <div className="chat-header">Chat Application</div> */}
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender === "user" ? "chat user" : "chat bot"}>
          {msg.text}
        </div>
      ))}
    </div>
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
    
      
    </div>
  )
}

export default ChatInterFace;
