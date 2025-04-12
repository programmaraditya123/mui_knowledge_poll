import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';
import './Write&Earn.css';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;


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
        navigate("/login");
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
        navigate("/login")
      }

    }
    if(tag === 0) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
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
    if(tag === 3) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addCcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/c');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 4) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addrustcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/rust');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 5) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addgolangcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/golang');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 6) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addperlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/perl');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 7) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addcpluspluscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/cpp');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 8) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addjavascriptcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/js');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 9) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addhtmlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/html');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 10) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addcsscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/css');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 11) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addbscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/bootstrap');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 12) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addtailwindcsscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/tailwind');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 13) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/datascience');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 14) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addmlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/machinelearning');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 15) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/deeplearning');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 16) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddacontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/dataanalyst');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 17) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addaiagentscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/aiagents');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 18) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addsklearncontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/sklearn');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 19) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addmatplotlibcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/matplotlib');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 20) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addpandascontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/pandas');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 21) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addnumpycontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/numpy');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 22) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addseaborncontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/seaborn');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 23) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addoscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/os');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 24) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addcncontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/cn');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 25) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddbmscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/dbms');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 26) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addoopscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/oops');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 27) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addflacontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/fla');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 28) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addcdcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/cd');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 29) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddsacontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/dsa');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 30) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addisdhcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/isdh');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 31) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addsqlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/sql');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 32) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addmysqlcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/mysql');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 33) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addmongodbcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/mongodb');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 34) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addpostgrecontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/postgre');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 35) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/adddockercontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/docker');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 36) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addkubernetescontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/kubernetes');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 37) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addgitcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/git');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 38) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addawscontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/aws');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 39) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addgradlecontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/gradle');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 40) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addgitlabcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/gitlab');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 41) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addsystemdesigncontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/systemdesign');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 42) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addandroidcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/android');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 43) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addlinuxcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/linux');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 44) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addsoftwaretestingcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/st');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 45) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addprojectmanagementcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/pm');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 46) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addexcelcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/excel');
      }else{
        // console.log("Error++++++++++++",data)
        alert("User Must be loggedin to post content")
        navigate('/login')
      }
    }
    if(tag === 47) {
      const token = getToken();
      if(token){
      const data = await axios.post(`${BASE_URL}/app/getcont/addproductmanagementcontent`,{title:title,content:content},{headers:{Authorization:`Bearer ${token}`}});
      //const data = await axios.post(`https://localhost:8000/app/getcont/addcontent`,{title:title,content:content});
      //const data = await axios.post(`/api/app/getcont/addcontent`,{title:title,content:content});
      setContent("");
      setTitle("");
      navigate('/productm');
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
