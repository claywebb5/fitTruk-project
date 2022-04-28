import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoWhite from './logoWhite.png';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { styled } from '@mui/material/styles';

// =================**< PROSPECTS VIEW >**=========================

function ProspectNav() {
    // ========< TOOLS >==============
    const history = useHistory();

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
    // GO to All Classes
    const handleAllClasses = () => {
        history.push('/all-classes');
    };
    // GO to Sign In
    const handleSignIn = () => {
        history.push('/login');
    };
    // GO to Register
    const handleRegister = () => {
        history.push('/registration');
    };
    // GO to Landing Page
    const handleLandingPage = () => {
        history.push('/home')
    };

    // ------ This is supposed to help the dom scroll without being hidden under the app bar, but it currently does not do that -------
    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: "#41414c", marginBottom: 1 }}>
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
                                <Typography textAlign="center" onClick={handleAllClasses}>All Classes</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleSignIn}>Sign In</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Typography textAlign="center" onClick={handleRegister}>Register</Typography>
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
                            onClick={handleLandingPage}
                            sx={{ mr: 2 }}
                        >
                            <Avatar alt="logoWhite" src={logoWhite} variant="square" />
                        </IconButton>
                    </Box>
                    {/* ------< USER ICON >--------------- */}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            onClick={handleSignIn}
                            sx={{ p: 0 }}
                        >
                            <NoAccountsIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
}

export default ProspectNav;