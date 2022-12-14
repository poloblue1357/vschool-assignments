import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {

    state = {
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevTheme => {
            return {
                theme: prevTheme.theme === "light" ? "dark" : "light"
            }
        })
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}