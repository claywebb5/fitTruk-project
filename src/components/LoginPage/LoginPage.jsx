import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';



function LoginPage() {

  const history = useHistory();

  return (
    // <Paper sx={{ height: window.innerHeight , bgColor:'transparent' }}>



    <div>
      <LoginForm />
      <center>
        {/* <Button variant="outlined"
          onClick={() => {history.push('/registration');
          }}>
          <Typography style={{ color: "#000000", display: 'block' }} variant="body1" >
            Register
          </Typography>
        </Button> */}
      </center>
    </div>
    // </Paper>
  );
}

export default LoginPage;
