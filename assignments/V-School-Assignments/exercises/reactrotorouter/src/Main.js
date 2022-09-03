import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function Main() {
    return (
        <div>
            <h4 style={{color: "blue"}}>Main Section:</h4>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/services"><Services /></Route>
            </Switch>
        </div>
    )
}

export default Main