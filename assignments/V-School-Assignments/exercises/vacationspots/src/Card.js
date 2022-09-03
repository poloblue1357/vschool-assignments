import React from "react"

function Card(props) {
    console.log(props)
    return (
        <div className={`${props.place}`}>
            <h3 className="h3" style={{color: props.place && ""}}>Place: {props.place}</h3>
            <h3 className="h31" style={{color: props.price && "blue"}}> Price: { props.price <= 500 ? "$" : props.price >= 500 && props.price <= 1000 ? "$$" : props.price >= 1000 ? "$$$" : "none"} {props.price}</h3>
            <h4 className="h4" className={`${props.time}`} >Time To Visit: {props.time}</h4>
            <hr></hr>
        </div>
    )
}

export default Card