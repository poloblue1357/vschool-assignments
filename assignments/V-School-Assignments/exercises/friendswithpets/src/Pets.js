import React from "react"


function Pets(props) {
    
    
    return (
        <div>
            <h5 className="petName">Pet Name: {props.name}</h5>
            <h5 className="petBreed">Pet Breed: {props.breed}</h5>
        </div>
    )
}

export default Pets