import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './LandingPage.css';
import './FTLandingPage.css';
import Button from '@mui/material/Button';
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
    <div className='body'>

      <div style={{

        paddingTop: '30px'
      }} className="container">
        {/* <h2><u>{heading}</u></h2> */}
        <div className='logo'>
          <img src={LogoAlt} />
        </div>
        <div className="grid">
          <div className="grid-col grid-col_4">


            <center>
              {/* <h4>What's Offered?</h4> */}
              <Button
                style={{
                  backgroundColor: "#ace23a",
                  color: "black",
                  fontFamily: 'Muli',
                  padding: 5,
                  width: 250,
                  // border: 0,
                  outline: 'solid',
                  // display: 'flex'

                }}
                variant="contained" className="btn btn_sizeSm" onClick={onSeeClasses}>
                <p>See Classes</p> 
              </Button>
            </center>
            <br />

            <center>
              {/* <h4>Want to Join?</h4> */}
              <Button
                style={{
                  backgroundColor: "#ace23a",
                  color: "black",
                  fontFamily: 'Muli',
                  padding: 5,
                  width: 250,
                  outline: 'solid'
                }}
                variant="contained" className="btn btn_sizeSm" onClick={onLogin}>
                <p>sign in</p> 
              </Button>
            </center>
            <br />
            <center>
              {/* <h4>Already a Member?</h4> */}
              <Button
                style={{
                  color: 'white',
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  fontFamily: 'Muli',
                  padding: 0,
                  width: 150,
                  outline: 'solid'
                }}
                onClick={onRegister}>
               <p>REGISTER</p> 
              </Button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
