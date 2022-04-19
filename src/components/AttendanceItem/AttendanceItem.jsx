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
        <li>{customer.customer.username}</li>
        </>
    )
}

export default AttendanceItem