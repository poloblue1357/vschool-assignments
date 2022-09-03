import React from "react"

import Friend from "./Friend"
import friendsArray from "./friendsArray"

function FriendList() {
    const x = friendsArray.map(friend => {
        return (
            <Friend name={friend.name} age={friend.age} pets={friend.pets} />
        ) 
    })
    return (
        <div style={{backgroundColor: "indianred"}}>
            {x}
        </div>
    )
}

export default FriendList