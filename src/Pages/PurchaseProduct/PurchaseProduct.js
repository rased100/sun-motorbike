import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PurchaseProduct = () => {
    const { products } = useAuth();
    // console.log('pp', products[1].img)
    const { productId } = useParams();
    return (
        <Box>
            <Typography style={{ margin: '0 0 20px 0' }} variant="h2" component="div">
                Product Details
            </Typography>
            <CardMedia
                component="img"
                style={{ width: '25%', margin: 'auto' }}
                image={products[productId - 1].img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {products[productId - 1].name}
                </Typography>
                <Typography style={{ width: '50%', margin: 'auto' }} variant="body2" color="text.secondary">
                    {products[productId - 1].description}
                </Typography>
            </CardContent>
            <Button style={{ margin: '0 0 20px 0' }} variant="contained">Purchase now</Button>
        </Box>
    );
};

export default PurchaseProduct;