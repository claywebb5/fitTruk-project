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




    const submitHandler = () => {
        console.log('This will submit the form');
    }


    // ============= DELETE this when we have a reducer/saga to replace it ===================
    const trainers = [
        {
            trainer_user_id: 1,
            name: "Kim",
            image_url: "https://www.yogaparkside.org/wp-content/uploads/2021/08/Jessica_D_Asana-e1629237846697.jpg",
        },
        {
            trainer_user_id: 2,
            name: "Mark",
            image_url: "https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg",
        },
        {
            trainer_user_id: 3,
            name: "Sarah",
            image_url: "https://www.insideedition.com/sites/default/files/styles/video_1920x1080/public/images/2021-03/031821_yoga_teacher_web_0.jpg?h=d1cb525d",
        }
    ]
    // const [trainer, setTrainer] = useState('');
    // const [date, setDate] = useState('');
    // const [className, setClassName] = useState('');
    // const [startTime, setStartTime] = useState('');
    // const [endTime, setEndTime] = useState('');
    // const [location, setLocation] = useState('');
    // const [description, setDescription] = useState('');

    // ^^^^^^^^^^^^ DELETE this when we have a reducer/saga to replace it ^^^^^^^^^^^^^^^^^


    //---------- Variables -----------
    // With this single useState, we can hold every piece of information needed,
    // and this can be transplanted into a global reducer and this local useState
    // can be deleted later on.
    const [values, setValues] = useState({
        trainer: '',
        date: '',
        className: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
    })
    //----------<  I n p u t   H a n d l e r s  >-----------
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(`${prop} updated to: ${event.target.value}`); // Test log
    };
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
                    <input type="text" name="class-name" value={values.className} onChange={handleChange('className')} />
                </h4>

                {/* ---- Select Trainer ---- */}
                <select name="trainer" id="trainer-selector"
                    onChange={handleChange('trainer')}
                    value={values.trainer}>
                    {trainers.map((trainer,i) => (
                        <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
                    ))}
                </select>

                {/* ---- Here's the trainer's image ---- */}
                {/* <img src={trainer.image_url} alt={trainer.name}/> */}

                {/* ---- Set Start Time ---- */}
                <h4>Start time:
                    <input type="time" name="start-time" value={values.startTime} onChange={handleChange('startTime')} />


                    {/* ---- Set End Time ---- */}
                    End Time:
                    <input type="time" name="end-time" value={values.endTime} onChange={handleChange('endTime')} />
                </h4>

                {/* ---- Set Location ---- */}
                <h4>Location:
                    <input type="text" name="location" value={values.location} onChange={handleChange('location')} />
                </h4>

                {/* ---- Set Description ---- */}
                <h4>Description:
                    <input type="text" name="" value={values.description} onChange={handleChange('description')} />
                </h4>

                {/* ---- Submit form!! ---- */}
                <button type="submit">submit</button>
            </form>

        </>
    )
}
export default CreateClassPage;