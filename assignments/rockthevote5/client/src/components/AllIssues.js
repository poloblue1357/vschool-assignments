import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from "../context/UserProvider"
import CommentList from "./CommentList"

function AllIssues(props) {
    const { 
        title, 
        description,
        userString,
        _id 
    } = props
    
    const { upVote, downVote, issueComments } = useContext(UserContext)    
    
    const [totalVotes, setTotalVotes] = useState(props.upVoteUsers.length - props.downVoteUsers.length)
    const [commentButton, setCommentButton] = useState(false)
    const [objs, setObjs] = useState([])

    function commButton() {
        setCommentButton(prevState => !prevState)
    }   

    useEffect(() => {
        setTotalVotes(props.upVoteUsers.length - props.downVoteUsers.length)        
    }, [props.upVoteUsers.length, props.downVoteUsers.length])
    useEffect(() => {
        let x = issueComments?.filter(comment => comment.issue === _id)
        setObjs(x)
    }, [issueComments, _id])
    
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "5px"}}>
            <h2>@{userString}'s Post:</h2>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <button onClick={() => upVote(props._id)}>Upvote</button>
            <button onClick={() => downVote(props._id)}>Downvote</button>
            <p>Total Votes: {totalVotes}</p>
            <button onClick={() => commButton()}>{commentButton ? <p>Hide Comments</p> : <p>Show Comments</p>}</button>
            {commentButton ? <CommentList objs={objs} issueId={props._id}/> : <div></div>}
        </div>
    )
}

export default AllIssues