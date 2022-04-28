import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoWhite from './logoWhite.png';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
// ----------< MUI MENU >----------------
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// =================**< ADMIN VIEW >**=========================

function AdminNav() {
    // ========< TOOLS >==============
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    // -------< PROFILE ICON >---------------
    const { first_name, last_name } = user;
    let initials = '';

    const getInitials = (firstName, lastName) => {
        let firstLetter = 'H';
        let secondLetter = 'i';

        if (firstName && lastName) {
            firstLetter = (firstName[0]).toUpperCase();
            secondLetter = (lastName[0]).toUpperCase();
        } else if (firstName) {
            firstLetter = (firstName[0]).toUpperCase();
            secondLetter = (firstName[1]);
        }
        initials = firstLetter + secondLetter;
        return true;
    }
    // ---------< CREATES ICON >-------------


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
        history.push('/home');
    };
    // GO to Create Class
    const handleCreateClass = () => {
        history.push('/create-class');
    };

    // ------ This is supposed to help the dom scroll without being hidden under the app bar, but it currently does not do that -------
    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: "#41414c", marginBottom: 1, }}>
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

                            {
                                (function () {
                                    if (user.profile_image) {
                                        return <Avatar src={user.profile_image} sx={{ border: 2, borderColor: '#80bd02'  }} />
                                    } else {
                                        return <div>
                                            {(getInitials(first_name, last_name)) && <Avatar sx={{ bgcolor: '#80bd02' }}>{initials}</Avatar>}
                                        </div>
                                    }
                                })()
                            }
                            
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
}

export default AdminNav;
