import React from 'react';

const Product = (props) => {
    const { name, img } = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;