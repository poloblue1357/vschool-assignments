import React from 'react'

function Issue(props) {
    const { title, description } = props
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
        </div>
    )
}

export default Issue