import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <div>
                    <h3 className={theme.theme}>Click the "Button!" to change the theme!</h3>
                    <button className={theme.theme} onClick={theme.toggleTheme}>Button!</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main