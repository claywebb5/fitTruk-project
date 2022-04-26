import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnCreateClass from '../BtnCreateClass/BtnCreateClass'; // <- The floating "speed dial" button to create a class
// ---< MUI IMPORTS >-----
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ClassList from '../ClassList/ClassList'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';



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

  const { first_name, last_name } = user;
  let initials = '';

  const getInitials = (firstName, lastName) => {
    let firstLetter = 'H';
    let secondLetter = 'i';

    if (firstName && lastName) {
      firstLetter = (firstName[0]).toUpperCase();
      secondLetter = (lastName[0]).toUpperCase();
    } else if (firstName) {
      firstLetter = (firstName[0]).toUpperCase();
      secondLetter = (firstName[1]);
    }
    initials = firstLetter + secondLetter;
    return true;
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

      <Paper square sx={{ pb: '0px', pt: '10px', height: 'auto', overflow: 'scroll' }}>

        {
          (function () {
            if (user.profile_image) {
              return <div>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                  <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                    <Grid item>
                      <Avatar src={user.profile_image} sx={{ border: 2, borderColor: '#80bd02' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h3" gutterBottom component="div" sx={{ pr: 2, textAlign: 'center', pt: '20px' }}>
                        My Classes
                      </Typography>
                    </Grid>
                    <Divider sx={{ bgcolor: "#000000" }} />
                  </Grid>
                </Box>
              </div>
            } else {
              return <div>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                    <Grid item>
                      {(getInitials(first_name, last_name)) && <Avatar sx={{ bgcolor: '#80bd02' }}>{initials}</Avatar>}
                    </Grid>
                    <Grid item>
                      <Typography variant="h3" gutterBottom component="div" sx={{ pl: 2, pr: 2, textAlign: 'center', pt: '20px' }}>
                        My Classes
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            }
          })()
        }

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

export default MyClassesPage;
