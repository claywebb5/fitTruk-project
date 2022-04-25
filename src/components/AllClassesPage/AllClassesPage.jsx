import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
// ---< MUI IMPORTS >-----
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ClassList from '../ClassList/ClassList'


function AllClassesPage() {
  // ------- Tools ---------
  // const history = useHistory();
  const dispatch = useDispatch();

  // ------- Functions ---------
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
  // The pageInfo prop allows the child component of this page to know which page it is the child of, which allows for
  // the ClassList page to dynamically render a link that will take the user between AllClasses and MyClasses
  // without needing the "useParams" method
  const pageInfo = {
    pageLink: "/my-classes",
    pageName: 'My Classes'
  }
  // ------- Variables ---------


  return (
    <>
      {/* <Offset /> */}

        <Paper square sx={{ pb: '0px', pt: '10px', height: 'auto', overflow: 'scroll' }}>

          <Typography variant="h3" gutterBottom component="div" sx={{ pl: 2, pr: 2, textAlign: 'center', pt: '20px' }}>
            All Classes
          </Typography>
          {/* <hr /> */}
          <ClassList allClasses={allClasses} user={user} pageInfo={pageInfo} />
          {/* Logged in as an Admin show the Admin Nav Bar */}
          {user.access_level === 3 && (
            <BtnCreateClass />
          )}
        </Paper>
    </>
  );
}

export default AllClassesPage;
