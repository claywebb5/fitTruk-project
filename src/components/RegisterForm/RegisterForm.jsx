import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [dob, setDob] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePronounSelection = (event) => {
    setPronouns(event.target.value);
  };

  function handleHomeScreen() {
    history.push('/home');
  }

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        street: street,
        city: city,
        state: state,
        zip: zip,
        dob: dob,
        phoneNumber: phoneNumber,
        pronouns: pronouns,
        emergencyName: emergencyName,
        emergencyNumber: emergencyNumber

      },
    });
  }; // end registerUser

  return (
    <>
      <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
      }}>
        <img src={logo} alt="" style={{
          height: '100px',
        }} onClick={handleHomeScreen} />
        <form

          className="formPanel" onSubmit={registerUser}>
          <h2>Sign Up Below! </h2>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
          <div>
            <label htmlFor="username">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Username" variant="outlined"
                type="text"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
          <br />

          <div>

            <label htmlFor="password">

              <TextField

                style={{
                  width: '100%',

                }}
                label="Password" variant="outlined"
                type="password"
                name="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="first-name">

              <TextField
                style={{
                  width: '100%'
                }}
                label="First Name" variant="outlined"
                type="text"
                name="first-name"
                value={firstName}
                required
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="last-name">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Last Name" variant="outlined"
                type="text"
                name="last-name"
                value={lastName}
                required
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="email">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Email" variant="outlined"
                type="text"
                name="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="phone">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Phone" variant="outlined"
                type="text"
                name="phone"
                value={phoneNumber}
                required
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="street">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Street" variant="outlined"
                type="text"
                name="street"
                value={street}
                required
                onChange={(event) => setStreet(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="City">

              <TextField
                style={{
                  width: '100%'
                }}
                label="City" variant="outlined"
                type="text"
                name="City"
                value={city}
                required
                onChange={(event) => setCity(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="state">

              <TextField
                style={{
                  width: '100%'
                }}
                label="State" variant="outlined"
                type="text"
                name="State"
                value={state}
                required
                onChange={(event) => setState(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="zip">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Zip" variant="outlined"
                type="text"
                name="Zip"
                value={zip}
                required
                onChange={(event) => setZip(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <InputLabel id="demo-simple-select-label">Pronouns</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pronouns}
              label="Pronouns"
              onChange={handlePronounSelection}
            >
              <MenuItem value="He/Him">He/Him</MenuItem>
              <MenuItem value="She/Her">She/Her</MenuItem>
              <MenuItem value="They/Them" >They/Them</MenuItem>
            </Select>
          </div>
          <br />
          <div>
            <label htmlFor="dob">
              DOB:
              <TextField
                style={{
                  width: '100%'
                }}
                variant="outlined"
                type="date"
                name="dob"
                value={dob}
                required
                onChange={(event) => setDob(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="emergencyName">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Emergency Name" variant="outlined"
                type="text"
                name="emergency Name"
                value={emergencyName}
                required
                onChange={(event) => setEmergencyName(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="emergencyNumber">

              <TextField
                style={{
                  width: '100%'
                }}
                label="Emergency Number" variant="outlined"
                type="text"
                name="emergency Number"
                value={emergencyNumber}
                required
                onChange={(event) => setEmergencyNumber(event.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <input className="btn" type="submit" name="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
