import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {ThemeProviderProvider} from "./ThemeProvider"
import "./styles.css"

ReactDOM.render(
    <ThemeProviderProvider>
        <App />
    </ThemeProviderProvider>, 
    document.getElementById("root")
    )