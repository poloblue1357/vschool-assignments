import React from "react"

import {ThemeContextConsumer} from "./ThemeContext"

import EditButton from "react-edit-button"

class UploadedInfo extends React.Component {
    render() {
        return (
            <div>
                <h3>Uploaded Information:</h3>
                <ThemeContextConsumer>
                    {({todos, deleteInfo, handleOnAccept}) => {
                        return todos.map(todo => (
                            <div>
                                <h4>Ugly Item:{todo.title}</h4>
                                <h4>Description:{todo.description}</h4>
                                <button onClick={() => deleteInfo(todo._id)}>Delete</button>
                                <br />
                                <EditButton onAccept={handleOnAccept}><span>{"edit me"}</span></EditButton>
                                <br />
                                <img src={todo.img} alt=""></img>
                            </div>
                        ))
                    }}
                </ThemeContextConsumer>
            </div>
        )
    }
}

export default UploadedInfo