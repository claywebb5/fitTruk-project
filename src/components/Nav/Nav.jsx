// import './Nav.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoWhite from './logoWhite.png';
import AdminNav from './AdminNav';
import ProspectNav from './ProspectNav';
import LogOutButton from '../LogOutButton/LogOutButton';
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
import { deepOrange, deepPurple } from '@mui/material/colors';



// =================**< CUSTOMER/TRAINER VIEW >**=========================
// [x] Profile
// [x] All Classes
// [x] My Classes
// [x] Sign out



function Nav() {
  // ========< TOOLS >==============
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // -------< PROFILE ICON >---------------
  const name = user.name.toUpperCase()
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
  // GO to All Classes (Maybe new Home.jsx Component?)
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
    // history.push('');
  };

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

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#41414c" }}> {/* UPDATE COLOR */}
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
                <Typography textAlign="center" onClick={handleAllClasses}>All Classes</Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseMenu}>
                <Typography textAlign="center" onClick={handleMyClasses}>My Classes</Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseMenu}>
                <Typography textAlign="center" onClick={handleAbout}>About</Typography>
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
              onClick={handleOpenUser}
              sx={{ p: 0 }}
            >
              <Avatar sx={{ bgcolor: '#80bd02' }}>{initials.join('')}</Avatar>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="user-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUser}
            >
              <MenuItem onClick={handleCloseUser}>
                <Typography textAlign="center" onClick={handleProfile}>Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUser}>
                <Typography textAlign="center" onClick={handleMyClasses}>My Classes</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUser}>
                <Typography textAlign="center" onClick={handleSignOut}>Sign Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>



      {/*========< STARTING CODE >========== */}
      <div className="nav">
        <Link to="/home">
          <h2 className="nav-title">FitTruk (Nav Bar)</h2>
        </Link>
        <div>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              <button>Login / Register</button>
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/all-classes">
                <button>**LOGO**</button>
              </Link>

              <Link className="navLink" to="/all-classes">
                <button>All Classes</button>
              </Link>

              <Link className="navLink" to="/my-classes">
                <button>My Classes</button>
              </Link>

              <Link className="navLink" to="/class-details">
                <button>Class Details</button>
              </Link>

              <Link className="navLink" to="/attendees">
                <button>Class Attendees</button>
              </Link>
              <Link className="navLink" to="/create-class">
                <button>Create Class</button>
              </Link>
              <Link className="navLink" to="/personal-info/">
                <button>Personal Info</button>
              </Link>
              {/* <Link className="navLink" to="/info">
              <button>Info Page</button>
            </Link> */}
              <Link className="navLink" to="/personal-info/">
                <button>**PROFILE PIC**</button>
              </Link>
            </>
          )}

          <Link className="navLink" to="/about">
            <button>About</button>
          </Link>


          {/*------ TEMPORARY DIV, DELETE WHEN NECESSARY --------*/}
          <div // This is DIV is temporary, just to help differentiate where the nav bar ends and the page begins. Delete when needed ----------------------------
            style={{ marginBottom: 20, backgroundColor: '#8bc34a' }}>
            ---- -----
          </div>
          {/*------ TEMPORARY DIV, DELETE WHEN NECESSARY ---------*/}


        </div>
      </div>
    </>
  );
}

export default Nav;
