import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Comment from '../Comment/Comment';

const ReviewUi = () => {
    const { comments } = useAuth();

    return (
        <div className="bgcolor p-5 my-5">
            <h4>User Reviews</h4>
            {
                comments.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
                // orders.map(order => <Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default ReviewUi;