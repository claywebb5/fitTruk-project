// import './Nav.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoWhite from './logoWhite.png';
import AdminNav from './AdminNav';
import ProspectNav from './ProspectNav';
import CustomerNav from './CustomerNav';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';



// =================**< CUSTOMER/TRAINER VIEW >**=========================
// [x] Profile
// [x] All Classes
// [x] My Classes
// [x] Sign out

// ===========*< COLOR THEME >*===============
// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'FATFRANK',
//       'CENTURY GOTHIC',
//       'Montserrat',
//     ].join(','),
//   },
//   palette: {
//     mode: 'main',
//     primary: {
//       darkGreen: '#80bd02',
//       lightGreen: '#ace23a',
//       darkGrey: '#41414c',
//       lightGrey: '#6d6e71'
//     },
//   },
// })



function Nav() {
  // ========< TOOLS >==============
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // // -------< PROFILE ICON >---------------
  
  // // const name = user.name.toUpperCase();
  // // const words = name.split(' ');
  // // const initials = [];
  // // // ---------< CREATES ICON >-------------
  // // for (const i of words) {
  // //   initials.push(i[0])
  // // }

  // // =====< USESTATE >=============================
  // // For the hamburger icon menu
  // const [anchorElMenu, setAnchorElMenu] = useState(null);
  // // For the user icon menu
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // // =====< CLICK LISTENERS >=============================
  // // OPEN the hamburger icon menu
  // const handleOpenMenu = (event) => {
  //   setAnchorElMenu(event.currentTarget);
  // };
  // // OPEN the user icon menu
  // const handleOpenUser = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // // CLOSE the hamburger icon menu
  // const handleCloseMenu = () => {
  //   setAnchorElMenu(null);
  // };
  // // CLOSE the user icon menu
  // const handleCloseUser = (event) => {
  //   setAnchorElUser(null);
  // };
  // // GO to All Classes (Maybe new Home.jsx Component?)
  // const handleLogo = () => {
  //   history.push("/all-classes")
  // };
  // // GO to Profile
  // const handleProfile = () => {
  //   history.push('/personal-info');
  // };
  // // GO to Home
  // const handleHome = () => {
  //   alert('See Home.jsx Component!!!')
  //   // history.push('');
  // };
  // // GO to All Classes
  // const handleAllClasses = () => {
  //   history.push('/all-classes');
  // };
  // // GO to My Classes
  // const handleMyClasses = () => {
  //   history.push('/my-classes');
  // };
  // // GO to About
  // const handleAbout = () => {
  //   history.push('/about');
  // };
  // // SIGN OUT
  // const handleSignOut = () => {
  //   dispatch({ type: 'LOGOUT' });
  //   // history.push('');
  // };


  return (
    <>
      {/* Not logged in, show the Prospect Nav Bar */}
      {!user.id && (
        <ProspectNav />
      )}

      {/* Logged in as a Customer or a Trainer */}
      {user.id && (
        <CustomerNav />
      )}

      {/* Logged in as an Admin show the Admin Nav Bar */}
      {user.access_level == 3 && (
        <AdminNav />
      )}
    </>
  );
}

export default Nav;
