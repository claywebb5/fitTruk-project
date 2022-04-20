import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AttendanceItem (props) {

    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);

    // feature to be added
    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    }

    // this sends a dispatch to the attendees reducer to update local state
    const checkUserIn = () => {
        console.log('this will update a piece of local state');
        dispatch({
            type: 'CHECK_USER_IN',
            payload: {
                attendees: attendees,
                userId: props.customer.id
            }
        })
    }

    return (
        <>
        {/* this checks if a user is checked in and renders the input based on the boolean value */}
        {props.customer.checked_in ?
        <div>
            {/* the attribute 'defaultChecked' is what allows the input to render in the 'checked' state */}
         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn} defaultChecked></input>
         <img src={props.customer.profile_image} alt="a pretty picture" />
         <label htmlFor="customer">{props.customer.username}</label>
         <button onClick={handleMessage}>Message user</button>
         </div>
           : 
        <div>
            {/* onChange could be used here instead of onClick due to it being the type 'checkbox'
            onClick used just due to it more semantic sense to me */}
         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn}></input>
         <img src={props.customer.profile_image} alt="a pretty picture" />
         <label htmlFor="customer">{props.customer.username}</label>
         <button onClick={handleMessage}>Message user</button>
         </div>
        }
        </>
    )
}

export default AttendanceItem