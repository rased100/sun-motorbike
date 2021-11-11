import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, description, _p_id } = props.product;
    const url = `/product/${_p_id}`;
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
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Link to={url}><button className="btn btn-primary mb-3">Book Now</button></Link>
        </Grid>
    );
};

export default Product;