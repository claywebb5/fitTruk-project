// ==================================< PERSONAL INFO PAGE >====================================================
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  // Default user info from original repo
  const user = useSelector((store) => store.user); 
  // Customer info from PersonalinfoReducer (User info ^ is getting all customer info?)
  const customer = useSelector(store => store.PersonalinfoReducer);


  //  ============<ON PAGE LOAD>=============
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_CUSTOMER_INFO' }); // Trigger customer.saga
  // }, []);


  return (
    <>
      <h1><u>Personal Info Page</u></h1>

      <div className="container">
        <h2>*Profile Image Here*</h2> {/* CAN EDIT  */}
        <h2>Welcome, {user.name}!</h2>
        <p><b>Pronouns:</b> {user.pronouns}</p> {/* CAN EDIT  */}
        <p><b>Email:</b> {user.email}</p>
        <p><b>Number:</b> {user.phone_number}</p>
        <p><b>Address:</b> {user.address}</p>
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
