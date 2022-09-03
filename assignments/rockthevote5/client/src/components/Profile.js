import React, {useContext} from "react"
import {UserContext} from "../context/UserProvider"
import IssueForm from "./IssueForm"
import IssueList from "./IssueList"

function Profile() {

    const {
        user: {
            username,
        },
        addIssue,
        issues
    } = useContext(UserContext)

    return (
        <div>
            <h1>Welcome @{username}</h1>
            <h2>Add An Issue:</h2>
            <IssueForm addIssue={addIssue}/>
            <h2>@{username} Posted Issues:</h2>
            <IssueList issues={issues}/>
        </div>
    )
}

export default Profile