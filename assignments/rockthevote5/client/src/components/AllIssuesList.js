import React from "react"
import AllIssues from "./AllIssues.js"

function AllIssuesList(props) {
    const { username, allIssues, upVote } = props
    const x = [...allIssues].sort((a, b) => a.upVoteUsers.length - b.upVoteUsers.length )
    const y = x.concat().reverse()
    return (
        <div>
            { y.map(issue => <AllIssues {...issue} key={issue._id} username={username} upVote={upVote}/> )}
        </div>
    )
}

export default AllIssuesList