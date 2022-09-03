import React from 'react'

function Comment(props) {
    const { comment, userString } = props
    return (
        <div style={{border: "1px solid black", padding: "5px", left: "10px"}}>
            <h2>@{userString}'s Comment: </h2>
            <p>Comment: {comment}</p>
        </div>
    )
}

export default Comment