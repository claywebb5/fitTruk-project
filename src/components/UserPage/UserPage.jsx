// ==================================< PERSONAL INFO PAGE >====================================================
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function UserPage() {

  // ======*** LINK TO MUI CHIPS FOR EDITABLE INPUTS: https://mui.com/material-ui/react-chip/

  const dispatch = useDispatch();
  const history = useHistory();

  // Default user info from original repo
  const user = useSelector((store) => store.user);

  console.log('User:', user);
  //  ============<>=============
  let userObj = {
    id: user.id,
    username: user.username,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    street: user.street,
    city: user.city,
    state: user.state,
    zip: user.zip,
    dob: user.dob,
    phone_number: user.phone_number,
    pronouns: user.pronouns,
    emergency_name: user.emergency_name,
    emergency_number: user.emergency_number,
    access_level: user.access_level,
    profile_pic: user.profile_image
  }

  const [editUser, setEditUser] = useState(userObj);
  let initials = '';


  const handleTest = () => {
    console.log('The user is:', user);
    console.log('The userObj is:', userObj);
    console.log('The state of editUser is:', editUser);

  }

  //  ============< Pronoun Change >=============
  const handlePronounChange = (event) => {
    console.log('New Pronoun:', event.target.value);

    setEditUser({ ...editUser, pronouns: event.target.value });
    console.log('In handlePronounChange');

  };

  //  ============< Address Change >=============
  const handleChangeStreet = (event) => {
    setEditUser({ ...editUser, street: event.target.value });
  };

  const handleChangeCity = (event) => {
    setEditUser({ ...editUser, city: event.target.value });
  };

  const handleChangeState = (event) => {
    setEditUser({ ...editUser, state: event.target.value });
  };

  const handleChangeZip = (event) => {
    setEditUser({ ...editUser, zip: event.target.value });
  };

  //  ============< Submit >==============================================
  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedUser = editUser;
    updatedUser = { ...updatedUser };
    console.log('Clicked Submit');
    console.log('Updated user info is:', updatedUser);
    dispatch({
      type: 'UPDATE_CUSTOMER_INFO',
      payload: updatedUser
    });
  }

  const handleReturnClick = () => {
    history.goBack();
    console.log('Clicked Cancel');
  }

  const getInitials = (nameObject) => {
    let firstLetter = 'H';
    let secondLetter = 'i';

    if (nameObject.first_name && nameObject.last_name) {
      firstLetter = (nameObject.first_name[0]).toUpperCase();
      secondLetter = (nameObject.last_name[0]).toUpperCase();
    } else if (nameObject.first_name) {
      firstLetter = (nameObject.first_name[0]).toUpperCase();
      secondLetter = (nameObject.first_name[1]);
    }
    initials = firstLetter + secondLetter;
    return true;
  }


  return (
    <>
      <h1><u>Personal Info Page</u></h1>

      {/* <button onClick={handleTest}>Test userObj</button> */}


      <div className="container">
        <form onSubmit={handleSubmit}>

          <div> {/* CAN EDIT  */}
            

            {/* ------ This will conditionally render a two letter string from the first/last name of the user, and it won't break the app if either of those two values isn't present ------ */}
            {(getInitials(user)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>}

            {/*=====< AVATAR WITH USER PROFILE PICTURE >====*/}
            {/* <Avatar src={user.profile_image} /> */}

          </div>

          <h2>Welcome, {user.first_name}!</h2>
          <div> {/* CAN EDIT  */}
            <p><b>Pronouns:</b> {user.pronouns}</p>
            <select onChange={handlePronounChange} value={editUser.pronouns}>
              <option value="He/Him"> He/Him</option>
              <option value="She/Her"> She/Her</option>
              <option value="They/Them"> They/Them</option>
            </select>
          </div>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Number:</b> {user.phone_number}</p>

          <div> {/* CAN EDIT  */}
            <p><b>Street:</b> {user.street}</p>
            <input
              type="text"
              placeholder={user.street}
              value={editUser.street}
              onChange={handleChangeStreet}
            />
          </div>
          <div>
            <p><b>City:</b> {user.city}</p>
            <input
              type="text"
              placeholder={user.city}
              value={editUser.city}
              onChange={handleChangeCity}
            />
          </div>
          <div>
            <p><b>State:</b> {user.state}</p>
            <input
              type="text"
              placeholder={user.state}
              value={editUser.state}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <p><b>Zip:</b> {user.zip}</p>
            <input
              type="text"
              placeholder={user.zip}
              value={editUser.zip}
              onChange={handleChangeZip}
            />
          </div>

          <p>------- In case of emergencies ---------</p>
          <p><b>Emergency Contact:</b> {user.emergency_name}</p>
          <p><b>Number:</b> {user.emergency_number}</p>
          <button onClick={handleReturnClick}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
      </div>


    </>
  );
}


export default UserPage;
