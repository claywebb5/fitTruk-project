import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClassListItem from '../ClassListItem/ClassListItem';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
// ---< MUI IMPORTS >-----
import Box from '@mui/material/Box';

// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListSubheader from '@mui/material/ListSubheader';
// import Avatar from '@mui/material/Avatar';


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
      type: 'FETCH_AVAILABLE_TRAINERS'
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
  const allClasses = useSelector(store => store.allClasses) // SYNTAX-UPDATE : test this later
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

  const searchFunction = (array) => {
    let searchResults = array.filter(checkTrainer)
    let fullResults = searchResults.filter(checkTerm)

    return fullResults;
  };
  // --------------<  // E N D   S e a r c h   Q u e r y   H a n d l e r s  >------------------



  return (
    <>
      <h2 align="center">All Classes</h2>
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
          <option key={i} value={trainer.trainer_user_id}>{trainer.trainer_first_name} {(trainer.trainer_last_name)[0]}.</option>
        ))}
      </select> &nbsp;

      
      
      {user.id && 
            <button align="right" onClick={handleMyClassClick}>Myclasses</button>
      }

      {/* ------ Josh is working on this currently ----- */}
      {/* <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            All Classes
          </Typography>
          <List sx={{ mb: 2 }}>
            {allClasses.map(classEvent => (
              <React.Fragment key={classEvent.id}>
                {classEvent.week_day_name === 'Monday' && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  {classEvent.week_day_name}
                  </ListSubheader>
                )}
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar sx={{ fontSize: 'medium' }}>{classEvent.abrv_date}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={classEvent.week_day_name} secondary={classEvent.classname} sx={{ bgcolor: '#9aca38', width: 270, borderRadius: '5px', p: 1 }} /> 
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper> */}
      
      <ul>
        { (searchFunction(allClasses)).map((classEvent, i) => (
          <ClassListItem classEvent={classEvent} key={i} />
        ))}
      </ul>

    </div>
          {/* Logged in as an Admin show the Admin Nav Bar */}
          {user.access_level === 3 && (
        <BtnCreateClass />
      )}
    </>
  );
}

export default AllClassesPage;
