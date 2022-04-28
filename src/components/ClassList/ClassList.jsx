import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClassListItem from '../ClassListItem/ClassListItem';
// ---< MUI IMPORTS >-----
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';

// ==========================< MUI THEMES >===============================
const useStyles = makeStyles({
  newroot: {
    padding: 0,

  },
});


function ClassList({ allClasses, user, pageInfo }) {
  // ------- Tools ---------
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles(); // MUI Theme

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
    dispatch({
      type: 'SET_SEARCH_TRAINER',
      payload: trainerId
    })
    handleCloseMenu();

  };
  const handleSearchTerm = (searchValue) => { // This changes the search-by-class-name filter settings
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchValue
    })
  };
  // --------------< // E N D  I n p u t   H a n d l e r s  >------------------

  // For the trainer menu
  const [openMenu, setOpenMenu] = useState(false);

  // =====< CLICK LISTENERS >=============================
  // OPEN the Trainer menu
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  // CLOSE the Trainer menu
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

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
        <Grid container justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
          <Grid item className={classes.newroot}>
            {(user.id) &&
              <Button onClick={handleSwitchViewClick} sx={{ bgcolor: '#41414c' }}>{pageInfo.pageName}</Button>
            }
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container direction="row" justifyContent="space-around" alignItems="flex-end" wrap="nowrap">
            <Grid item xs="auto">
              <Input
                placeholder="Search Class"
                id="component-simple"
                size="small"
                value={searchTerm}
                onChange={(event) => (handleSearchTerm(event.target.value))}
                inputProps={{
                  sx: { p: 1, }
                }}
              />
            </Grid>
           <select name="trainer" id="trainer-selector"
          placeholder='Trainer'
          onChange={(event) => { handleSearchTrainer(event.target.value) }}>
          <option value={''}>All trainers</option> {/*  Clicking "All Trainers" resets the trainer value to null */}
          {availableTrainers.map((trainer, i) => (
            <option key={i} value={trainer.trainer_user_id}>{trainer.trainer_first_name} {(trainer.trainer_last_name)[0]}.</option>
          ))}
        </select> &nbsp;
          </Grid>
        </Box>
      </Paper>
      <List sx={{ mb: '0px', pb: 0, bgcolor: '#41414c' }}>
        {(searchFunction(allClasses)).map((classEvent, i) => (
          <Card key={i}>
              {(checkForNextDay(classEvent.week_day_name)) && (
                <ListSubheader sx={{ bgcolor: '#41414c', color: '#FFFFFF', pb: 1, pt: 1 }}>
                  <Typography variant="h5" align="center">
                    {classEvent.week_day_name} {classEvent.abbreviated_date}
                  </Typography>
                </ListSubheader>
              )}
              <Box >
                <ClassListItem classEvent={classEvent} key={i} />
              </Box>
          </Card>
        ))}
      </List>

    </>
  )
}
export default ClassList;