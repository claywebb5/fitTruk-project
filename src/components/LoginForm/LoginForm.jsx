import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';
import fittruck from './fittruck.jpg'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

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
    <img src= {fittruck} alt="" style={{
      height: '100px',
      
    }}  />
    <form  style ={{
      marginTop: '50px'
    }} className="formPanel" onSubmit={login}>
      {/* <h2>Login</h2> */}
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
         
          <TextField
          
          size='small'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ace23a',
            borderRadius: 10
            
            
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
      </div>
      <div>
        <label htmlFor="password">
          
          <TextField style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           
           
          
            
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
      </div>
      <br />
      <div style={{
        display: 'flex',
         justifyContent: 'center',
         
      }}>
        <input style={{
          backgroundColor: '#ace23a',
          color: '#41414c',
          borderRadius: '0.5rem',
          padding: '0.5rem, 1.25rem',
          width: '100px',
          fontFamily: 'Muli',
          
        
        
        }} className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
    </>
  );
}

export default LoginForm;
