import React from "react"
import useSound from "use-sound"

import Square from "./Square"
import "./styles.css"

class App extends React.Component {
    state = {
        play: false
    }
    constructor() {
        super()
        this.state = {
            colors: ["black", "white", "white", "black"]
        }
    }
    changeBW = () => {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map(color => color === "white" ? "black" : "white")
            }       
        })
    }
    twoPurple = () => {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }
    blueLeft =() => {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1] , "blue", prevState.colors[3]]
            }
        })
    }
    blueRight = () => {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }
    redSon = () => {
        this.setState(prevState => {
            return {
                colors: ["red", "indianred", "indianred", "red"]
            }
        })
    }
    greenSon = () => {
        this.setState(prevState => {
            return {
                colors: ["green", "green", "green", "green"]
            }
        })
    }
    orangeLeft = () => {
        this.setState(prevState => {
            return {
                colors: ["orange", prevState.colors[1], "orange", prevState.colors[3]]
            }
        })
    }
    sunShine = () => {
        this.setState(prevState => {
            return {
                colors: ["yellow", "yellow", "yellow", "yellow"]
            }
        })
    }
    soundClip = () => {
        return    
    }

    render() {
        const boxes = this.state.colors.map((color) => {
            return <Square color={color} />
        })

        return (
            <div className="squareContainer">
                {boxes}
                <button onClick={this.changeBW}>Black/White</button>
                <button onClick={this.twoPurple}>Two Purple</button>
                <button onClick={this.blueLeft}>Blue Left</button>
                <button onClick={this.blueRight}>Blue Right</button>
                <button onClick={this.redSon}>Red</button>
                <button onClick={this.greenSon}>Green</button>
                <button onClick={this.orangeLeft}>Orange Left</button>
                <button onClick={this.sunShine}>Sunshine</button>
                <button onClick={this.soundClip}>Sound Clip</button>
            </div>
        )
    }
}

export default App