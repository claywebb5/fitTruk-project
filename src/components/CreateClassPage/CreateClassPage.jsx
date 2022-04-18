import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Nav from "../Nav/Nav";
import './CreateClassPage.css';
// import TrainerProfileImage from './TrainerProfileImage';

// ** ONLY ADMIN CAN SEE **
// ** Admin can create a new class by: naming the class/selecting a date/..
// trainer/start & end time/location/amount of spots/description/
// ** Back button will act as a cancel with an alert & return to all classes
// ** The create event will confirm the class and bring to all classes view


function CreateClassPage() {
    //---------- Tools -----------
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const classId = params.id;


    useEffect(() => {
        // Edit class view
        if (classId) {
            dispatch({ 
                type: 'FETCH_CLASS_DETAILS',
                payload: classId
            });
        }
        // Create class view
        else {
            dispatch({ type: 'RESET_CLASS_DETAILS' });
        }
    }, []);


    //---------- Variables -----------
    const availableTrainers = useSelector(store => store.availableTrainers)
    const user = useSelector(store => store.user)
    const classDetails = useSelector(store => store.selectedClass.classDetails)
    const selectedTrainer = useSelector(store => store.selectedClass.selectedTrainer)

    console.log('access level', user.access_level);


    //----------<  I n p u t   H a n d l e r s  >-----------
    const handleTrainerSelection = (selectedTrainerId) => {
        for (let trainer of availableTrainers) {
            if (trainer.trainer_user_id == selectedTrainerId) {

                // console.log(trainer.name); // Test log to ensure the objects are being retrieved properly.

                dispatch({
                    type: 'SET_ACTIVE_CLASS_TRAINER',
                    payload: {
                        trainer_user_id: trainer.trainer_user_id,
                        profile_image: trainer.profile_image,
                        name: trainer.name
                    }
                });

                dispatch({
                    type: 'EDIT_CLASS_DETAILS',
                    payload: {
                        propertyName: 'trainer_user_id',
                        key: trainer.trainer_user_id
                    }
                });
            }// End conditional statement
        }// End loop through trainer array
    }; // END handleTrainerSelection


    const handleChange = (prop) => (event) => {
        dispatch({
            type: 'EDIT_CLASS_DETAILS',
            payload: {
                propertyName: prop,
                key: event.target.value
            }
        });
    }; // END handleChange

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('This will submit the form');
        console.log(classDetails);
        dispatch({
            type: 'CREATE_CLASS',
            payload: classDetails
        });
        history.push('/all-classes');
    }
    //----------<  //  E N D   I n p u t   H a n d l e r s  >-----------

    //----------< CLICK LISTENERS >------------------------------
    const handleReturn = () => {
        console.log('Clicked Return');
        history.goBack();
    }

    let disabledState;

    if (user.access_level == 3) {
        disabledState = false;
    } else {
        disabledState = true;
    }


    return (
        <>
            <Nav />
            <h1>Create Class</h1>
            <form onSubmit={submitHandler}>

                {/* --------------- Set Date -------------------------------------------------- */}
                <h4>Date:
                    <input
                        disabled={disabledState}
                        type="date" name="date" value={classDetails.date} onChange={handleChange('date')} />
                </h4>

                {/* ------------ Set Class Name --------------------------------------------- */}
                <h4>Class name:
                    <input type="text" name="class-name" value={classDetails.classname} onChange={handleChange('classname')} />
                </h4>

                {/* ------------ Select Trainer ----------------------------------------------- */}
                <h4>Led by:
                    <select name="trainer" id="trainer-selector"
                        placeholder='Trainer'
                        onChange={(event) => { handleTrainerSelection(event.target.value) }}>
                        {availableTrainers.map((trainer, i) => (
                            <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
                        ))}
                    </select>
                    {/* ---- Here's the trainer's image ---- */}
                    {/* <TrainerProfileImage /> */}
                    {selectedTrainer.profile_image ?
                        <img className='trainer-image' src={selectedTrainer.profile_image} alt="Profile image of the selected trainer" />
                        :
                        <div className='trainer-image' >This is a div</div>
                    }
                </h4>


                {/* ------------- Set Start Time ------------------------------ */}
                <h4>Start time:
                    <input type="time" name="start-time" value={classDetails.start_time} onChange={handleChange('start_time')} />

                    {/* --------- Set End Time -------------------------------------- */}
                    End Time:
                    <input type="time" name="end-time" value={classDetails.end_time} onChange={handleChange('end_time')} />
                </h4>

                {/* ------------- Set Location ------------------------------------------- */}
                <h4>Street:
                    <input type="text" name="street" value={classDetails.street} onChange={handleChange('street')} />
                </h4>

                <h4>City:
                    <input type="text" name="city" value={classDetails.city} onChange={handleChange('city')} />
                </h4>

                <h4>State:
                    <input type="text" name="state" value={classDetails.state} onChange={handleChange('state')} />
                </h4>

                <h4>Zip:
                    <input type="text" name="zip" value={classDetails.zip} onChange={handleChange('zip')} />
                </h4>

                {/* ---------- Set Description ------------------------------------------ */}
                <h4>Description:
                    <input type="text" name="" value={classDetails.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Set Class Size ---- */}
                <h4>Class Size:
                    <input type="number" name="class-size" value={classDetails.class_size} onChange={handleChange('class_size')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">Submit</button>
            </form>

            <button onClick={handleReturn}>Return</button>

        </>
    )
}
export default CreateClassPage;