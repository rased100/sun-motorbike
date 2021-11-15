import React from 'react';

const Comment = (props) => {
    const { review } = props.comment;
    return (
        <div className="bg-white m-1">
            <p className="p-3 text-start">{review}</p>
        </div>
    );
};

export default Comment;