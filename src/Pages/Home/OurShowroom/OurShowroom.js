import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import './OurShoroom.css';


const OurShowroom = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="d-flex justify-content-center bgcolor p-5 my-5 fulContainer">
            <Box sx={{ minWidth: 120 }} className="boxContainer">
                <Typography variant="h4" gutterBottom component="div">
                    Find Showroom
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Area</InputLabel>
                    <Select
                        className="bg-white"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        {/* <MenuItem value={'Select Your Area'}>Select Your Area</MenuItem> */}
                        <MenuItem value={'Barishal'}>Barishal</MenuItem>
                        <MenuItem value={'Chattogram'}>Chattogram</MenuItem>
                        <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                        <MenuItem value={'Khulna'}>Khulna</MenuItem>
                        <MenuItem value={'Rajshahi'}>Rajshahi</MenuItem>
                        <MenuItem value={'Rangpur'}>Rangpur</MenuItem>
                        <MenuItem value={'Mymensingh'}>Mymensingh </MenuItem>
                        <MenuItem value={'Sylhet'}>Sylhet </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default OurShowroom;