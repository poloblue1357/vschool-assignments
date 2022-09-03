import React from "react"

function Spot(props) {
    return (
        <div>
            <h3>Destination: {props.place}</h3>
            <h4>Price: {props.price < 500 ? "$" : props.price > 500 && props.price < 1000 ? "$$" : props.price > 1000 ? "$$$" : ""} {props.price}</h4>
            <p style={{backgroundColor: props.timeToGo==="Spring" ? "burlywood" : props.timeToGo==="Summer" ? "cornflowerblue" : props.timeToGo==="Fall" ? "indianred" : props.timeToGo==="Winter" ? "gray" : "white"}}>Time to Visit: {props.timeToGo}</p>
        </div>      
    )
}



export default Spot