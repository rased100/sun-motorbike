import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const comment = { userReview: '' }
    // console.log('comment', comment)

    const [review, setReview] = useState('');
    // console.log('rvw', review)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newComment = { ...comment };
        newComment[field] = value;
        setReview(value);
    }

    const handleOrderSubmit = e => {

        const userComments = {
            review: review
        };
        console.log('usercomment', userComments)

        // send to the server
        fetch('http://localhost:5000/comments', {
            // fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userComments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('comment post successfully')
                }
            });

        e.preventDefault();
    }

    return (
        <div className="container m-5 bg-secondary p-5">
            <form onSubmit={handleOrderSubmit}>
                <TextField className="bg-white p-1"
                    placeholder="Comment"
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="userReview"
                    onBlur={handleOnBlur}
                    defaultValue=""
                    size="small"
                />
                <Button style={{ width: '50%', margin: '20px 0 0 0' }} type="submit" variant="contained">post</Button>
            </form>
        </div>
    );
};

export default Review;