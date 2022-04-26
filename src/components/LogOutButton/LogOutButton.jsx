import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LogOutButton(props) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' })
    // history.push('/home')
  }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
