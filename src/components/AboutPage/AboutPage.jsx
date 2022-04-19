import React, { useState } from 'react';
// ---------< COMPONENT VIEW IMPORTS >----------------
import About from './About';
import Packages from './Packages';
// ---------< MUI IMPORTS >----------------
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

//================***< INSTALLS >***=======================
// npm install @mui/lab
// npm install @material-ui/lab
// npm install @mui/icons-material
//================***< INSTALLS >***=======================


function AboutPage() {

  // ========< TABS LOGIC >===================
  const [value, setValue] = useState('1');

  // ------< TABS CLICK HANDLER >-------------
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          {/* TABS TITLE  */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered>
              <Tab label="About" value="1" />
              <Tab label="Classes & Packages" value="2" />
            </TabList>
          </Box>
          {/* TABS CONTENT (ABOUT) */}
          <TabPanel value="1">
            <About />
          </TabPanel>
          {/* TABS CONTENT (CLASSES & PACKAGES) */}
          <TabPanel value="2">
            <Packages />
          </TabPanel>

        </TabContext>
      </Box>
    </>
  );
}

export default AboutPage;
