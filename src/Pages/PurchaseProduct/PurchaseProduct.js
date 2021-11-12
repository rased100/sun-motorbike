import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PurchaseProduct = () => {
    const [product, setProduct] = useState({});
    const { Id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/product/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <Box>
            <Typography style={{ margin: '0 0 20px 0' }} variant="h2" component="div">
                Product Details
            </Typography>
            <CardMedia
                component="img"
                style={{ width: '45%', margin: 'auto' }}
                image={product.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography style={{ width: '50%', margin: 'auto' }} variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <Button style={{ margin: '0 0 20px 0' }} variant="contained">Purchase now</Button>
        </Box>
    );
};

export default PurchaseProduct;