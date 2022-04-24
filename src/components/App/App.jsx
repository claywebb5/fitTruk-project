// import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, Link, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//=====================^< TOOLS >^===================================
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TrainerRoute from '../TrainerRoute/TrainerRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
//=====================^< ROUTES >^===================================
import LandingPage from '../LandingPage/LandingPage'; // (1.1)
import LoginPage from '../LoginPage/LoginPage'; // (1.2a)
import RegisterPage from '../RegisterPage/RegisterPage'; // (1.2b)
import Nav from '../Nav/Nav'; // (1.3 a&b) 
import AllClassesPage from '../AllClassesPage/AllClassesPage'; // (1.4 a&c) <-- **** NEED TO SPECIFY BETWEEN AUTH LEVEL ****
import MyClassesPage from '../MyClassesPage/MyClassesPage'; // (1.4b)
import ClassDetailsPage from '../ClassDetailsPage/ClassDetailsPage'; // (1.5)
import EditClassPage from '../EditClassPage/EditClassPage'; // (1.6)
import RegisteredClassPage from '../RegisteredClassPage/RegisteredClassPage'; // (1.7)
import AttendeesPage from '../AttendeesPage/AttendeesPage'; // (1.8)
import UserPage from '../UserPage/UserPage'; // (1.9)
import CreateClassPage from '../CreateClassPage/CreateClassPage'; // (1.10)
//------------------^< APPROVED ROUTES >^------------------------------------
import Footer from '../Footer/Footer'; // ** ALREADY IN REPO
import AboutPage from '../AboutPage/AboutPage'; // ** ALREADY IN REPO
// import InfoPage from '../InfoPage/InfoPage'; // ** ALREADY IN REPO
// ^^=====================^< COMPONENTS/VIEWS >^==========================
import { createTheme, ThemeProvider } from "@mui/material/styles";
// ^^=====================^< MUI THEME IMPORTS >^==========================
//=======================================**< END IMPORTS >**===============================================================



function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  // ========< MUI GLOBAL THEME >==========
  // MUI info link https://mui.com/material-ui/customization/theme-components/#global-style-overrides
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
      },
    },
  });

  //========================================**< START RETURN >**====================================================
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Nav />

            <Switch>

              <Redirect exact from="/" to="/home" /> {/* Visiting localhost:3000 will redirect to localhost:3000/home */}

              {/* =============================*< START ALREADY IN REPO >*============================= */}
              {/* --------------< ABOUT PAGE >---------------- */}
              <Route
                exact
                path="/about">
                <AboutPage />
              </Route>
              {/* --------------------------< INFO PAGE >-------------------------- */}
              {/* <ProtectedRoute
            exact
            path="/info">
            <InfoPage />
          </ProtectedRoute> */}
              {/* =============================*< END ALREADY IN REPO >*============================= */}

              {/* =============================*< START APPROVED ROUTES >*============================= */}

              {/* -----< LOGIN (1.2a)>--------------------------------- */}
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
              {/* -----< End Login >----- */}

              {/* -----< REGISTRATION (1.2b)>---------------------------- */}
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
              {/* -----< End Registration >----- */}

              {/* -----< ALL CLASSES (1.4a)>----------------------------- */}
              <Route
                // shows classes page at all times (logged in or not)
                exact
                path="/all-classes">
                <AllClassesPage />
              </Route>
              {/* -----< End All Classes >----- */}

              {/* -----< MY CLASSES (1.4b)>------------------------------- */}
              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/my-classes"
              >
                <MyClassesPage />
              </ProtectedRoute>
              {/* -----< End My Classes >----- */}

              {/* -----< CLASS DETAILS (1.5)>------------------------------ */}
              <Route
                // shows Class Details page at all times (logged in or not)
                exact
                path="/class-details/:id">
                <ClassDetailsPage />
              </Route>
              {/* -----< End Class Details >----- */}

              {/* -----< EDIT CLASS DETAILS (1.6)>-------------------------- */}
              <TrainerRoute
                // Only administrators can see the edit class view
                exact
                path="/edit-class/:id">
                <CreateClassPage />
              </TrainerRoute>
              {/* -----< End Edit Class Details >----- */}

              {/* -----< REGISTERED CLASS VIEW (1.7)>-------------------------- */}
              <ProtectedRoute
                // If logged in: Shows the class details for a class the guest/member has registered for.
                exact
                path="/registered-class">
                <RegisteredClassPage />
              </ProtectedRoute>
              {/* -----< End Registered Class >----- */}

              {/* -----< ATTENDEES (1.8)>---------------------------------- */}
              <TrainerRoute
                // Only trainers and admin can see the class attendees view
                exact
                path="/class-details/:id/attendees">
                <AttendeesPage />
              </TrainerRoute>
              {/* -----< End Attendees >----- */}

              {/* -----< Personal Info (1.9)>----- */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/personal-info/"
              >
                <UserPage />
              </ProtectedRoute>
              {/* -----< Personal Info (1.9)>----- */}

              {/* ===============< Create Class (1.10)>----- */}
              <AdminRoute
                // Only administrators can see the create a class view
                exact
                path="/create-class">
                <CreateClassPage />
              </AdminRoute>
              {/* ===============< Create Class (1.10)>----- */}
              {/* =============================*< END APPROVED ROUTES >*============================= */}





              <Route
                exact
                path="/home">
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the /user page
                  // --------------------------< LOGGED IN: VIEW MY CLASSES >-------------------------- */}
                  <Redirect to="/my-classes" />
                  :
                  // --------------------------< LOGGED OUT: LANDING PAGE >-------------------------- */}
                  <LandingPage />
                }
              </Route>

              {/* --------------------------<If none of the other routes matched, we will show a 404. >--------------------------*/}
              <Route> <h1>404</h1> </Route>

            </Switch> {/*====================================< END SWITCH >==================================== */}
            {/* <Footer /> ---------------------< FOOTER COMPONENT >--------------------- */}
          </div>
        </Router> 
      </ThemeProvider>
    </>
  ); //====================================< END RETURN >====================================

} //====================================< END FUNCTION >====================================

export default App;
