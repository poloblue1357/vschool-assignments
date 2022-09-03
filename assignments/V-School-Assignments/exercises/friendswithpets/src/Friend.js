import React from "react"

import Pets from "./Pets"

function Friend(props) {
    const typesOfPets = props.pets.map((pet,i) => {
        return <Pets key={pet.name + i} name={pet.name} breed={pet.breed} />
    })
    return (
        <div className={`${props.friend}`}>
            <h3 className="personName">Name: {props.friend}</h3>
            <h3 className="personAge">Age: {props.age}</h3>
            {typesOfPets}
        </div>
    )
}

export default Friend 
