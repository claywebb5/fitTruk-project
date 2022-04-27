import React from 'react';
// ---------< MUI IMPORTS >----------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function PackagesTab() {

    return (
        <>

            <Container>
                {/*========< START HEADING CARD >================*/}
                <Card >
                    <CardContent >
                        <Typography variant="h3" align="center">
                            CLASSES & PACKAGES
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h5" align="center">
                            We bring the gym outside.
                        </Typography>
                        <Typography variant="body1" align="center">
                            Certified personal trainers lead strength based workouts at a location near you. Time to think outside the box.
                        </Typography>
                    </CardContent>
                </Card>

                {/*========< START PACKAGES CARD >================*/}
                <Card>
                    <Typography variant="h3" align="center">
                        PACKAGES
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="h5" align="center">
                        First 3 Classes
                    </Typography>
                    <Box align="center" sx={{ border: 1 }}>
                        <Typography variant="h4" align="center">
                            FREE!
                        </Typography>
                    </Box>

                    {/*=====< CLASS PACKAGE PRICES >=======*/}
                    <Box
                        sx={{
                            display: 'grid',
                            gridAutoFlow: 'row',
                            gap: 1,
                        }}
                    >
                        <Grid sx={{ gridColumn: '1' }}>
                            <Typography variant="h5" align="center">
                                1 Class
                            </Typography>
                            <Box align="center" sx={{ border: 1 }}>
                                <Typography variant="h4" align="center">
                                    $20
                                </Typography>
                                <Typography variant="subtitle2" align="center">
                                    PLUS TAX
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid sx={{ gridColumn: '2 / 3' }}>
                            <Typography variant="h5" align="center">
                                4 Classes
                            </Typography>
                            <Box align="center" sx={{ border: 1 }}>
                                <Typography variant="h4" align="center">
                                    $17.99/class
                                </Typography>
                                <Typography variant="subtitle2" align="center">
                                    PLUS TAX
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid sx={{ gridColumn: '3 / 3' }}>
                            <Typography variant="h5" align="center">
                                8 Classes
                            </Typography>
                            <Box align="center" sx={{ border: 1 }}>
                                <Typography variant="h4" align="center">
                                    $15/class
                                </Typography>
                                <Typography variant="subtitle2" align="center">
                                    PLUS TAX
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>

                    <Box align="center" sx={{ border: 3 }}>
                        <Typography variant="h5" align="center">
                            SIGN UP FOR CLASSES TODAY!
                        </Typography>
                    </Box>
                </Card>
            </Container>
        </>
    );
}

export default PackagesTab;
