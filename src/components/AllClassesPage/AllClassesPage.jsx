import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClassListItem from '../ClassListItem/ClassListItem';


function AllClassesPage() {
  // ------- Tools ---------
  const history = useHistory();
  const dispatch = useDispatch();
  // ------- Tools ---------


  useEffect(() => {
    dispatch({
      type: 'FETCH_CLASSES'
    });
    dispatch({
      type: 'RESET_SEARCH_TERM'
    });
    dispatch({
      type: 'RESET_SEARCH_TRAINER'
    });
  }, [])



  // ------- Variables ---------
  const user = useSelector(store => store.user)
  const classes = useSelector(store => store.allClasses) // SYNTAX-UPDATE : test this later
  const availableTrainers = useSelector(store => store.availableTrainers)
  const searchTerm = useSelector(store => store.searchQuery.searchTerm)
  const searchByTrainerId = useSelector(store => store.searchQuery.searchByTrainer)
  // ------- Variables ---------

  // ------- Buttons -------
  const handleMyClassClick = () => {
    history.push("/my-classes");
  }
  
// --------------<  I n p u t   H a n d l e r s  >------------------
const handleSearchTrainer = (trainerId) => { // This changes the search-by-trainer filter settings
  // console.log('trainer Id:', trainerId); // Test log
  dispatch({
    type: 'SET_SEARCH_TRAINER',
    payload: trainerId
  })
};
const handleSearchTerm = (searchValue) => { // This changes the search-by-class-name filter settings
  dispatch({
    type: 'SET_SEARCH_TERM',
    payload: searchValue
  })
};
// --------------< // E N D  I n p u t   H a n d l e r s  >------------------


// --------------<  S e a r c h   Q u e r y   H a n d l e r s  >------------------
const checkTrainer = (item) => {
  if (!searchByTrainerId) {
    return item
  } else if (item.trainer_user_id == searchByTrainerId) {
    return item;
  }
}
const checkTerm = (item) => {
  
  let resultTerm = item.classname.toLowerCase();
  let theSearchTerm = searchTerm.toLowerCase();
  
  
  if (searchTerm == "") { // Checks if search bar is empty and returns all classes
    return item
  } else if (resultTerm.includes(theSearchTerm)) { // Otherwise returns the class name that matches the search term
    return item
  }
}

const searchFunction = (array) =>{
  
  let searchResults = array.filter(checkTrainer)
  let fullResults = searchResults.filter(checkTerm)
  
  return fullResults;
};
// --------------<  // E N D   S e a r c h   Q u e r y   H a n d l e r s  >------------------



return (
    <div>

      <input
        type="text"
        value={searchTerm}
        placeholder='Search'
        onChange={(event) => (handleSearchTerm(event.target.value))} />
      <hr />
      

      <select name="trainer" id="trainer-selector"
        placeholder='Trainer'
        onChange={(event) => { handleSearchTrainer(event.target.value) }}>
          <option value={''}>All trainers</option> {/*  Clicking "All Trainers" resets the trainer value to null */}
        {availableTrainers.map((trainer, i) => (
          <option key={i} value={trainer.trainer_user_id}>{trainer.name}</option>
        ))}
      </select>

      
      <h3>If logged in, myclass button appears below, if not then no button</h3>
      {user.id && <button onClick={handleMyClassClick}>Myclasses (this will be an icon eventually)</button>}
      
      <ul>
        { (searchFunction(classes)).map((classEvent, i) => (
          <ClassListItem classEvent={classEvent} key={i} />
        ))}
      </ul>

    </div>
  );
}

export default AllClassesPage;
