import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import socket from '../../Socket/Socket'

const AdminpanelHome = () => {
    // const socket = io("http://localhost:8081",{
    //     withCredentials:true
    //   });
    const[usercount,setUserCount] = useState(0);

    useEffect(() => {
        socket.on('updateUserCount',(count) => {
            setUserCount(count);
        });
        return () => {
            socket.off('updateUserCount')
        }
    },[])
  return (
    <div>
      <h1>This is admin Home Page</h1>
      <h2>Live Users:{usercount}</h2>

    </div>
  )
}

export default AdminpanelHome;
