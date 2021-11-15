import React from 'react';
import './Order.css';

const Order = (props) => {
    const { productName, productPrice, userName } = props.order;
    return (

        <div className="order">
            <div className="d-flex justify-content-between">
                <div className="text-start mx-5">

                    <h5>{productName}</h5>
                    <h6>Order by: {userName}</h6>
                    <h6>{productPrice}</h6>
                </div>
            </div>
        </div>

    );
};

export default Order;