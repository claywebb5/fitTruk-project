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
            // payload: id // PART OF DUMMY DATA, WILL BE UPDATED ONCE :id IS ADDED TO ROUTING
            payload: { id: id, userId: user.id }
        });
    }, [])

    const classDetails = useSelector(store => store.selectedClass.classDetails)

    // ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER--------
    const user = useSelector(store => store.user)
    // ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER--------


    //------------<  Variables  >----------
    // const user = useSelector(store => store.user)
    const [showMap, setShowMap] = useState(false)


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
    const handleGpsClick = (showMap) => {
        // console.log('This will show google maps');
        // setShowMap(!showMap)
    }
    const handleCancelClick = () => {
        console.log('you canceled the class', classDetails)

        dispatch({
            type: 'REMOVE_RESERVATION',
            payload: classDetails
        });
        alert("About to Remove")
        history.push('/my-classes')
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
    console.log('this is the value of show map', showMap);
    return (
        <>
            <Nav />
            <h1>{classDetails.clean_format_date}</h1>
            <h1>{classDetails.week_day_name}</h1>
            <h3>{classDetails.classname}</h3>
            <h3>led by: {classDetails.trainer_user_id}</h3>
            <h3>{classDetails.location} <button onClick={() => handleGpsClick(showMap)}>gps</button></h3>
            {showMap ? <iframe
                width="100%"
                height="250"
                frameBorder="0" style={{ border: 0 }}
                // referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=ADD_KEY_HERE&q=44.952975,-93.21846" //the 'q' or "Query" can be text aswell as coordinates, these coords are DUMMY DATA
            >
            </iframe> : <p>Im not a map</p>}
            <h3>{classDetails.start_time}-{classDetails.end_time}</h3>
            <h3>{classDetails.description}</h3>
            <button onClick={() => handleReturnClick(classDetails)}>Return</button>
            {(function () {
                if (classDetails.is_my_class) {
                    return <button onClick={handleCancelClick}>Cancel Reservation</button>;
                } else {
                    return <button onClick={handleReserveClick}>Reserve</button>;
                }
            })()}

            {/* ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER-------- */}
            {user.access_level >= 2 && <button onClick={() => { history.push(`/edit-class/${classDetails.id}`) }}>edit class</button>}
            {/* ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER-------- */}
        </>
    )
}
export default ClassDetailsPage;