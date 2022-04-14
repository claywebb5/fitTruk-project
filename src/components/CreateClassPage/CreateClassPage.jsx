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








    //---------- Variables -----------
    const trainers = useSelector(store => store.availableTrainers)
    const activeClass = useSelector(store => store.activeClass)
    // With this single useState, we can hold every piece of information needed,
    // and this can be transplanted into a global reducer and this local useState
    // can be deleted later on.

    // const [values, setValues] = useState({
    //     trainer_user_id: '',
    //     date: '',
    //     classname: '',
    //     start_time: '',
    //     end_time: '',
    //     location: '',
    //     description: '',
    //     class_size: '',
    // })
    //----------<  I n p u t   H a n d l e r s  >-----------
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value }); // This sets the value of the variable based on which variable it pertains to.
        console.log(`${prop} updated to: ${event.target.value}`); // Test log
    }; // END handleChange


    const handleTrainerSelection = (trainerId) => {
        console.log('HandleTrainerSelection: I\'m handling trainer selection!');

        for (let trainer of trainers) {
            if (trainer.trainer_user_id == trainerId) {
                let displayed_trainer_image = trainer.profile_image;
                let displayed_trainer_name = trainer.name;
                
                // export default ImageRenderer = (){
                //     let displayed_trainer_image = trainer.profile_image;
                //     let displayed_trainer_name = trainer.name;
                    
                // }

                console.log('trainer:', trainer.name); // Test log to ensure the objects are being retrieved properly.
                console.log('trainer:', trainer.profile_image); // Test log to ensure the objects are being retrieved properly.
                
                setValues({
                    ...values,
                    trainer_user_id: trainerId,
                })
            }// End conditional statement
        }// End loop through trainer array
        console.log('trainer:', displayed_trainer_image); // Test log to ensure the objects are being retrieved properly.
        console.log('trainer:', displayed_trainer_name); // Test log to ensure the objects are being retrieved properly.
    }; // END handleTrainerSelection

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('This will submit the form');
        console.log(values);
    }
    //----------<  //  E N D   I n p u t   H a n d l e r s  >-----------


    return (
        <>
            <Nav />
            <h1>Create Class</h1>
            <form onSubmit={submitHandler}>

                {/* ---- Set Date ---- */}
                <h4>Date:
                    <input type="date" name="date" value={values.date} onChange={handleChange('date')} />
                </h4>

                {/* ---- Set Class Name ---- */}
                <h4>Class name:
                    <input type="text" name="class-name" value={values.classname} onChange={handleChange('classname')} />
                </h4>

                {/* ---- Select Trainer ---- */}
                <h4>Led by:
                    <select name="trainer" id="trainer-selector"
                        placeholder='Trainer'
                        onChange={(event) => { handleTrainerSelection(event.target.value) }}
                    // value={trainer}
                    >
                        {trainers.map((trainer, i) => (
                            <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
                        ))}
                    </select>
                    {/* ---- Here's the trainer's image ---- */}
                    <img src={displayed_trainer_image} alt="Profile image of the selected trainer" />
                    <ImageRenderer />
                </h4>


                {/* ---- Set Start Time ---- */}
                <h4>Start time:
                    <input type="time" name="start-time" value={values.start_time} onChange={handleChange('start_time')} />


                    {/* ---- Set End Time ---- */}
                    End Time:
                    <input type="time" name="end-time" value={values.end_time} onChange={handleChange('end_time')} />
                </h4>

                {/* ---- Set Location ---- */}
                <h4>Location:
                    <input type="text" name="location" value={values.location} onChange={handleChange('location')} />
                </h4>

                {/* ---- Set Description ---- */}
                <h4>Description:
                    <input type="text" name="" value={values.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Set Class Size ---- */}
                <h4>Class Size:
                    <input type="number" name="class-size" value={values.class_size} onChange={handleChange('class_size')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">submit</button>
            </form>

        </>
    )
}
export default CreateClassPage;