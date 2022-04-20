// import './Nav.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

// =================**< PROSPECTS VIEW >**=========================
// [] All Classes
// [] Sign in
// [] Register


function ProspectNav() {

    // ========< TOOLS >==============
    const history = useHistory();
    const user = useSelector((store) => store.user);

    // =====< USESTATE >=============================
    // For the hamburger icon menu
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    // For the user icon menu
    const [anchorElUser, setAnchorElUser] = useState(null);

    // =====< CLICK LISTENERS >=============================
    // Go to all classes view
    const handleLogo = () => {
        history.push("/all-classes")
    };
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

    return (
        <>

        </>
    );
}

export default ProspectNav;