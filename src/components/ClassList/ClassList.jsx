// import { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import ClassListItem from '../ClassListItem/ClassListItem';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
// ---< MUI IMPORTS >-----
import Box from '@mui/material/Box';

import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Nav from '../Nav/Nav';
import { styled } from '@mui/material/styles';

function ClassList({ allClasses, user, pageInfo }) {
    // ------- Tools ---------
    const history = useHistory();
    const dispatch = useDispatch();
    // ------- Tools ---------


  const availableTrainers = useSelector(store => store.availableTrainers)
  const searchTerm = useSelector(store => store.searchQuery.searchTerm)
  const searchByTrainerId = useSelector(store => store.searchQuery.searchByTrainer)
  // ------- Variables ---------

  // ------- Buttons -------
  const handleSwitchViewClick = () => {
    history.push(pageInfo.pageLink);
  }
  // --------------<  M U I   H a n d l e r s  >------------------
  let priorDate = '';
  const checkForNextDay = (dateToCheck) => {
    if (dateToCheck == priorDate) {
      return false;
    } else {
      priorDate = dateToCheck
      return true
    }
  }
  // --------------<  M U I   H a n d l e r s  >------------------


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

      <Paper square sx={{ pb: '10px', pt: '10px' }}>
        <input
          type="text"
          value={searchTerm}
          placeholder='Search'
          onChange={(event) => (handleSearchTerm(event.target.value))} />

        <select name="trainer" id="trainer-selector"
          placeholder='Trainer'
          onChange={(event) => { handleSearchTrainer(event.target.value) }}>
          <option value={''}>All trainers</option> {/*  Clicking "All Trainers" resets the trainer value to null */}
          {availableTrainers.map((trainer, i) => (
            <option key={i} value={trainer.trainer_user_id}>{trainer.trainer_first_name} {(trainer.trainer_last_name)[0]}.</option>
          ))}
        </select> &nbsp;

        {(user.id) && <button align="right" onClick={handleSwitchViewClick}>{pageInfo.pageName}</button> }

            </Paper>
          <List sx={{ mb: '0px', pb: 0 }}>
            {(searchFunction(allClasses)).map((classEvent, i) => (
              <React.Fragment key={i}>
                {(checkForNextDay(classEvent.week_day_name)) && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    {classEvent.week_day_name}
                  </ListSubheader>
                )}
                <ListItem button>
                  <ClassListItem classEvent={classEvent} key={i} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>

    </>
  )
}
export default ClassList;