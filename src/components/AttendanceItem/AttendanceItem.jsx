import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function AttendanceItem (customer) {

    console.log(customer);
    return (
        <>
         <input type="checkbox" id="customer" value="user?"></input>
         <label htmlFor="customer">{customer.customer.username}</label><br></br>
    

        </>
    )
}

export default AttendanceItem