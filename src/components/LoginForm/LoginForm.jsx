import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
            width: '100%',
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



        <label htmlFor="username">

          <TextField
            size='small'
            sx={{
              width: '250px',
            }}
            placeholder='Username'
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          <TextField sx={{
            width: '250px',
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
        <Button variant="contained" sx={{ width: 200 }} type='submit'>
          <Typography style={{ color: "#000000", display: 'block' }} variant="body1" >
            Login
          </Typography>
        </Button>

        <Button variant="outlined"
          onClick={() => {
            history.push('/registration');
          }}>
          <Typography style={{ color: "#000000", display: 'block', border: 2, borderColor: 'primary' }} variant="body1" >
            Register
          </Typography>
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
