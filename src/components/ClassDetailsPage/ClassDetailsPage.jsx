import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
function ClassDetailsPage() {
    //------------<  Setup  >-------------

    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {

        dispatch({
            type: 'FETCH_CLASS_DETAILS',
            payload: {id: id, userId: user.id}
        });

    }, [])


    //------------<  Variables  >----------
    const user = useSelector(store => store.user)
    const classDetails = useSelector(store => store.selectedClass.classDetails)



    //---------------<  C l i c k   H a n d l e r s  >----------------------------
    const handleReturnClick = () => {
        history.goBack();
    }
    const handleReserveClick = () => {
        console.log('Selected class is:', classDetails.id);

        dispatch({
            type: 'ADD_RESERVATION',
            payload: classDetails
        });
        alert("About to Add!")
        history.push('/my-classes')
    }

    const handleGpsClick = () => {
        // console.log('This would ideally open google maps');
    }

    //---------------<  E N D  C l i c k   H a n d l e r s  >----------------------------



    //---------------<  Temporary things to be deleted  >----------------------------
    // ----- DELETE this when we have a reducer/saga to replace it ------
    // const event = {id: 1,classname: "HIIT",description: "high intensity interval training",trainer_user_id: 2,date: "2022-04-12",start_time: "12:00:00",end_time: "13:00:00",location: "at the park?",class_size: 20};
    // ^^^^^^^^^^^^ DELETE this when we have a reducer/saga to replace it ^^^^^^^^^^^^^^^^^

    // To be completed on this page:
    // Eventually we'll get a trainer name, that will replace the trainer_user_id below
    // Link the gps to an actual google search query.
    //---------------< // END Temporary things to be deleted  >----------------------------
    console.log('these are the details pulled in from the reducer:', classDetails);
    console.log('this is the id pull from the url with params', id);
    return (
        <>
            <Nav />
            <h1>{classDetails.date}</h1>
            <h3>{classDetails.classname}</h3>
            <h3>led by: {classDetails.trainer_user_id}</h3>
            <h3>{classDetails.location} <button onClick={handleGpsClick}>gps</button></h3>
            <h3>{classDetails.start_time}-{classDetails.end_time}</h3>
            <h3>{classDetails.description}</h3>
            <button onClick={() => handleReturnClick(classDetails)}>Return</button>
            <button onClick={handleReserveClick} disabled={classDetails.is_my_class}>Reserve</button>
        </>
    )
}
export default ClassDetailsPage;