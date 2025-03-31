import React, { useState } from "react";
import "./Register.css";  
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import axios from 'axios';

const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[phone,setPhone] = useState();
    const[address,setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/app/userauth/register`,{name,email,password,phone,address});
            if(res && res.data.success){
                alert("Registred Succesfully");
                navigate('/login')
            }else{
                alert(res.data.message)
            }
             
            
        } catch (error) {
            console.log("Error",error)
            
        }
    }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Name" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <p>
            Already registered? <NavLink to='/login'>Login here</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
