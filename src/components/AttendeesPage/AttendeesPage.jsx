import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
//--------------< MUI IMPORTS >-----------------------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import swal from 'sweetalert';
// ==========================< MUI THEMES >===============================
const useStyles = makeStyles({
    newroot: {
        padding: 16,
        '&:last-child': {
            paddingBottom: 16,
        },
    },
});

function AttendeesPage() {
    // =============================< SETUP >========================================
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles(); 

    //---< FETCH ATTENDANCE >------
    useEffect(() => {
        dispatch({
            type: 'FETCH_CLASSES'
        })
        dispatch({
            type: 'FETCH_ATTENDANCE',
            payload: id
        })
        dispatch({
            type: 'FETCH_CLASS_SIZE',
            payload: id
        })
        dispatch({
            type: 'FETCH_CLASS_DETAILS',
            payload: id
        });
    }, [])

    // -------< VARIABLES >---------
    const attendees = useSelector(store => store.attendees);
    const classDetails = useSelector(store => store.selectedClass.classDetails)
    const allClasses = useSelector(store => store.allClasses)
    const user = useSelector((store) => store.user);
    const { id } = useParams()

    // ==========================< CLICK LISTENERS >===============================

    // -------< SUBMIT CHECKING IN CUSTOMERS >---------
    const handleCheckIn = () => {
        swal("Success", "Attendees have been checked in", "success");
        dispatch({
            type: 'UPDATE_ATTENDANCE',
            payload: {
                attendees,
                id
            }
        })
    };

    // ---------< GO BACK >--------------
    const handleReturnClick = () => {
        history.goBack();
    }

    return (
        <>
            <Container sx={{ border: 4, borderColor: '#c3c4c5' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent className={classes.newroot}>
                        <Typography variant="h5" align="center" >
                            {classDetails.week_day_name} {classDetails.abbreviated_date}
                        </Typography>
                        <Typography variant="h5" align="center">
                            {classDetails.classname}
                        </Typography>
                        <Divider />
                        <Typography variant="h4" align="center">
                            Attendee Check-in
                        </Typography>
                    </CardContent>
                </Card>

                {attendees.map((customer, i) => (
                    <AttendanceItem key={i} customer={customer} />
                ))}

                <Box textAlign='center' sx={{ pt: 2 }}>
                    <Typography variant="h5">
                        Spots Remaining: {classDetails.spots_remaining}
                    </Typography>
                </Box>

                <Box textAlign='center' sx={{ pt: 2 }}>
                    <Button onClick={handleCheckIn} variant="outlined" sx={{ color: "#000000", bgcolor: '#ace23a' }}>Check in</Button>
                </Box>

                <Button onClick={handleReturnClick} sx={{ bgcolor: '#FFFFFF', border: 2, borderColor: '#80bd02', color: "#000000", mt: 3 }}>
                    <ArrowBackIosNewIcon /> &nbsp;
                </Button>
            </Container>
        </>
    );
};


export default AttendeesPage;