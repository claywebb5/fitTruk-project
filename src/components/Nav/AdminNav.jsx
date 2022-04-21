// import './Nav.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoWhite from './logoWhite.png';
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


// =================**< ADMIN VIEW >**=========================
// [] Add Class
// [] All Classes
// [] Class Schedule
// [] Profile
// [] Sign Out



function AdminNav() {
    // ========< TOOLS >==============
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    // -------< PROFILE ICON >---------------

    const name = user.name.toUpperCase();
    const words = name.split(' ');
    const initials = [];
    // ---------< CREATES ICON >-------------
    for (const i of words) {
        initials.push(i[0])
    }

    // =====< USESTATE >=============================
    // For the hamburger icon menu
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    // For the user icon menu
    const [anchorElUser, setAnchorElUser] = useState(null);

    // =====< CLICK LISTENERS >=============================
    // OPEN the hamburger icon menu
    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
    // OPEN the user icon menu
    const handleOpenUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    // CLOSE the hamburger icon menu
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };
    // CLOSE the user icon menu
    const handleCloseUser = (event) => {
        setAnchorElUser(null);
    };
    // Go to All Classes view (Maybe new Home.jsx Component?)
    const handleLogo = () => {
        history.push("/all-classes")
    };
    // GO to Profile
    const handleProfile = () => {
        history.push('/personal-info');
    };
    // GO to Home
    const handleHome = () => {
        alert('See Home.jsx Component!!!')
        // history.push('');
    };
    // GO to All Classes
    const handleAllClasses = () => {
        history.push('/all-classes');
    };
    // GO to My Classes
    const handleMyClasses = () => {
        history.push('/my-classes');
    };
    // GO to About
    const handleAbout = () => {
        history.push('/about');
    };
    // SIGN OUT
    const handleSignOut = () => {
        dispatch({ type: 'LOGOUT' });
    };
    // GO to Create Class
    const handleCreateClass = () => {
        history.push('/create-class');
    };

    return (
        <>

        </>
    );
}

export default AdminNav;
