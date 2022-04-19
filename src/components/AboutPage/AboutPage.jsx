import React, { useState } from 'react';
// ---------< COMPONENT VIEW IMPORTS >----------------
import About from './About';
import Packages from './Packages';
// ---------< MUI IMPORTS >----------------
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';


function AboutPage() {

  // ======< IMAGE DATA >==================
  const itemData = [
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4729.jpg",
      title: 'First',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4752.jpg",
      title: 'Second',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4755.jpg",
      title: 'Third',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4765.jpg",
      title: 'Fourth',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4767.jpg",
      title: 'Fifth',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4791.jpg",
      title: 'Sixth',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4776-scaled.jpg",
      title: 'Seventh',
    },
    {
      img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4793.jpg",
      title: 'Eighth',
    },
  ]

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
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered>
              <Tab label="About" value="1" />
              <Tab label="Classes & Packages" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <About />
          </TabPanel>
          <TabPanel value="2">
            <Packages />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default AboutPage;
