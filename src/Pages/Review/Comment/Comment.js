import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const { review } = props.comment;
    return (
        <div className="bg-white m-1">
            <p className="p-3 text-start">User Comment: <span className='p-1 comment'>{review}</span></p>
        </div>
    );
};

export default Comment;