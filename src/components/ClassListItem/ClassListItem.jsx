// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClassListItem({classEvent, i}) {
  const history = useHistory();
  
// console.log(trainers.name);
  
  const handleEventClick = () => {
    console.log(classEvent);
    // history.push(`/class-details/${classEvent.id}`)
    history.push(`/class-details/${classEvent.id}`)
  }

  return (
    <>
      <li key={i} onClick={handleEventClick}>
      <b>Date:</b> {classEvent.week_day_name} <br />
      <b>Date:</b> {classEvent.abbreviated_date} <br />
      <b>Time:</b> {classEvent.start_time}-{classEvent.end_time} <br />
      <b>Class:</b> {classEvent.classname} with <b>Trainer:</b> {classEvent.trainer_user_id}
      </li> <br />
    </>
  )
}
export default ClassListItem;