import React from 'react';
import { Link } from 'react-router-dom';
// import './Nav.css';
import { useSelector } from 'react-redux';

// ------------------ *** NEED TO SPECIFY BETWEEN AUTH LEVEL *** ----------------------------

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
              <button>All Classes</button>
            </Link>

            <Link className="navLink" to="/my-classes">
              <button>My Classes</button>
            </Link>
            
            <Link className="navLink" to="/class-details">
              <button>Class Details</button>
            </Link>

            <Link className="navLink" to="/class-attendace">
              <button>Class Attendace</button>
            </Link> 
            <Link className="navLink" to="/create-class">
              <button>Create Class</button>
            </Link>
            <Link className="navLink" to="/personal-info">
              <button>Personal Info</button>
            </Link>

            
            <Link className="navLink" to="/info">
              <button>Info Page</button>
            </Link>
          </>
        )}

        <Link className="navLink" to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
