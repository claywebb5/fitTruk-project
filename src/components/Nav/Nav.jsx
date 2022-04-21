// import './Nav.css';
import React from 'react';
import { useSelector } from 'react-redux';
import AdminNav from './AdminNav';
import ProspectNav from './ProspectNav';
import CustomerNav from './CustomerNav';



// =================**< NAV BAR PARENT COMPONENT >**=========================

// ===========*< COLOR/FONT THEME >*===============
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



function Nav() {
  // ========< TOOLS >==============
  const user = useSelector((store) => store.user);


  return (
    <>
      {/* Not logged in, show the Prospect Nav Bar */}
      {!user.id && (
        <ProspectNav />
      )}

      {/* Logged in as a Customer or a Trainer */}
      {user.access_level <= 2 && (
        <CustomerNav />
      )}

      {/* Logged in as an Admin show the Admin Nav Bar */}
      {user.access_level === 3 && (
        <AdminNav />
      )}
    </>
  );
}

export default Nav;
