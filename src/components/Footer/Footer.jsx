import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Footer.css';
import { useSelector, useDispatch } from 'react-redux';



function Footer() {
  const userId = useSelector(store => store.user.id);
  return (

    <>
      {/* <footer>&copy; FitTruk</footer> */}
      {/* {!userId ? <> </>: <LogOutButton /> } */}
      
    </>
  )
}

export default Footer;
