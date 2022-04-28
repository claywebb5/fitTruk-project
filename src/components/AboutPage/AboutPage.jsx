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
import Container from '@mui/material/Container';

function AboutPage() {
  // ========< TABS LOGIC >===================
  const [value, setValue] = useState('1');

  // ------< TABS CLICK HANDLER >-------------
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <Box sx={{ bgcolor: "#fff", width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            {/* TABS TITLE  */}
            <Box sx={{ bgcolor: "#6d6e71", borderBottom: 1, borderColor: 'divider' }}>
              {/* <TabList onChange={handleChange} centered indicatorColor='#ace23a'> */}
              <TabList onChange={handleChange} centered indicatorColor='primary'>
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
      </Container>
    </>
  );
}

export default AboutPage;
