import React from "react"

function BlogPost(props) {
    return (
        <div className="bList">
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
            <p>Post by {props.author} on {props.date}.</p>
            
            <hr className="hRule"></hr>
        </div>
    )
}

export default BlogPost