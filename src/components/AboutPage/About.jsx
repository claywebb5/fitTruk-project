import React, {useState} from 'react';
// ---------< MUI IMPORTS >----------------
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

function AboutTab() {

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

    return (
      <>
        <Container>
          <div>
            <h1>ABOUT THE TRUK</h1>
          </div>
          <div>
            <h3>
              Fit Truk is a fully equipped, mobile, outdoor gym complete with squat rack, cable station, landmine, pull up and dip bars, TRX, medicine ball wall and immersive sound and lighting experience.
            </h3>
          </div>
          <div>
            <h2>HERE'S WHAT IS ON THE TRUK:</h2>
          </div>
          {/* ========< ACCORDION >============= */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>HIGHLIGHTS</h3>
            {/* ------< DETAILS >-------- */}
            <li>Mobile Sign in</li>
            <li>Workout Displays</li>
            <li>Water Bottle Filler</li>
            <li>Heat/AC</li>
            <li>Office workstation for private health plans</li>
            <li>TV's for workout experience</li>
            <li>State-of-the-art sound system</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>EQUIPMENT</h3>
            {/* ------< DETAILS >-------- */}
            <li>Squat Rack</li>
            <li>Commercial Cable Station</li>
            <li>Pull-Up Bars</li>
            <li>Adjustable Plyo Boxes</li>
            <li>Dip Bars</li>
            <li>Battle Rope</li>
            {/* BREAK */}
            <li>2 Rogue Landmines</li>
            <li>Trx Trainer</li>
            <li>Torque Tank M1 Sled</li>
            <li>2 Rogue Benches</li>
            <li>3 Solid Fitness Barbells</li>
            <li>2 Solid Fitness Training Bars</li>
            {/* BREAK */}
            <li>Trap Bar</li>
            <li>Bumper Plates</li>
            <li>Full Kettle Bell and Dumbbell Set</li>
            <li>Resistance Bands</li>
            <li>Medicine Balls</li>
            <li>Jump Ropes</li>
            {/* BREAK */}
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>AUDIO/VIDEO</h3>
            {/* ------< DETAILS >-------- */}
            <li>Pioneer DMG-WT8600NEX Head Unit with 10.1” Floating Display</li>
            <li>Kicker Marine Amplifiers</li>
            <li>8 Kicker 6.5” Marine Lighted Marine Speakers</li>
            <li>2 Bazooka Marine Subwoofers</li>
            <li>2 Flat Screen LED Displays</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>LIGHTING</h3>
            {/* ------< DETAILS >-------- */}
            <li>Million Color App Controlled LED Under-glow Lighting</li>
            <li>6 LED Scene Lights</li>
            <li>2 LED Light Bars</li>
            <li>LED Lighting Throughout Interior Space</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>SECURITY</h3>
            {/* ------< DETAILS >-------- */}
            <li>Viper Audible Alarm System with Text Alerts</li>
            <li>App Controlled Lock/Unlock, GPS Location/Speed Tracking</li>
            <li>Remote Start</li>
            <li>Low Battery Alerts</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>INTERIOR AMENITIES</h3>
            {/* ------< DETAILS >-------- */}
            <li>Desk and Workspace</li>
            <li>Heated and Cooled Rear Workspace</li>
            <li>Interior Audio Controls</li>
            <li>Mini Fridge</li>
            <li>Water Bottle Filler</li>
            <li>360 Camera System For Driver- Always on with Video Storage</li>
            <li>Front Touchscreen Head Unit</li>
            <li>Custom Fit Truk Seats</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>POWER</h3>
            {/* ------< DETAILS >-------- */}
            <li>7 Onboard Batteries</li>
            <li>400 Watt Solar Panel System</li>
            <li>110 Power Inverter</li>
          </div>
          {/* ===========< ACCORDION >=============== */}
          <div>
            {/* ------< SUMMARY >-------- */}
            <h3>PICTURES</h3>
            {/* ------< DETAILS >-------- */}
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Container>
      </>
    );
  }

export default AboutTab;
