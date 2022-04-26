// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function ClassListItem({ classEvent, i }) {
  const history = useHistory();

  // console.log(trainers.trainer_name);

  const handleEventClick = () => {
    console.log(classEvent);
    // history.push(`/class-details/${classEvent.id}`)
    history.push(`/class-details/${classEvent.id}`)
  }

  return (
    <>

      <Accordion >
        {/* ------< SUMMARY >-------- */}
        <AccordionSummary
          sx={{ bgcolor: '#6d6e71', color: '#80bd02' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{classEvent.classname} at {classEvent.abrv_start_time} with {classEvent.trainer_first_name}</Typography>
        </AccordionSummary>
        {/* ------< DETAILS >-------- */}
        <AccordionDetails>
          {/* <List> */}
          <ListItem disablePadding>
            <ListItemText primary={classEvent.description}/>
            <Button key={i} onClick={handleEventClick} sx={{ bgcolor: '#41414c' }}>Details</Button>
            
          </ListItem>
          {/* </List> */}
        </AccordionDetails>
      </Accordion>

    </>
  )
}
export default ClassListItem;