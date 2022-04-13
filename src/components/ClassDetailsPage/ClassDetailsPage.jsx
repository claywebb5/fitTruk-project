// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';

function ClassDetailsPage(){
    const history = useHistory();

    const handleReturnClick = () => {
        history.goBack();
    }

    const gpsHandler = () => {
        console.log('This would ideally open google maps');
    }


// ----- DELETE this when we have a reducer/saga to replace it ------
const event = {id: 1,classname: "HIIT",description: "high intensity interval training",trainer_user_id: 2,date: "2022-04-12",start_time: "12:00:00",end_time: "13:00:00",location: "at the park?",class_size: 20};
// ^^^^^^^^^^^^ DELETE this when we have a reducer/saga to replace it ^^^^^^^^^^^^^^^^^


// To be completed on this page:
// Eventually we'll get a trainer name, that will replace the trainer_user_id below
// Link the gps to an actual google search query.

    return(
        <>
            <Nav/>
            <h1>{event.date}</h1>
            <h3>{event.classname}</h3>
            <h3>led by: {event.trainer_user_id}</h3>
            <h3>{event.location} <button onClick={gpsHandler}>gps</button></h3>
            <h3>{event.start_time}-{event.end_time}</h3>
            <h3>{event.description}</h3>
            <button onClick={handleReturnClick}>Return</button>
        </>
    )
}
export default ClassDetailsPage;