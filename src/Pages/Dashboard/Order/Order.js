import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Order.css';

const Order = (props) => {
    const { productName, productPrice, userName, productImage, productSpeed, productEngine } = props.order;
    // console.log('img', productImage)
    return (

        <div className="order">
            <div className="d-flex justify-content-between">
                {/* <img src={productImage} alt="" /> */}
                <div className="text-start mx-5">

                    <h5>{productName}</h5>
                    <h6>Order by: {userName}</h6>
                    {/* <h6>{productSpeed}</h6>
                    <h6>{productEngine}</h6> */}
                    <h6>{productPrice}</h6>
                </div>
                <div className="d-flex mx-5 align-items-center">
                    <Button>Cancle</Button>
                </div>
            </div>
        </div>

    );
};

export default Order;