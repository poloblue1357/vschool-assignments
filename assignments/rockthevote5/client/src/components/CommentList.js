import React, {useContext} from "react"
import Comment from "./Comment.js"
import CommentForm from "./CommentForm"
import {UserContext} from "../context/UserProvider"

function CommentList(props) {
    const { objs, issueId } = props
    const { addComment } = useContext(UserContext)

    return (
        <div>
            <CommentForm  addComment={addComment} issueId={issueId}/>
            { objs?.map(comment => <Comment {...comment} key={comment._id}/> )}
        </div>
    )
}

export default CommentList