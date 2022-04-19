// ==================================< PERSONAL INFO PAGE >====================================================
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();

  // Default user info from original repo
  const user = useSelector((store) => store.user);


  //  ============<>=============
  let userObj = {
    id: user.id,
    username: user.username,
    password: user.password,
    name: user.name,
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
    access_level: user.access_level
  }

  const [editUser, setEditUser] = useState(userObj);
  const name = user.name
  const words = name.split(' ');
  const initials = [];
 

  const handleTest = () => {
    console.log('The user is:', user);
    console.log('The userObj is:', userObj);
    console.log('The state of editUser is:', editUser);

    // console.log('name', name)
    // console.log('words', words)
    for (const i of words) {
      initials.push(i[0])
    }

    console.log('initials are:', initials)
    console.log('initials together are', initials.join('') )
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


  return (
    <>
      <h1><u>Personal Info Page</u></h1>

      <button onClick={handleTest}>Test userObj</button>


      <div className="container">
        <form onSubmit={handleSubmit}>

          <div> {/* CAN EDIT  */}
            <h2>*Profile Image Here*</h2>
          </div>

          <h2>Welcome, {user.name}!</h2>

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
