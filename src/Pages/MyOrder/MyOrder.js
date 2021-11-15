import React from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = (props) => {
    const { productName, productPrice, userName, productImage, productSpeed, productEngine } = props.myOrder;
    // console.log('img', productImage)

    // DELETE AN USER
    // const handleDeleteUser = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete?');
    //     if (proceed) {
    //         const url = `https://infinite-mesa-54946.herokuapp.com/orders/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully');
    //                     const remainingUsers = orders.filter(order => order._id !== id);
    //                     setOrders(remainingUsers);
    //                 }
    //             });
    //     }
    // }

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

export default MyOrder;