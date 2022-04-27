import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './FTLandingPage.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontFamily } from '@mui/system';
import blackLogo from '../LandingPage/blackFitTrucklogo.png'
import LogoAlt from './FitTruk_Logo_Alt.png'


function LandingPage() {
  const [heading, setHeading] = useState('Landing Page View');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  const onSeeClasses = (event) => {
    history.push('/all-classes');
  };

  return (
    <div className='body' style={{ height: window.innerHeight }}>
      <div className="container">
        <div className='logo'>
          <img src={LogoAlt} />
        </div>

        <div className='btngroup'>
          <Button variant="contained" onClick={onSeeClasses}>
            <Typography style={{ color: "#000000", display: 'block', width:200 }} variant="body1" >
              See Classes
            </Typography>
          </Button>

          <br />

          <Button variant="contained" onClick={onLogin}>
            <Typography
              style={{ color: "#000000", display: 'block' }} variant="body1" >
              Login
            </Typography>
          </Button>

          <br />

          <Button className='register-btn' variant="outlined" sx={{ border: 2, borderColor: 'primary' }} onClick={onRegister}>
            <Typography
              style={{ color: "#ace23a", display: 'block', textDecoration: 'underline' }} variant="body1" >
              Register
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
