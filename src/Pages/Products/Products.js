import React from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    const { products } = useAuth();
    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;