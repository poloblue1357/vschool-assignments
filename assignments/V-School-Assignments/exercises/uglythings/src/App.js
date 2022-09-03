import React from "react"
import Inputs from "./Inputs"
import List from "./List"

function App() {
    return (
        <div>
            <h1 style={{color: "gray"}}>Add New Thing to List!</h1>
            <Inputs />
            <h1 style={{color: "pink"}}>List of Things: </h1>
            <List />
        </div>
    )
}

export default App