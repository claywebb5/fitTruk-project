// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClassListItem({classEvent, i}) {
  const history = useHistory();
  
// console.log(trainers.trainer_name);
  
  const handleEventClick = () => {
    console.log(classEvent);
    // history.push(`/class-details/${classEvent.id}`)
    history.push(`/class-details/${classEvent.id}`)
  }


  const extractFirstName = (fullName) => { // This function will extract the first name of a trainer from their full name
    let firstName = fullName.split(' ')[0]; // If the database changes from one name to a first name and last name, this will need to be changed as well
    return firstName;
  }

  return (
    <>
      <li key={i} onClick={handleEventClick}>
      <b>Date:</b> {classEvent.week_day_name} <br />
      <b>Date:</b> {classEvent.abbreviated_date} <br />
      <b>Time:</b> {classEvent.start_time}-{classEvent.end_time} <br />
      <b>Class:</b> {classEvent.classname} with <b>Trainer:</b> {extractFirstName(classEvent.trainer_name)}
      </li> <br />
    </>
  )
}
export default ClassListItem;