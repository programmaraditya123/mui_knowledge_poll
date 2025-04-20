// import React, { useEffect, useState } from 'react';
// //import {io} from 'socket.io-client';
// import socket from '../../Socket/Socket';
// import './AdminPanelHome.css'

// const AdminpanelHome = () => {
//     // const socket = io("http://localhost:8081",{
//     //     withCredentials:true
//     //   });
//     const[usercount,setUserCount] = useState(0);
//     const[datalist,setDataList] = useState([]);
//     console.log("222222222222",datalist)

//     useEffect(() => {
//         socket.on('updateUserCount',(count) => {
//             setUserCount(count);
//         });

//         socket.on('userData',(fullData) => {
//           setDataList(prev => [fullData,...prev])
//         })
//         return () => {
//             socket.off('userData')
//         }
//     },[])
//   return (
//     <div>
//       <h1>This is admin Home Page</h1>
//       <h2>Live Users:{usercount}</h2>
//       <div className="live-user-data">
//       <h2>Live User Info</h2>
//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Page</th>
//             <th>Browser</th>
//             <th>Time</th>
//             <th>IP Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {datalist.map((data, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{data.page}</td>
//               <td>{data.browser}</td>
//               <td>{new Date(data.time).toLocaleString()}</td>
//               <td>{data.ip}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     </div>
//   )
// }

// export default AdminpanelHome;
