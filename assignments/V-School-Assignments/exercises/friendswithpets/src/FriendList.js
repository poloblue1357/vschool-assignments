import React from "react"

import Friend from "./Friend"
import data from "./data"

function FriendList() {
    const friendInfo = data.map((friend,i) => {
        return <Friend key={friend.name + i} id={friend.id} friend={friend.name} age={friend.age} pets={friend.pets} />
    })

    return (
        <div>
            {friendInfo}
        </div>
    )
}

export default FriendList