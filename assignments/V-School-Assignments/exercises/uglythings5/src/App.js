import React from "react"
import Inputs from "./Inputs"
import List from "./List"

function App() {
    return (
        <div>
            <h1 style={{color: "red"}}>Add New Item to List: </h1>
            <Inputs />
            <h2>List of Ugly Things: </h2>
            <List />
        </div>
    )
}

export default App