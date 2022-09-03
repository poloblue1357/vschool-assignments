import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Navbar(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <header className={theme.theme}>
                    <h1>BASE Jumping has saved my life.</h1>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar