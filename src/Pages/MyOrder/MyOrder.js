import React from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = (props) => {
    const { productName, productPrice, email, userName } = props.myOrder;

    return (

        <div className="order">
            <div className="d-flex justify-content-between">
                <div className="text-start mx-5">

                    <h5>{productName}</h5>
                    <h6>{productPrice}</h6>
                    <p>--------</p>
                    <h6>Name: {userName}</h6>
                    <p>email: {email}</p>

                </div>
                <div className="d-flex mx-5 align-items-center">
                    <Button>Cancle</Button>
                </div>
            </div>
        </div>

    );
};

export default MyOrder;