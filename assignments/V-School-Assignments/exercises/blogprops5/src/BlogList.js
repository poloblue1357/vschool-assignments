import React from "react"

import BlogPost from "./BlogPost"
import dataArray from "./dataArray"

function BlogList() {

    const data = dataArray.map(post => {
        return (
            <BlogPost title={post.title} subtitle={post.subTitle} author={post.author} date={post.date} />
        )
    })

    return (
        <div>
            {data}
            <p className="oPostsButton">Older Posts</p>
        </div>
    )
}

export default BlogList