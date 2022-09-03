import React from "react"

function Pokemon(props) {
    
    return (
        <div>
            <h3>name: {props.p.name}</h3>
            <h5>hp: {props.p.hp}</h5>
            <p>supertype: {props.p.supertype}</p>
            <img src={props.p.images.large} alt={props.p.name} style={{height: "400px", width: "350px"}}/>
            <br />
            <hr />
        </div>
    )
}

export default Pokemon