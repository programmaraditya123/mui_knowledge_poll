import { useEffect, useState ,useMemo} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import HomePage from './Pages/HomePage'
//import {io} from "socket.io-client";
//import socket from '../src/Socket/Socket';

 

function App() {
  //const socket = useMemo(() => io("http://localhost:8081"),[])
  // const socket = io("http://localhost:8081",{
  //   withCredentials:true
  // })
  //const [count, setCount] = useState(0)
  // useEffect(() => {
  //   socket.emit('userData',{
  //     page: window.location.pathname,
  //     browser: navigator.userAgent,
  //     time: new Date().toISOString()
  //   });

  //   socket.on('updateUserCount',(count) => {
  //     console.log('Current Users Online',count)
  //   });
  //   return () => {
  //     socket.off('updateUserCount');
  //   }
  // },[])

  return (
    <>
       <HomePage/>
    </>
  )
}

export default App
