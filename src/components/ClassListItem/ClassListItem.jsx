// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClassListItem({classEvent, i}) {
  const history = useHistory();

  
  const handleEventClick = (event) => {
    console.log(event);
    history.push(`/class-details/${event.id}`)
  }

  return (
    <>
      <li key={i} onClick={handleEventClick}>
        {classEvent.date}
        {classEvent.start_time}-{classEvent.end_time}
        {classEvent.classname} with {classEvent.trainer_user_id}
      </li>
    </>
  )
}
export default ClassListItem;