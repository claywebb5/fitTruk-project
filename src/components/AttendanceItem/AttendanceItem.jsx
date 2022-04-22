import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//--------------< MUI IMPORTS >------------
import Avatar from '@mui/material/Avatar';



function AttendanceItem(props) {
    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);

    // ======< USER ICON LOGIC >============================== 
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
    };

    // ======< INDIVIDUAL MESSAGE >===============================
    // LINK TO MUI SNACKBAR FOR MESSAGE SENT NOTIFICATION: https://mui.com/material-ui/react-snackbar/ 
    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    };

    // this sends a dispatch to the attendees reducer to update local state
    const checkUserIn = () => {
        console.log('this will update a piece of local state');
        dispatch({
            type: 'CHECK_USER_IN',
            payload: {
                attendees: attendees,
                userId: props.customer.id
            }
        });
    };



    return (
        <>
            {props.customer.checked_in ?
                // ===================< CHECKED IN >===================================
                <div>
                    <h4>Checked In</h4>                    
                    {/* the attribute 'defaultChecked' is what allows the input to render in the 'checked' state */}
                    <input type="checkbox" id="customer" value="user?" onClick={checkUserIn} defaultChecked></input>
                    
                    {/* INITIALS AVATAR  */}
                    {/* {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>} */}
                    
                    {/* PROFILE PICTURE AVATAR  */}
                    <Avatar src={props.customer.profile_image} />
                    
                    {/* CUSTOMER NAME  */}
                    <label htmlFor="customer">{props.customer.first_name} {props.customer.last_name}</label>
                   
                    {/* MESSAGE BUTTON */}
                    <button onClick={handleMessage}>Message User</button>                
                </div>
                :
                // ===================< NOT CHECKED IN >===================================
                <div>
                    <h4>Not Checked In</h4>
                    {/* onChange could be used here instead of onClick due to it being the type 'checkbox'
                    onClick used just due to it more semantic sense to me */}
                    <input type="checkbox" id="customer" value="user?" onClick={checkUserIn}></input>

                    {/* INITIALS AVATAR  */}
                    {/* {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>} */}
                    
                    {/* PROFILE PICTURE AVATAR  */}
                    <Avatar src={props.customer.profile_image} />
                    
                    {/* CUSTOMER NAME  */}
                    <label htmlFor="customer">{props.customer.first_name} {props.customer.last_name}</label>
                   
                    {/* MESSAGE BUTTON */}
                    <button onClick={handleMessage}>Message User</button>            
                </div>
            }


        </>
    );
}

export default AttendanceItem;