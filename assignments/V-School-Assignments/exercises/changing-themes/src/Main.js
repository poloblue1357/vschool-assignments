import React from "react"
import "./styles.css"
import { ThemeProviderConsumer } from './ThemeProvider'


function Main() {
        return (
            <div className="Main">
            <ThemeProviderConsumer >
                {({theme, changeTheme}) => (
                    <div class={`${theme === "dark" ? "theme-light" : "theme-dark"}`}>
                        <h1>Click the button to toggle the {theme} theme!</h1>
                        <button  className={`${theme === "light" ? "theme-light" : "theme-dark"}`} onClick={changeTheme}>Toggle Theme</button>
                    </div>
                )}
            </ThemeProviderConsumer>
            </div>
        )
    }

export default Main