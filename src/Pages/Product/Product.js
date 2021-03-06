import { Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, engine, speed, mileage, price, _id } = props.product;
    const url = `/product/${_id}`;

    return (
        <Grid item xs={2} sm={4} md={4} >
            <CardMedia
                component="img"
                style={{ width: '100%', margin: 'auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {engine}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {speed}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {mileage}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {price}
                </Typography>
            </CardContent>
            <Link to={url} style={{ textDecoration: 'none' }}><Button variant="contained">Details</Button></Link>
        </Grid>
    );
};

export default Product;