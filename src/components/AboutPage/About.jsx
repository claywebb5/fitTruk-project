import React, { useState } from 'react';
// ---------< MUI IMPORTS >----------------
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

// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';


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
                {/*========< START HEADING CARD >================*/}
                <Card>
                    <CardContent>
                        <Typography variant="h3" align="center">
                            ABOUT THE TRUK
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6" align="center">
                            Fit Truk is a fully equipped, mobile, outdoor gym complete with squat rack, cable station, landmine, pull up and dip bars, TRX, medicine ball wall and immersive sound and lighting experience.
                        </Typography>
                    </CardContent>
                </Card>

                {/*========< START HERE'S WHAT IS ON THE TRUK CARD >================*/}
                <Card>
                    <Typography variant="h6" align="center">
                        HERE'S WHAT IS ON THE TRUK:
                    </Typography>

                    {/* ========< HIGHLIGHTS ACCORDION >============= */}
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography>HIGHLIGHTS</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Mobile Sign in" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Workout Displays" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Water Bottle Filler" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Heat/AC" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Office workstation for private health plans" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="TV's for workout experience" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="State-of-the-art sound system" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* ========< EQUIPMENT ACCORDION >============= */}
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
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
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
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
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
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
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
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
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
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
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <div>
                        {/* ------< SUMMARY >-------- */}
                        <h3>POWER</h3>
                        {/* ------< DETAILS >-------- */}
                        <li>7 Onboard Batteries</li>
                        <li>400 Watt Solar Panel System</li>
                        <li>110 Power Inverter</li>
                    </div>
                    {/* ===========< ACCORDION >=============== */}
                    <Accordion>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography></Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                {/*======< END HERES WHAT'S ON THE TRUK CARD >======================== */}
                <Card>
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
                </Card>
                {/*======< END PICTURES CARD >======================== */}
            </Container>
        </>
    );
}

export default AboutTab;
