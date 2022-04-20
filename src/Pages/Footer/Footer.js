import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <h4>This is footer</h4>
            <Box className="background"
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box className="header" borderBottom={1}>Help</Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    Contact
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    Support
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    Privacy
                                </NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="header" borderBottom={1}>Account</Box>
                            <Box>
                                <NavLink className="decoration" to="/login" color="inherit">
                                    Login
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink className="decoration" to="/register" color="inherit">
                                    Register
                                </NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="header" borderBottom={1}>Messages</Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    Backup
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    History
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink className="decoration" to="/" color="inherit">
                                    Roll
                                </NavLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" color="darkgrey" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        Supper Bike Collection &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;