import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setmyOrders] = useState([]);
    console.log('my orders', myOrders)

    useEffect(() => {
        const url = `https://infinite-mesa-54946.herokuapp.com/myorders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setmyOrders(data));
    }, [])
    return (
        <div>
            <h2 className="bg-primary p-3 text-white">My Orders</h2>
            <Container>
                {
                    myOrders.map(myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>)
                }
            </Container>
        </div>
    );
};

export default MyOrders;