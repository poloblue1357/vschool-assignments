import React from 'react';

const Color = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        fontSize: 15,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
    }
    return (
        <div style={styles}>
            <div>
            <h2> This is {props.title}</h2>
            <h3> {props.subtitle}</h3>
            <h4>{props.information}.</h4> 
            <h5> {props.backgroundColor}.</h5>
            </div>
        </div>

    )
}
export default Color