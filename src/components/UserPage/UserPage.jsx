// ==================================< PERSONAL INFO PAGE >====================================================
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//--------------< MUI IMPORTS >-----------------------------
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';

// ==========================< MUI THEMES >===============================
const useStyles = makeStyles({
  newroot: {
    padding: 8,
    '&:last-child': {
      paddingBottom: 8,
    },
  },
});

// ======*** LINK TO MUI CHIPS FOR EDITABLE INPUTS: https://mui.com/material-ui/react-chip/

function UserPage() {
  //==================< SETUP >==========================
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles(); // MUI Theme

  //==================< VARIABLES >==========================
  const user = useSelector((store) => store.user);
  let userObj = {
    id: user.id,
    username: user.username,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    street: user.street,
    city: user.city,
    state: user.state,
    zip: user.zip,
    dob: user.dob,
    phone_number: user.phone_number,
    pronouns: user.pronouns,
    emergency_name: user.emergency_name,
    emergency_number: user.emergency_number,
    access_level: user.access_level,
    profile_pic: user.profile_image
  };
  const [editUser, setEditUser] = useState(userObj);
  let initials = '';
  const [isEditing, setIsEditing] = useState(false);

  //  ============< PRONOUN Change >=============
  const handlePronounChange = (event) => {
    setEditUser({ ...editUser, pronouns: event.target.value });
  };
  //  ============< STREET Change >=============
  const handleChangeStreet = (event) => {
    setEditUser({ ...editUser, street: event.target.value });
  };
  //  ============< CITY Change >=============
  const handleChangeCity = (event) => {
    setEditUser({ ...editUser, city: event.target.value });
  };
  //  ============< STATE Change >=============
  const handleChangeState = (event) => {
    setEditUser({ ...editUser, state: event.target.value });
  };
  //  ============< ZIP Change >=============
  const handleChangeZip = (event) => {
    setEditUser({ ...editUser, zip: event.target.value });
  };
  //  ============< SUBMIT >==============================================
  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedUser = editUser;
    updatedUser = { ...updatedUser };

    dispatch({
      type: 'UPDATE_CUSTOMER_INFO',
      payload: updatedUser
    });
    setIsEditing(false);
  };

  //  ============< GO BACK >=============
  const handleReturnClick = () => {
    history.goBack();
    console.log('Clicked Cancel');
  };
  //  ============< GET INITIALS >=============
  const getInitials = (nameObject) => {
    let firstLetter = 'H';
    let secondLetter = 'i';
    if (nameObject.first_name && nameObject.last_name) {
      firstLetter = (nameObject.first_name[0]).toUpperCase();
      secondLetter = (nameObject.last_name[0]).toUpperCase();
    } else if (nameObject.first_name) {
      firstLetter = (nameObject.first_name[0]).toUpperCase();
      secondLetter = (nameObject.first_name[1]);
    }
    initials = firstLetter + secondLetter;
    return true;
  };
  
  // =============< OPEN EDIT >===============
  const handleEdit = () => {
    setIsEditing(true);
  };

  // =============< CANCEL EDIT >===============
  const handleCancel = () => {
    setEditUser(userObj);
    setIsEditing(false);
  };

  return (
    <>
{/* ---------  The height and fixed position of this page may need to be adjusted at some point ---------- */}
      <Container sx={{ border: 4, borderColor: '#c3c4c5', bgcolor: '#FFFFFF', mt: 1, height:window.innerHeight, overflow:'scroll', }}>
        <form onSubmit={handleSubmit}>

          {/* ============< HEADER >============== */}
          <Card sx={{ bgcolor: '#6d6e71', color: '#FFFFFF' }}>
            <CardContent className={classes.newroot}>
              <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                <Grid item>
                  <Typography variant="h5">
                    Welcome, {user.first_name}!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* ============< PROFILE PICTURE >============== */}
          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
            <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
              {
                (function () {
                  if (user.profile_image) {
                    return <Avatar src={user.profile_image} sx={{ height: '120px', width: '120px', border: 1, borderColor: '#41414c'  }} />
                  } else {
                    return <div>
                      {(getInitials(user)) && <Avatar sx={{ bgcolor: '#ace23a'}}>{initials}</Avatar>}
                    </div>
                  }
                })()
              }
            </Grid>
          </Box>
          {/* ============< NAME & PRONOUN >============== */}
          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
            <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
              <Grid item>
                <Typography style={{ color: "#000000" }} variant="h5" >
                  {user.first_name} {user.last_name}
                </Typography>
                <Divider sx={{ bgcolor: "#000000", borderBottomWidth: 2 }} />
              </Grid>
              {/*---------- NOT EDITING -----------*/}
              {
                (function () {
                  if (!isEditing) {
                    return <Grid item>
                      <Typography style={{ color: "#000000" }} variant="h6" >
                        {user.pronouns}
                      </Typography>
                      <Divider sx={{ bgcolor: "#80bd02", borderBottomWidth: 2 }} />
                    </Grid>
                  }
                })()
              }
              {/*---------- EDITING-----------*/}
              {
                (function () {
                  if (isEditing) {
                    return <Grid item>
                      <TextField
                        size="small"
                        id="outlined-name"
                        label="Pronouns"
                        value={editUser.pronouns}
                        onChange={handlePronounChange}
                      />
                      <Divider sx={{ bgcolor: "#80bd02", borderBottomWidth: 2 }} />
                    </Grid>
                  }
                })()
              }
            </Grid>
          </Box>

          {/* ============< CONTACT INFO >============== */}
          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
            <Grid container justifyContent="center" alignItems="center" direction="column" spacing={1}>
              <Grid item>
                <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                  {user.email}
                </Typography>
                <Divider sx={{ bgcolor: "#000000" }} />
              </Grid>
              <Grid item>
                <Typography style={{ color: "#000000" }} align='center'>
                  {user.phone_number}
                </Typography>
                <Divider sx={{ bgcolor: "#000000" }} />
              </Grid>
            </Grid>
          </Box>

          {/* ============< ADDRESS >============== */}
          {/*---------- NOT EDITING -----------*/}
          {
            (function () {
              if (!isEditing) {
                return <Box sx={{ mt: 3 }}>
                  <Box sx={{ px: 8 }}>
                    <Typography variant="body1" align="center" >
                      {user.street}, {user.city}, {user.state} {user.zip}
                    </Typography>
                    <Divider sx={{ bgcolor: "#80bd02", borderBottomWidth: 2 }} />
                  </Box>
                </Box>
              }
            })()
          }
          {/*---------- EDITING-----------*/}
          {
            (function () {
              if (isEditing) {
                return <Box sx={{ border: 2, borderColor: '#80bd02', mt: 3, justifyContent: 'center', display: 'flex' }}>
                  <Box sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', p: 1 }}>
                    <TextField
                      margin="dense"
                      size="small"
                      id="outlined-name"
                      label="Street"
                      value={editUser.street}
                      onChange={handleChangeStreet}
                    />
                    <TextField
                      margin="dense"
                      size="small"
                      id="outlined-name"
                      label="City"
                      value={editUser.city}
                      onChange={handleChangeCity}
                    />
                    <TextField
                      margin="dense"
                      size="small"
                      id="outlined-name"
                      label="State"
                      value={editUser.state}
                      onChange={handleChangeState}
                    />
                    <TextField
                      margin="dense"
                      size="small"
                      id="outlined-name"
                      label="Zip"
                      value={editUser.zip}
                      onChange={handleChangeZip}
                    />
                  </Box>
                </Box>
              }
            })()
          }

          {/* ============< EMERGENCY CONTACT >============== */}
          <Card sx={{ border: 1, borderColor: "#000000", mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={1}>

                  <Grid item>
                    <Grid item container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                      <Grid item>
                        <Divider sx={{ bgcolor: "#000000", borderBottomWidth: 2 }}> </Divider>
                      </Grid>
                      <Grid item>
                        <Typography style={{ color: "#000000" }} variant="h6" >
                          Emergency Contact
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Divider sx={{ bgcolor: "#000000", borderBottomWidth: 2 }}> </Divider>
                      </Grid>
                    </Grid>
                    <Divider sx={{ bgcolor: "#000000", borderBottomWidth: 2 }} />
                  </Grid>
                  <Grid item>
                    <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                      {user.emergency_name}
                    </Typography>
                    <Divider sx={{ bgcolor: "#000000" }} />
                  </Grid>
                  <Grid item>
                    <Typography style={{ color: "#000000" }} align='center'>
                      {user.emergency_number}
                    </Typography>
                    <Divider sx={{ bgcolor: "#000000" }} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>


          {/* ============< BUTTONS >============== */}
          {
            (function () {
              if (isEditing) { // --------- IS EDITING: TRUE --------------
                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                  <Grid container justifyContent="center" alignItems="center" direction="row" spacing={7}>
                    <Grid item>
                      <Button variant="outlined" onClick={handleCancel} color="error">
                        Cancel &nbsp;
                        <CancelIcon />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button type="submit" sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                        Save &nbsp;
                        <CheckIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              } else { // -------------------- IS EDITING: FALSE -------------
                return <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                  <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                    <Button onClick={handleEdit} sx={{ bgcolor: '#80bd02', color: "#000000" }}>
                      Edit
                    </Button>
                  </Grid>
                </Box>
              }
            })()
          }
        </form>
        <Button onClick={handleReturnClick} sx={{ border: 2, borderColor: '#80bd02', color: "#000000", bgcolor: '#FFFFFF', mt: 3 }}>
          <ArrowBackIosNewIcon /> &nbsp;
        </Button>
      </Container>
    </>
  );
}


export default UserPage;
