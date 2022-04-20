import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './CreateClassPage.css';

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
    //---------- Tools -----------


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


    // -------- TEST CODE, TO BE DELETED -------- TEST CODE, TO BE DELETED -------- TEST CODE, TO BE DELETED
    // console.log('access level', user.access_level);
    const testButtonDispatch = () => {
        console.log('testButtonDispatching');
        dispatch({ type: 'FETCH_CLASS_DETAILS', payload: 1 });
    }
    // -------- TEST CODE, TO BE DELETED -------- TEST CODE, TO BE DELETED -------- TEST CODE, TO BE DELETED


    //----------<  I n p u t   H a n d l e r s  >-----------
    const handleTrainerSelection = (selectedTrainerId) => {

        if (selectedTrainerId === 'reset') { // This checks for a reset command, which would then reset the selected trainer values.
            dispatch({
                type: 'REMOVE_CLASS_TRAINER'
            })
            dispatch({
                type: 'RESET_SELECTED_TRAINER'
            })
            return; // This stops the function from running further.
        }

        for (let trainer of availableTrainers) { // If a valid trainer is selected, this will loop through the list of possible trainers
            if (trainer.trainer_user_id == selectedTrainerId) { // to find matching information.

                // This dispatch will set the selectedTrainer reducer, which will update the trainer's photo.
                dispatch({
                    type: 'SET_SELECTED_TRAINER',
                    payload: {
                        trainer_user_id: trainer.trainer_user_id,
                        profile_image: trainer.profile_image,
                        name: trainer.name
                    }
                });

                // This dispatch will remove any trainer's Id from the classDetails reducer.
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
                    <input
                        disabled={disabledState}
                        type="text" name="class-name" value={classDetails.classname} onChange={handleChange('classname')} />
                </h4>

                {/* ------------ Select Trainer ----------------------------------------------- */}
                <h4>Led by:
                    <select name="trainer" id="trainer-selector"
                        disabled={disabledState}
                        placeholder='Trainer'
                        onChange={(event) => { handleTrainerSelection(event.target.value) }}>
                        {/* <option key={-1} onClick={dispatch({type:''})}>Select a Trainer</option> */}
                        <option key={-1} value={'reset'}>Select a Trainer</option>
                        {availableTrainers.map((trainer, i) => (
                            <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
                        ))}
                    </select>
                    {/* ---- Here's the trainer's image ---- */}
                    {/* <TrainerProfileImage /> */}
                    {selectedTrainer.profile_image ?
                        <img className='trainer-image' src={selectedTrainer.profile_image} alt="Profile image of the selected trainer" />
                        :
                        <div className='trainer-image' style={{ display: 'block' }}>This is a div</div>
                    }
                </h4>


                {/* ------------- Set Start Time ------------------------------ */}
                <h4>Start time:
                    <input
                        disabled={disabledState}
                        type="time" name="start-time" value={classDetails.start_time} onChange={handleChange('start_time')} />

                    {/* --------- Set End Time -------------------------------------- */}
                    End Time:
                    <input
                        disabled={disabledState}
                        type="time" name="end-time" value={classDetails.end_time} onChange={handleChange('end_time')} />
                </h4>

                {/* ------------- Set Location ------------------------------------------- */}
                <h4>Street:
                    <input
                        disabled={false}
                        type="text" name="street" value={classDetails.street} onChange={handleChange('street')} />
                </h4>

                <h4>City:
                    <input
                        disabled={false}
                        type="text" name="city" value={classDetails.city} onChange={handleChange('city')} />
                </h4>

                <h4>State:
                    <input
                        disabled={false}
                        type="text" name="state" value={classDetails.state} onChange={handleChange('state')} />
                </h4>

                <h4>Zip:
                    <input
                        disabled={false}
                        type="text" name="zip" value={classDetails.zip} onChange={handleChange('zip')} />
                </h4>

                {/* ---------- Set Description ------------------------------------------ */}
                <h4>Description:
                    <input
                        disabled={false}
                        type="text" name="" value={classDetails.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Set Class Size ---- */}
                <h4>Class Size:
                    <input
                        disabled={disabledState}
                        type="number" name="class-size" value={classDetails.class_size} onChange={handleChange('class_size')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">Submit</button>
            </form>

            <button onClick={testButtonDispatch}>TEST BUTTON</button>
            <button onClick={handleReturn}>Return</button>

        </>
    )
}
export default CreateClassPage;