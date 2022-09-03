import React from "react"

function Pet(props) {
    return (
        <div>
            <h5 style={{color: "burlywood"}}>Pet Name: {props.name}</h5>
            <h5 style={{backgroundColor: "cornflowerblue"}}>Pet Breed: {props.breed}</h5>
        </div>
    )
}

export default Pet