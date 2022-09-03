import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {PokemonContextProvider} from "./pokeContext"

ReactDOM.render(
    <PokemonContextProvider>
        <App />
    </PokemonContextProvider>, 
    document.getElementById("root")
)