import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
import ClassList from '../ClassList/ClassList'
// ---< MUI IMPORTS >-----
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function AllClassesPage() {

  const dispatch = useDispatch();

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
  const allClasses = useSelector(store => store.allClasses)

  const pageInfo = {
    pageLink: "/my-classes",
    pageName: 'My Classes'
  }
  // ------- Variables ---------


  return (
    <>
      {/* <Offset /> */}
      <Container sx={{bgcolor: '#FFFFFF', p: 0}}>
        <Box>
          <Typography variant="h3" component="div" sx={{ pl: 2, pr: 2, textAlign: 'center', pt: 2 }}>
            <PermContactCalendarIcon sx={{ fontSize: 35 }} /> All Classes
          </Typography>
        </Box>

        <Paper square sx={{ pb: '0px', height: 'auto', overflow: 'scroll' }}>

          {/* <hr /> */}
          <ClassList allClasses={allClasses} user={user} pageInfo={pageInfo} />
          {/* Logged in as an Admin show the Admin Nav Bar */}
          {user.access_level === 3 && (
            <BtnCreateClass />
          )}
        </Paper>
      </Container>
    </>
  );
}

export default AllClassesPage;
