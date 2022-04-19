import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function AttendanceItem (props) {

    // console.log(customer);

    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    }

    return (
        <>
        <div>
         <input type="checkbox" id="customer" value="user?"></input>
         <img src={props.customer.profile_image} alt="a pretty picture" />
         <label htmlFor="customer">{props.customer.username}</label>
         <button onClick={handleMessage}>Message user</button>
         </div>
        </>
    )
}

export default AttendanceItem