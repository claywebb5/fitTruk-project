// import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminNav from './AdminNav';

// =================**< CUSTOMER/PROSPECT/TRAINER VIEW >**=========================

function Nav() {
  const user = useSelector((store) => store.user);

  return (
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
        style={{marginBottom: 20, backgroundColor: '#8bc34a'}}>
        ---- -----
        </div>
        {/*------ TEMPORARY DIV, DELETE WHEN NECESSARY ---------*/}


      </div>
    </div>
  );
}

export default Nav;
