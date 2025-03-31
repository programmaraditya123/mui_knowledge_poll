import React,{useState} from "react";
import "./Login.css";  
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import axios from 'axios';

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/app/userauth/login`,{email,password});
            if (res && res.data.success){
                alert(res.data.message);
                localStorage.setItem("token",JSON.stringify(res.data.token));
                localStorage.setItem("email",JSON.stringify(res.data.user.email))
                navigate('/')
            }else{
                alert(res.data.message);
            }
            
            
        } catch (error) {
            console.log("ERROR",error)
            
        }
    };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account?  <NavLink to='/register'>Sign up here</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

