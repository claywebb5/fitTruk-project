// import './Nav.css';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoWhite from './logoWhite.png';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
// ----------< MUI MENU >----------------
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// ----------< MUI DRAWER >----------------
// import Drawer from '@mui/material/Drawer';



// =================**< ADMIN VIEW >**=========================
// [X] Add Class
// [X] All Classes
// [X] Class Schedule
// [X] Profile
// [X] Sign Out



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

    // =====< CLICK LISTENERS >=============================
    // OPEN the hamburger icon menu
    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
    // CLOSE the hamburger icon menu
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
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
             <AppBar position="sticky" sx={{ bgcolor: "#41414c" }}>
                <Toolbar>
                    {/* ------< HAMBURGER ICON >--------------- */}
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            onClick={handleOpenMenu}
                            sx={{ mr: 2, color: "#ace23a" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right', // <---- Where the drop down
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right', // <---- Where the drop down
                            }}
                            open={Boolean(anchorElMenu)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleHome}>Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleCreateClass}>Create Class</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleProfile}>Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleAllClasses}>All Classes</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleMyClasses}>My Classes</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleAbout}>About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleSignOut}>Sign Out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* ------< LOGO ICON >--------------- */}
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="logo"
                            aria-controls="logo-appbar"
                            onClick={handleLogo}
                            sx={{ mr: 2 }}
                        >
                            <Avatar alt="logoWhite" src={logoWhite} variant="square" />
                        </IconButton>
                    </Box>
                    {/* ------< USER ICON >--------------- */}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            onClick={handleProfile}
                            sx={{ p: 0 }}
                        >
                            <Avatar sx={{ bgcolor: '#80bd02' }}>{initials.join('')}</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AdminNav;
