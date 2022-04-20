// import './Nav.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminNav from './AdminNav';
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


// =================**< CUSTOMER/PROSPECT/TRAINER VIEW >**=========================
// ------< PROSPECTS >---------
  // [] All Classes
  // [] Sign in
  // [] Register

// -------< CUSTOMERS/TRAINERS >----------
  // [] Profile
  // [] All Classes
  // [] My Classes
  // [] Sign out



function Nav() {
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
      <AppBar position="sticky"> {/* UPDATE COLOR */}
        <Toolbar>
          {/* ------< HAMBURGER ICON >--------------- */}
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              aria-controls="menu-appbar"
              onClick={handleOpenMenu}
              sx={{ mr: 2 }}
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
                <Typography textAlign="center"></Typography>
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
