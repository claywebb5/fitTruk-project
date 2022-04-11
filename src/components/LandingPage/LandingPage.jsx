import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Landing Page View');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2><u>{heading}</u></h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            <b>*See Classes Button*</b>
          </p>
          <p>
            <b>*Register will take user to the liability waiver/register view*</b>
          </p>
          <p>
            <b>*Login will take user to the login view*</b>
          </p>
        </div>
        <div className="grid-col grid-col_4">
          {/* <RegisterForm /> */}
          <center>
            <h4>What's Offered?</h4>
            <button className="btn btn_sizeSm">
              See Classes
            </button>
          </center>

          <center>
            <h4>Want to Join?</h4>
            <button className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </button>
          </center>

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
