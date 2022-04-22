import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
//--------------< MUI IMPORTS >------------





function AttendeesPage() {
    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const history = useHistory();
    const attendees = useSelector(store => store.attendees);
    const { id } = useParams()

    useEffect(() => {
        dispatch({
            type: 'FETCH_ATTENDANCE',
            payload: id
        });
    }, []);

    // =====< CHECKING IN CUSTOMERS >===============
    const handleCheckIn = () => {
        console.log('send a dispatch to the server to update if users are checked in in the database');
        dispatch({
            type: 'UPDATE_ATTENDANCE',
            payload: {
                attendees,
                id
            }
        })
    };

    // --< GO BACK >-----
    const handleReturnClick = () => {
        history.goBack();
        console.log('Clicked Cancel');
    }


    return (
        <>
            <button onClick={handleCheckIn}>Check-In</button>

            {attendees.map((customer, i)=>(
                <AttendanceItem key={i} customer={customer}/>
            ))}

            <button onClick={handleReturnClick}>Back</button>
        </>
    );
};


export default AttendeesPage;