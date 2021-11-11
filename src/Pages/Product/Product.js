import { Grid } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, img } = props.product;
    return (
        <Grid item xs={2} sm={4} md={4} >
            <h2>{name}</h2>
            <img width='100%' src={img} alt="" />
        </Grid>
    );
};

export default Product;