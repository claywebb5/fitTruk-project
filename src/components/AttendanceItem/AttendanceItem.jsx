import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';



function AttendanceItem(props) {

    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);

    // USER ICON
    let initials = '';

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

    console.log('These are the attendees:', attendees);

    // CLICK LISTENERS ===========
    const handleReturnClick = () => {
        history.goBack();
        console.log('Clicked Cancel');
    }

    return (
        <>
            {/* this checks if a user is checked in and renders the input based on the boolean value */}
            {props.customer.checked_in ?
                <div>
                    {/* the attribute 'defaultChecked' is what allows the input to render in the 'checked' state */}
                    <input type="checkbox" id="customer" value="user?" onClick={checkUserIn} defaultChecked></input>
                    {/* <img src={props.customer.profile_image} alt="a pretty picture" /> */}

                    {/* INITIALS AVATAR  */}
                    {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: deepPurple[500] }}>{initials}</Avatar>}

                    <label htmlFor="customer">{props.customer.first_name}</label>
                    <button onClick={handleMessage}>Message user</button>
                </div>
                :
                <div>
                    {/* onChange could be used here instead of onClick due to it being the type 'checkbox'
                    onClick used just due to it more semantic sense to me */}
                    <input type="checkbox" id="customer" value="user?" onClick={checkUserIn}></input>
                    {/* <img src={props.customer.profile_image} /> */}


                    {/* INITIALS AVATAR  */}
                    {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>}
                    <Avatar src={props.customer.profile_image} />

                    <label htmlFor="customer">{props.customer.first_name} {props.customer.last_name}</label>
                    <button onClick={handleMessage}>Message user</button>
                </div>
            }
        </>
    );
}

export default AttendanceItem;