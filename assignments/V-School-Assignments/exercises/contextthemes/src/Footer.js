import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <footer className={theme.theme}>
                    <h6>BASE 2519</h6>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer