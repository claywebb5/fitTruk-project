import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';

function ClassDetailsPage(){
    //------------<  Setup  >-------------
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
          type: 'FETCH_CLASS_DETAILS',
          payload: 1 // PART OF DUMMY DATA, WILL BE UPDATED ONCE :id IS ADDED TO ROUTING
        });
      }, [])

    //------------<  Variables  >----------
    // const user = useSelector(store => store.user)
    


    //---------------<  C l i c k   H a n d l e r s  >----------------------------
    const handleReturnClick = () => {
        history.goBack();
    }
    const handleReserveClick = () => {
        console.log('User ID is:');
        console.log('Ideally this should trigger a saga');
        // dispatch({type:'', payload: userId})
    }
    const handleGpsClick = () => {
        console.log('This would ideally open google maps');
    }
    //---------------<  E N D  C l i c k   H a n d l e r s  >----------------------------
    
    
    
//---------------<  Temporary things to be deleted  >----------------------------
// ----- DELETE this when we have a reducer/saga to replace it ------
const event = {id: 1,classname: "HIIT",description: "high intensity interval training",trainer_user_id: 2,date: "2022-04-12",start_time: "12:00:00",end_time: "13:00:00",location: "at the park?",class_size: 20};
// ^^^^^^^^^^^^ DELETE this when we have a reducer/saga to replace it ^^^^^^^^^^^^^^^^^

// To be completed on this page:
// Eventually we'll get a trainer name, that will replace the trainer_user_id below
// Link the gps to an actual google search query.
//---------------< // END Temporary things to be deleted  >----------------------------

    return(
        <>
            <Nav/>
            <h1>{event.date}</h1>
            <h3>{event.classname}</h3>
            <h3>led by: {event.trainer_user_id}</h3>
            <h3>{event.location} <button onClick={handleGpsClick}>gps</button></h3>
            <h3>{event.start_time}-{event.end_time}</h3>
            <h3>{event.description}</h3>
            <button onClick={handleReturnClick}>Return</button>
            <button onClick={handleReserveClick}>Reserve</button>
        </>
    )
}
export default ClassDetailsPage;