import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [pdrop,setPdrop] = useState(false);
  const dropref = useRef(null);
  
  useEffect (()=>{
    function handleClickOutside (event) {
      if (dropref.current && ! dropref.current.contains(event.target)){
        setPdrop(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside);

    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[])
  return (
    <div>
    <div className='navhome'>
      <div className='navhome1'>
        <li><FaBars className='navicons'/></li>
        <li>Knowledge Poll</li>
        <input type='text' placeholder='Search here ...'/>
      </div>
      <div className='navhome2'>
      <li>Log in</li>
        <li><IoMdNotifications /></li>
        <li onClick={()=> setPdrop(!pdrop)}><RiAccountPinCircleFill /></li>
        {/* <li></li> */}
        <div ref={dropref} className={`navdrop ${pdrop ? "navdropshow" : ""}`}>
          <li>Profile</li>
          <li>Dashboard</li>
          <li>Setting</li>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Navbar;































































// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//     return (
//       <Box sx={{ flexGrow: 1 , margin: 0,padding:0}}>
//         <AppBar position="static" sx={{ bgcolor: 'whiteSmoke', color: 'black' , 'boxShadow':'none','borderBottom':'1px solid grey','margin':0 , 'padding':0}}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ display: { xs: 'none', sm: 'block' } }}
//             >
//               Knowledge Poll
//             </Typography>
//             <Search sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)', }}>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </Search>
//             <Box sx={{ flexGrow: 1 }} />
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                 <Badge badgeContent={4} color="error">
//                   <MailIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size="large"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//               >
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     );
//   }
  