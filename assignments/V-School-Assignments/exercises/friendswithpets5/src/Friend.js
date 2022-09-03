import React from "react"

import Pet from "./Pet"

function Friend(props) {
    const listPets = props.pets.map(pet => {
        return (
            <Pet name={pet.name} breed={pet.breed} />
        )
    })
    return (
        <div>
            <h2 style={{color: "ghostwhite"}}>Name: {props.name}</h2>
            <h4 style={{fontFamily: "sans-serif"}}>Age: {props.age}</h4>
            {listPets}
            <hr></hr>
        </div>
    )
}

export default Friend