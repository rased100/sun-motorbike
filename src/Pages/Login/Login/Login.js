import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <Box sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>Login</Typography>
            {/* <form onSubmit={handleLoginSubmit}> */}
            <form>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    type="email"
                    name="email"
                    // onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    // onChange={handleOnChange}
                    variant="standard" /> <br />

                <Button sx={{ width: '25%', m: 1 }} type="submit" variant="contained">Login</Button><br />
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
            </form>
            <p>------------------------</p>
            {/* <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button> */}
            <Button sx={{ width: '25%', m: 1 }} variant="contained">Google Sign In</Button>
        </Box>
    );
};

export default Login;