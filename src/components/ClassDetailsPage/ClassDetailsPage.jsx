import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//--------------< MUI IMPORTS >-----------------------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
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
    //------------<  Setup  >-------------
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
            // payload: id // PART OF DUMMY DATA, WILL BE UPDATED ONCE :id IS ADDED TO ROUTING
            payload: id
        });
    }, [])

    // ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER--------
    const user = useSelector(store => store.user)
    // ---------USED FOR TESTS, REMOVE LATER---------- USED FOR TESTS, REMOVE LATER ----------------USED FOR TESTS, REMOVE LATER--------
    
    
    //------------<  Variables  >----------
    const isClassFull = useSelector(store => store.selectedClass.classSize.full_class);
    const classDetails = useSelector(store => store.selectedClass.classDetails)

    const [showMap, setShowMap] = useState(false)
    const { id } = useParams()
    // const user = useSelector(store => store.user)


    //---------------<  C l i c k   H a n d l e r s  >----------------------------
    const handleReturnClick = () => {
        history.goBack();
    }

    // GO to class attendees
    const handleSeeAttendees = () => {

        history.push(`/class-details/${id}/attendees`);
    };
    
    const handleReserveClick = () => {
        // console.log('Selected class is:', classDetails.id); // TEST LOG
        dispatch({
            type: 'ADD_RESERVATION',
            payload: classDetails
        });
        alert("About to Add!")
        history.push('/my-classes')
    }

    const handleGpsClick = (showMap) => {
        // console.log('This will show google maps');
        setShowMap(!showMap)
        console.log('is the class full? isClassFull:',isClassFull) 

    }

    const handleCancelClick = () => {
        // console.log('you canceled the class', classDetails) // TEST LOG
        dispatch({
            type: 'REMOVE_RESERVATION',
            payload: classDetails
        });
        alert(`About to Remove`)
        history.push('/my-classes')
    }
    //---------------<  E N D  C l i c k   H a n d l e r s  >----------------------------

      
    //   const extractMapUrl = () => { // This function will extract a url-encoded address from different address variables
    //     let {street, city, state, zip } = classDetails
    //     console.log('place is', street);
    //     console.log('place is', city);
    //     console.log('place is', state);
    //     console.log('place is', zip);
    //     let addressString = `${street}, ${city}, ${state} ${zip}`;
    //     let urlString = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(addressString);
    //     console.log(urlString); // Test log
    //     return urlString;
    //     }
    // const streetAddress;


    // console.log('these are the details pulled in from the reducer:', classDetails); // TEST LOG
    // console.log('this is the class id pulled from the url with params', id); // TEST LOG
    // console.log('this is the value of show map', showMap); // TEST LOG
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
                <Box sx={{pt:1}}>
                    <Typography variant="h5" align="center">
                        {classDetails.classname}
                    </Typography>
                </Box>
                <Box sx={{display: 'inline-flex', pr: 5, pl: 1}}>
                    <Box sx={{mt: 3, ml: 5}}>
                        <Typography variant="body1" sx={{align: 'left', mr: 1, mx: 'auto'}}>
                            Led by:
                        </Typography>
                        <Typography variant="h5" sx={{align: 'left', textDecoration: 'underline'}} display="inline">
                            {classDetails.trainer_first_name} {((classDetails.trainer_last_name)[0])}
                        </Typography>
                    </Box>
                    <Avatar src={classDetails.trainer_image} sx={{align: 'center', ml: 3, mt: 1, height: '90px', width: '90px'}} />
                    
                </Box>
            </Container>






            <h3>{classDetails.street +' '+ classDetails.city +' '+ classDetails.state +' '+ classDetails.zip}</h3>
            <a 
            href={"https://www.google.com/maps/search/?api=1&query="+ (encodeURIComponent(`${classDetails.street}, ${classDetails.city}, ${classDetails.state} ${classDetails.zip}`))}
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