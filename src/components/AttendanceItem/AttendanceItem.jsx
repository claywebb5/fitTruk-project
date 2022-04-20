import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AttendanceItem (props) {

    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);

    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    }

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
        <>{props.customer.checked_in ?
        <div>
         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn} defaultChecked></input>
         <img src={props.customer.profile_image} alt="a pretty picture" />
         <label htmlFor="customer">{props.customer.username}</label>
         <button onClick={handleMessage}>Message user</button>
         </div>
           : 
        <div>
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