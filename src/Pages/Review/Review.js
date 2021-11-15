import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const Review = () => {
    const comment = { userReview: '' }
    // console.log('comment', comment)

    const [review, setReview] = useState('');
    console.log('rvw', review)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newComment = { ...comment };
        newComment[field] = value;
        setReview(value);
    }

    const handleOrderSubmit = e => {
        // collect data
        // const userComments = review;
        // console.log('usercomment', userComments)

        const userComments = {
            usersTalk: review
        };
        console.log('usercomment', userComments)

        // send to the server
        fetch('https://infinite-mesa-54946.herokuapp.com/usercomments', {
            // fetch('http://localhost:5000/usercomments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userComments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Place Successfully')
                }
            });

        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleOrderSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="userReview"
                    onBlur={handleOnBlur}
                    defaultValue=""
                    size="small"
                />
                <Button style={{ width: '50%', margin: '20px 0 0 0' }} type="submit" variant="contained">Comment</Button>
            </form>
        </div>
    );
};

export default Review;