// ==================================< PERSONAL INFO PAGE >====================================================
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  // Default user info from original repo
  const user = useSelector((store) => store.user);


  //  ============<ON PAGE LOAD>=============
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_CUSTOMER_INFO' }); // Trigger customer.saga
  // }, []);

    //  ============<>=============
    let userObj = {
      id: user.id,
      username: user.username,
      password: user.password,
      name: user.name,
      email: user.email,
      address: user.address,
      dob: user.dob,
      phoneNumber: user.phoneNumber,
      pronouns: user.pronouns,
      emergencyName: user.emergencyName,
      emergencyNumber: user.emergencyNumber,
      access_level: user.access_level
    }

    const [editUser, setEditUser] = useState(userObj);

    //  ============< Pronoun Change >=============
    const handlePronounChange = (event) => {
      // setEditUser({...editUser, pronouns: event.target.value})
  };

  //  ============< Address Change >=============
  const handleAddressChange = (event) => {
    // setEditUser({...editUser, address: event.target.value})
};

  //  ============< Submit >=============
  const handleSubmit = () => {
    event.preventDefault();
    let updatedUser = editUser;
    updatedUser = {...updatedUser};
    console.log('Updated user info is:', updatedUser);
    dispatch({
      type: 'UPDATE_CUSTOMER_INFO',
      payload: updatedUser
    });
    history.push('/personal-info')
  }



  return (
    <>
      <h1><u>Personal Info Page</u></h1>

      <div className="container">

        <div> {/* CAN EDIT  */}
          <h2>*Profile Image Here*</h2>
        </div>

        <h2>Welcome, {user.name}!</h2>

        <div> {/* CAN EDIT  */}
          <p><b>Pronouns:</b> {user.pronouns}</p>
          <select onChange={(event) => setPronouns(event.target.value)}>
            <option> He/Him</option>
            <option> She/Her</option>
            <option> They/Them</option>
          </select>
        </div>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Number:</b> {user.phone_number}</p>

        <div> {/* CAN EDIT  */}
          <p><b>Address:</b> {user.address}</p>
          <input 
            type="text"
            // placeholder={user.}
            // value={user.}
          />
        </div>

        <p>------- In case of emergencies ---------</p>
        <p><b>Emergency Contact:</b> {user.emergency_name}</p>
        <p><b>Number:</b> {user.emergency_number}</p>
      </div>

      <button>Back</button>
      <button>Save</button>
    </>
  );
}


export default UserPage;
