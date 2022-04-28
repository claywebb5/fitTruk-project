import React from 'react';
import {useHistory} from 'react-router-dom';
// ---< MUI IMPORTS >-----
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

function BtnCreateClass() {
    const history = useHistory();

    const handleCreateClass = () => {
        history.push('/create-class');
    };

    return (
        <>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon onClick={handleCreateClass} />}
                >
                </SpeedDial>
        </>
    );
}

export default BtnCreateClass;