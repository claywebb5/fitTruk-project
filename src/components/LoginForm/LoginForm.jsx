import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';
import fittruck from './FitTruk_Logo_Main.png'
import { useHistory } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleHomeScreen() {
    history.push('/home');
  }
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
      <div className='login'>
        <img
          src={fittruck}
          alt="Fit Truk Logo"
          style={{
            // width: '100%',
          }}
          onClick={handleHomeScreen} />
      </div>
      <form
        className="loginForm"
        onSubmit={login}>
        {/* <h2>Login</h2> */}
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div className='LoginInputs'>
          <label htmlFor="username">

            <TextField
              size='small'
              sx={{
                width: '250px',
                padding: 1,
               }}
              placeholder='Username'
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />


          <label htmlFor="password">

            <TextField sx={{
             width: '250px',
              // margin: 3,
              padding: 1,
            }}
              size='small'
              placeholder='Password'
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <br />

          {/* <input style={{
            backgroundColor: '#ace23a',
            color: '#41414c',
            borderRadius: '0.5rem',
            padding: '5',
            width: '250',
            fontFamily: 'Muli',
          }} className="btn" type="submit" name="submit" value="Log In" /> */}
          </div>
          <div>
          <Button
            style={{
              backgroundColor: "#ace23a",
              color: "black",
              fontFamily: 'Muli',
              padding: 0,
              // margin: 5,
              width: 200,
              outline: 'solid'
            }}
            variant="contained" className="btn btn_sizeSm" type='submit'>
            <p>Login</p>
          </Button>
        </div>
      </form>

    </>
  );
}

export default LoginForm;
