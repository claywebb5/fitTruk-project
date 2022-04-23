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
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
    // -------< GO Back >-----------------
    const handleReturnClick = () => {
        history.goBack();
    };
    // -------------< Edit Address >-----------------
    const handleEdit = () => {
        console.log('Clicked the edit pencil');
    };
    //---------< GO to Class Attendees >--------------
    const handleSeeAttendees = () => {
        history.push(`/class-details/${id}/attendees`);
    };
    //----------< RESERVE CLASS >-----------------------
    const handleReserveClick = () => {
        // console.log('Selected class is:', classDetails.id); // TEST LOG
        dispatch({
            type: 'ADD_RESERVATION',
            payload: classDetails
        });
        alert("About to Add!")
        history.push('/my-classes')
    };
    //----------< CANCEL CLASS >-----------------------
    const handleCancelClick = () => {
        // console.log('you canceled the class', classDetails) // TEST LOG
        dispatch({
            type: 'REMOVE_RESERVATION',
            payload: classDetails
        });
        alert(`About to Remove`)
        history.push('/my-classes')
    };

    //===========< TIME FUNCTIONS >====================
    const startTime = (classDetails.start_time).toLocaleString('en-US', { timeZone: 'CST', hour: 'numeric', hour12: true, minute: 'numberic' });
    const endTime = (classDetails.end_time).toLocaleString('en-US', { timeZone: 'CST', hour: 'numeric', hour12: true, minute: 'numberic' });
    
    console.log('Start time:', startTime);
    console.log('End Time:', endTime);  

    return (
        <>
            <Container>
                <Card sx={{ maxWidth: 345, bgcolor: '#6d6e71', color: '#FFFFFF' }}>
                    <CardContent className={classes.newroot}>
                        <Typography variant="h5" align="center">
                            {classDetails.week_day_name} {classDetails.abbreviated_date}
                        </Typography>
                    </CardContent>
                </Card>
                <Box sx={{ pt: 1 }}>
                    <Typography variant="h6" align="center">
                        {classDetails.classname}
                    </Typography>
                </Box>
                <Box sx={{ display: 'inline-flex', pr: 5, pl: 1 }}>
                    <Box sx={{ mt: 3, ml: 5 }}>
                        <Typography variant="body1" sx={{ align: 'left', mr: 1, mx: 'auto' }}>
                            Led by:
                        </Typography>
                        <Typography variant="h5" sx={{ align: 'left', textDecoration: 'underline' }} display="inline">
                            {classDetails.trainer_first_name} {((classDetails.trainer_last_name)[0])}
                        </Typography>
                    </Box>
                    <Avatar src={classDetails.trainer_image} sx={{ align: 'center', ml: 3, mt: 1, height: '90px', width: '90px' }} />
                </Box>
                <Card sx={{ align: 'center', mt: 1 }}>
                    <Box align='center' sx={{ pt: 1 }}>
                        <Box align='center' sx={{ display: 'inline', }}>
                            <Typography variant="body1" align='center'>
                                Location:
                            </Typography>
                            {/* ============< THIS WILL BE CHANGED TO AN INPUT >============ */}
                            <Typography onClick={handleEdit} align='center' sx={{ textDecoration: 'underline' }}>
                                {classDetails.street}, <br /> {classDetails.city}, {classDetails.state}, {classDetails.zip}
                            </Typography>
                            {/* <IconButton sx={{ display: 'inline-flex', pt: 2 }} align='right' onClick={handleEdit}>
                                <EditIcon sx={{ bgcolor: '#80bd02' }} />
                            </IconButton> */}
                        </Box>
                    </Box>
                </Card>
            </Container>






            <a
                href={"https://www.google.com/maps/search/?api=1&query=" + (encodeURIComponent(`${classDetails.street}, ${classDetails.city}, ${classDetails.state} ${classDetails.zip}`))}
                target="_blank"
            >Open in maps</a>
            {showMap ? <iframe
                width="100%"
                height="250"
                frameBorder="0" style={{ border: 0 }}
                // referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=ADD_KEY_HERE&q=`} //the 'q' or "Query" can be text aswell as coordinates, these coords are DUMMY DATA
            >
            </iframe> : <p>Im not a map</p>}
            <h3 type="time">{classDetails.start_time}-{classDetails.end_time}</h3>
            <h3>{classDetails.description}</h3>
            <h3>Spots remaining: {classDetails.spots_remaining}</h3>
            <button onClick={() => handleReturnClick(classDetails)}>Return</button>
            <button onClick={handleSeeAttendees}>Attendance</button>
            {(function () {
                if (classDetails.is_my_class) {
                    return <button onClick={handleCancelClick}>Cancel Reservation</button>;
                } else {
                    return <button onClick={handleReserveClick}>Reserve</button>;
                }
            })()}

            {/* ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER-------- */}
            {user.access_level >= 2 && <button onClick={() => { history.push(`/edit-class/${classDetails.id}`) }}>edit class</button>}
            {/* ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER-------- */}
        </>
    )
}
export default ClassDetailsPage;