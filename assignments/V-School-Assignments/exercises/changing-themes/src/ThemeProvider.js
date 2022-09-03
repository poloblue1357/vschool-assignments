import React from "react"
import "./styles.css"

const {Provider, Consumer} = React.createContext()

class ThemeProviderProvider extends React.Component {
    state = {
        theme: "dark"
    }
    changeTheme = () => {
        let newTheme
        if(this.state.theme === 'dark'){
            newTheme = 'light'
        } else {
            newTheme = 'dark'
        }
        this.setState({theme: newTheme})
    }
    render() {
        const {theme} = this.state
        return (
            <Provider value={{theme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
    
}

export {ThemeProviderProvider, Consumer as ThemeProviderConsumer}