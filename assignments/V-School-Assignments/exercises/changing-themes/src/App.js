import React from "react"
import "./styles.css" 
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {ThemeProviderConsumer} from "./ThemeProvider"

class App extends React.Component {
    state = {
        theme: ''
    }

    render() {
        return (
            <ThemeProviderConsumer>
                {({theme, changeTheme}) => (
                    <div className={`${theme === "dark" ? "container theme-light" : "container theme-dark"}`}>
                        <Header  />
                        <Main  />   
                        <Footer  />
                    </div>
                )}
            </ThemeProviderConsumer>
        )
    }
}
export default App