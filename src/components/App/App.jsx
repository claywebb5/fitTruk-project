import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';

// ---------------------------< Approved route imports >-------------------------------
import RegisterPage from '../RegisterPage/RegisterPage';

// ----------------------< // END Approved route imports >-----------------------------

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <nav>
      <h1>DEV BAR</h1>
      <Link to="/home">home</Link>
      <Link to="/about">About</Link>
      <Link to="/registration">registration</Link>
      <Link to="/login">login</Link>
      <Link to="/all-classes">all-classes</Link>
      <Link to="/my-classes">my-classes</Link>
      <Link to="/class-details">class-details</Link>
      <Link to="/class-attendace">class-attendace</Link>
      <Link to="/create-class">create-class</Link>
      <Link to="/personal-info">personal-info</Link>
      <p>TO BE REMOVED</p>
      </nav>
      <div>
        {/* <Nav /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          

{/* -------------------------< Approved routes >---------------------- */}

          {/* -----< Login (1.2a)>----- */}
          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /classes page
              <Redirect to="/all-classes" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>
          
          {/* -----< Registration (1.2b)>----- */}
          <Route exact path="/registration">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /classes page
              <Redirect to="/all-classes" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* -----< All Classes (1.4a)>----- */}
          <Route
            // shows classes page at all times (logged in or not)
            exact
            path="/all-classes">
            <AllClassesPage />
          </Route>

          {/* -----< My Classes (1.4b)>----- */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/my-classes"
          >
            <MyClassesPage />
          </ProtectedRoute>





          {/* -------------------< // END Approved routes >---------------- */}


          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
