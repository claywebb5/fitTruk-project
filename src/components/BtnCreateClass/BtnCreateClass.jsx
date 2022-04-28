import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

// ---< MUI IMPORTS >-----
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Box from '@mui/material/Box';

function BtnCreateClass() {
    const history = useHistory();

    const handleCreateClass = () => {
        history.push('/create-class');
    };

    return (
        <>
            <Box sx={{ height: 80, flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon onClick={handleCreateClass} />}
                >
                </SpeedDial>
            </Box>
        </>
    );
}

export default BtnCreateClass;