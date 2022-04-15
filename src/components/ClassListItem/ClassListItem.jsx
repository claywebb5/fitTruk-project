// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClassListItem({event, i}) {
  const history = useHistory();

  
  const handleEventClick = (event) => {
    console.log(event);
    history.push(`/class-details/${event.id}`)
  }

  return (
    <>
      <li key={i} onClick={handleEventClick}>
        {event.date}
        {event.start_time}-{event.end_time}
        {event.classname} with {event.trainer_user_id}
      </li>
    </>
  )
}
export default ClassListItem;