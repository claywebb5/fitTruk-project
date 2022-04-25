import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
// ---< MUI IMPORTS >-----
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ClassList from '../ClassList/ClassList'



function MyClassesPage() {
  // --------- Tools ----------
  // const history = useHistory();
  const dispatch = useDispatch();

  // ------- Variables ---------
  const user = useSelector(store => store.user)
  const allClasses = useSelector(store => store.myClasses) // SYNTAX-UPDATE: May not be needed, unsure if the 'tested' status mentioned in AllClassesPage
  const pageInfo = {
    pageLink: "/all-classes",
    pageName: 'All Classes'
  }
  
  // --------- Functions ----------
  useEffect(() => {
    dispatch({
      type: 'FETCH_CUSTOMER_CLASS'
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


  return (
    <>

        <Paper square sx={{ pb: '0px', pt:'10px', height: 'auto', overflow:'scroll' }}>

          <Typography variant="h3" gutterBottom component="div" sx={{ pl: 2, pr: 2, textAlign: 'center', pt: '20px' }}>
            My Classes
          </Typography>
          {/* <hr /> */}
          <ClassList allClasses={allClasses} user={user} pageInfo={pageInfo}/>
          {/* Logged in as an Admin show the Admin Nav Bar */}
          {user.access_level === 3 && (
            <BtnCreateClass />
          )}
        </Paper>
    </>
  );
}

export default MyClassesPage;
