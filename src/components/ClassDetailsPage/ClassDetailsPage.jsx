import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//--------------< MUI IMPORTS >-----------------------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send'; // SEND MESSAGE TO CUSTOMER
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'; // NOT CHECKED IN
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // CHECKED IN
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


// ==========================< MUI THEMES >===============================
const useStyles = makeStyles({
    newroot: {
        padding: 16,
        '&:last-child': {
            paddingBottom: 16,
        },
    },
});


function ClassDetailsPage() {
    //==================< SETUP >==========================
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(); // MUI Theme

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLASS_SIZE',
            payload: id
        })
        dispatch({
            type: 'FETCH_CLASS_DETAILS',
            payload: id
        });
    }, [])

    //==================< VARIABLES >==========================
    const isClassFull = useSelector(store => store.selectedClass.classSize.full_class);
    const classDetails = useSelector(store => store.selectedClass.classDetails);
    const user = useSelector(store => store.user);
    const [showMap, setShowMap] = useState(false);
    const { id } = useParams();

    //==================< CLICK HANDLERS >==========================
    // -------< GO BACK >-----------------
    const handleReturnClick = () => {
        history.goBack();
    };
    //---------< GO TO CLASS ATTENDEES >--------------
    const handleSeeAttendees = () => {
        history.push(`/class-details/${id}/attendees`);
    };
    // ----------< RESERVE A CLASS >--------------------------
    const handleReserveClick = () => {
        if (!user.id) {
            alert("Sign in to reserve your spot!")
        } else {
            dispatch({
                type: 'ADD_RESERVATION',
                payload: classDetails
            });
            alert("About to Add!")
            history.push('/my-classes')
        }
    }
    // -------------< SHOW MAP >------------------------
    const handleGpsClick = (showMap) => {
        // setShowMap(!showMap)
    };
    // -------------< CANCEL RESERVATION >-------------------
    const handleCancelClick = () => {
        // console.log('you canceled the class', classDetails) // TEST LOG
        dispatch({
            type: 'REMOVE_RESERVATION',
            payload: classDetails
        });
        alert(`About to Remove`)
        history.push('/my-classes')
    };


    return (
        <>
            <Container sx={{ bgcolor: '#90ee90'}}>
                {/* ============< WEEKDAY AND DATE >============== */}
                <Card sx={{ bgcolor: '#6d6e71', color: '#FFFFFF' }}>
                    <CardContent className={classes.newroot}>
                        <Typography variant="h5" align="center">
                            {classDetails.week_day_name} {classDetails.abbreviated_date}
                        </Typography>
                    </CardContent>
                </Card>

                {/* ============< CLASS NAME >============== */}
                <Box sx={{ pt: 1 }}>
                    <Typography style={{ color: "#000000" }} variant="h6" align="center">
                        {classDetails.classname}
                    </Typography>
                </Box>

                {/* ============< INSTRUCTOR >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                            <Grid item>
                                <Typography style={{ color: "#000000" }} variant="body1" >
                                    Led by:
                                </Typography>
                                <Typography style={{ color: "#000000" }} variant="h5" sx={{textDecoration: 'underline' }}>
                                    {classDetails.trainer_first_name} {((classDetails.trainer_last_name)[0])}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Avatar src={classDetails.trainer_image} sx={{height: '90px', width: '90px' }} />
                            </Grid>
                    </Grid>
                </Box>

                {/* ============< LOCATION >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                        <Grid item>
                            <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                                Location:
                            </Typography>
                            <Typography style={{ color: "#000000" }} align='center' sx={{ textDecoration: 'underline' }}>
                                {classDetails.street}, <br /> {classDetails.city}, {classDetails.state}, {classDetails.zip}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link
                            href={"https://www.google.com/maps/search/?api=1&query=" + (encodeURIComponent(`${classDetails.street}, ${classDetails.city}, ${classDetails.state} ${classDetails.zip}`))}
                            target="_blank"
                            >
                                <Avatar sx={{ bgcolor: '#80bd02' }}>
                                    <LocationOnIcon />
                                </Avatar>
                            </Link>
                        </Grid>
                    </Grid>
                </Box> 

                {/* ============< TIME >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                    <Grid item>
                        <Typography style={{ color: "#000000" }} variant="body1" align='center'>
                            From
                        </Typography>
                        <Typography style={{ color: "#000000" }} variant="h5" sx={{textDecoration: 'underline' }} align='center'>
                            {classDetails.start_time}-{classDetails.end_time}
                        </Typography>
                    </Grid>
                </Grid>
                </Box>


                {/* ============<  >============== */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                <Grid container justifyContent="center" alignItems="center" direction="row" spacing={2}>
                    <Grid item>
                    
                    </Grid>
                </Grid>
                </Box>
                    
                

                

            </Container>


            {showMap ? <iframe
                    width="100%"
                    height="250"
                    frameBorder="0" style={{ border: 0 }}
                    // referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=ADD_KEY_HERE&q=`} //the 'q' or "Query" can be text aswell as coordinates, these coords are DUMMY DATA
                >
                </iframe> :
                    <p></p>}
                <h3 type="time"></h3>
                <h3>{classDetails.description}</h3>
                <h3>Spots remaining: {classDetails.spots_remaining}</h3>
                <button onClick={() => handleReturnClick(classDetails)}>Return</button>

                {(function () {
                    if (user.access_level >= 2) {
                        return <button onClick={handleSeeAttendees}>Attendance</button>
                    }
                })()}

                {(function () {
                    if (classDetails.is_my_class) {
                        return <button onClick={handleCancelClick}>Cancel Reservation</button>;
                    } else {
                        return <button onClick={handleReserveClick} disabled={isClassFull}>Reserve</button>;
                    }
                })()}

                {user.access_level >= 2 &&
                    <button onClick={() => { history.push(`/edit-class/${classDetails.id}`) }}>edit class</button>
                }

        </>
    )
}
export default ClassDetailsPage;