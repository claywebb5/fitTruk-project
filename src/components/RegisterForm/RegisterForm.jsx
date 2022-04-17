import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [dob, setDob] = useState('');
  const [pronouns, setPronouns] = useState();
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('')

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  // function handlePronounSelection(e){
  //   setPronouns(e.target.value)
    
  // }

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        name: name,
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
  // console.log(pronouns);

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            name="phone"
            value={phoneNumber}
            required
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="street">
          street:
          <input
            type="text"
            name="street"
            value={street}
            required
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="City">
          City:
          <input
            type="text"
            name="City"
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="state">
          State:
          <input
            type="text"
            name="State"
            value={state}
            required
            onChange={(event) => setState(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="zip">
          Zip:
          <input
            type="text"
            name="Zip"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </label>
      </div>
      <div>
        <select onChange={(event) => setPronouns(event.target.value)}> 
        <option> Select Pronouns</option>
          <option> He/Him</option>
          <option> She/Her</option>
          <option> They/Them</option>
          
          </select>
      </div>
      <div>
        <label htmlFor="dob">
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={dob}
            required
            onChange={(event) => setDob(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="emergencyName">
          Emergency Name:
          <input
            type="text"
            name="emergency Name"
            value={emergencyName}
            required
            onChange={(event) => setEmergencyName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="emergencyNumber">
          Emergency Number:
          <input
            type="text"
            name="emergency Number"
            value={emergencyNumber}
            required
            onChange={(event) => setEmergencyNumber(event.target.value)}
          />
        </label>
      </div>

      
      

      

      
      
      {/* =========<LIABILITY WAIVER>================ */}
      <div>
        <label>
          Liability Waiver will go here:
          <input/>
        </label>
      </div>
      
      {/* =========<LIABILITY WAIVER>================ */}

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
