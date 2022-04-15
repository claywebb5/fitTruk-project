import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ** Trainers can view the list of signed up guests/members for a specific class
// ** Trainers can check in guests/members upon arrival
// ** Trainers can send individual messages to guests/members
// ** STRETCH: Trainers can remove guests/members
// ** STRETCH: Trainers can send messages to ALL guests/members



function AttendeesPage(){
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);
    const userId = useSelector(store => store.user.id);

    return(
        <>
        <ul>
            <li>{attendees.name}</li>
        </ul>

        </>
    )
}
export default AttendeesPage;