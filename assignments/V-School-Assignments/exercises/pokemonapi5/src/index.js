import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import "./styles.css"
import {PokemonContextProvider} from "./pokemonContext"

ReactDOM.render(
    <Router>
        <PokemonContextProvider>
            <App />
        </PokemonContextProvider>
    </Router>, 
    document.getElementById("root")
)