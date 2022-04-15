import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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



    // useEffect(() =>{
    //     // Edit class view
    //     if (classId) {
    //         dispatch({ 
    //             type: 'FETCH_ACTIVE_CLASS',
    //             payload: classId
    //         });
    //     }
    //     // Create class view
    //     else {
    //         dispatch({
    //             type: 'RESET_ACTIVE_CLASS'
    //         })
    //     }
    // }, [classId]);





    //---------- Variables -----------
    const availableTrainers = useSelector(store => store.availableTrainers)
    const classDetails = useSelector(store => store.selectedClass.classDetails)
    const selectedTrainer = useSelector(store => store.selectedClass.selectedTrainer)

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
    }
    //----------<  //  E N D   I n p u t   H a n d l e r s  >-----------


    return (
        <>
            <Nav />
            <h1>Create Class</h1>
            <form onSubmit={submitHandler}>

                {/* ---- Set Date ---- */}
                <h4>Date:
                    <input type="date" name="date" value={classDetails.date} onChange={handleChange('date')} />
                </h4>

                {/* ---- Set Class Name ---- */}
                <h4>Class name:
                    <input type="text" name="class-name" value={classDetails.classname} onChange={handleChange('classname')} />
                </h4>

                {/* ---- Select Trainer ---- */}
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


                {/* ---- Set Start Time ---- */}
                <h4>Start time:
                    <input type="time" name="start-time" value={classDetails.start_time} onChange={handleChange('start_time')} />


                    {/* ---- Set End Time ---- */}
                    End Time:
                    <input type="time" name="end-time" value={classDetails.end_time} onChange={handleChange('end_time')} />
                </h4>

                {/* ---- Set Location ---- */}
                <h4>Location:
                    <input type="text" name="location" value={classDetails.location} onChange={handleChange('location')} />
                </h4>

                {/* ---- Set Description ---- */}
                <h4>Description:
                    <input type="text" name="" value={classDetails.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Set Class Size ---- */}
                <h4>Class Size:
                    <input type="number" name="class-size" value={classDetails.class_size} onChange={handleChange('class_size')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">submit</button>
            </form>

        </>
    )
}
export default CreateClassPage;