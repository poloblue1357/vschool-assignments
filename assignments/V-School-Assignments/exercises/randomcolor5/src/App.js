import React from "react"
import axios from "axios"

class App extends React.Component {

    state = {
        color: [{hex: ''}]

    }

    componentDidMount() {
        this.dontRepeatYourself()
    }
    
    handleChange = () => {
        this.dontRepeatYourself()
        
    }
    dontRepeatYourself = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    color: data.colors,
                })    
            })
    }

    render() {
        
        return (
            <div style={{backgroundColor: `#${this.state.color[0].hex}`, height: "1000px", display: "block"}}> 
                <button onClick={this.handleChange}>Change Color!</button>
            </div>
        )
    }
}

export default App