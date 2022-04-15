import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Nav from "../Nav/Nav";

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
    const trainers = useSelector(store => store.availableTrainers)
    const activeClass = useSelector(store => store.activeClass)
    const selectedTrainer = useSelector(store => store.selectedTrainer)

    //----------<  I n p u t   H a n d l e r s  >-----------


    const handleTrainerSelection = (trainerId) => {
        console.log('HandleTrainerSelection: I\'m handling trainer selection!');

        for (let trainer of trainers) {
            if (trainer.trainer_user_id == trainerId) {

                console.log('trainer:'); // Test log to ensure the objects are being retrieved properly.
                console.log('trainer:'); // Test log to ensure the objects are being retrieved properly.
                // dispatch({
                //     type: 'SET_ACTIVE_CLASS_TRAINER',
                //     payload: {
                //         trainer_user_id: trainer.trainer_user_id,
                //         profile_image: trainer.profile_image,
                //         name: trainer.name
                //     }
                // })

                dispatch({
                    type: 'SET_ACTIVE_CLASS_DETAILS',
                    payload: {
                        propertyName: 'trainer_user_id',
                        data: trainerId
                    }
                });
            }// End conditional statement
        }// End loop through trainer array
    }; // END handleTrainerSelection

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('This will submit the form');
        console.log('user data:'); // test log
        console.log(activeClass);
    }

    const handleChange = (prop) => (event) => {
        dispatch({
            type: 'SET_ACTIVE_CLASS_DETAILS',
            payload: {
                propertyName: prop,
                data: event.target.value
            }
        });
    }; // END handleChange


    //----------<  //  E N D   I n p u t   H a n d l e r s  >-----------


    return (
        <>
            <Nav />
            <h1>Create Class</h1>
            <form onSubmit={submitHandler}>

                {/* ---- Set Date ---- */}
                <h4>Date:
                    <input type="date" name="date" value={activeClass.date} onChange={handleChange('date')} />
                </h4>

                {/* ---- Set Class Name ---- */}
                <h4>Class name:
                    <input type="text" name="class-name" value={activeClass.classname} onChange={handleChange('classname')} />
                </h4>

                {/* ---- Select Trainer ---- */}
                <h4>Led by:
                    <select name="trainer" id="trainer-selector"
                        placeholder='Trainer'
                        onChange={(event) => { handleTrainerSelection(event.target.value) }}>
                        {trainers.map((trainer, i) => (
                            <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
                        ))}
                    </select>
                    {/* ---- Here's the trainer's image ---- */}
                    <img src={selectedTrainer.profile_image} alt="Profile image of the selected trainer" />
                    {/* <ImageRenderer /> */}
                </h4>


                {/* ---- Set Start Time ---- */}
                <h4>Start time:
                    <input type="time" name="start-time" value={activeClass.start_time} onChange={handleChange('start_time')} />


                    {/* ---- Set End Time ---- */}
                    End Time:
                    <input type="time" name="end-time" value={activeClass.end_time} onChange={handleChange('end_time')} />
                </h4>

                {/* ---- Set Location ---- */}
                <h4>Location:
                    <input type="text" name="location" value={activeClass.location} onChange={handleChange('location')} />
                </h4>

                {/* ---- Set Description ---- */}
                <h4>Description:
                    <input type="text" name="" value={activeClass.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Set Class Size ---- */}
                <h4>Class Size:
                    <input type="number" name="class-size" value={activeClass.class_size} onChange={handleChange('class_size')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">submit</button>
            </form>

        </>
    )
}
export default CreateClassPage;