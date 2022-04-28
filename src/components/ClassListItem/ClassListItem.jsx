import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function ClassListItem({ classEvent, i }) {
  const history = useHistory();

  const handleEventClick = () => {
    history.push(`/class-details/${classEvent.id}`)
  }

  return (
    <>

      <Accordion >
        <AccordionSummary
          sx={{ bgcolor: '#6d6e71', color: '#80bd02', fontWeight: 'bold' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{classEvent.classname} at {classEvent.abrv_start_time} with {classEvent.trainer_first_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem disablePadding>
            <ListItemText primary={classEvent.description}/>
            <Button key={i} onClick={handleEventClick} sx={{ bgcolor: '#41414c' }}>Details</Button>
          </ListItem>
        </AccordionDetails>
      </Accordion>

    </>
  )
}
export default ClassListItem;