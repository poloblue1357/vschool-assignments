import React from "react"

import DiceBox from "./DiceBox"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            numbers:  [0, 0, 0, 0, 0]
        }
    }
    generateNumbers = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1
        const randomNumber1 = Math.floor(Math.random() * 6) + 1
        const randomNumber2 = Math.floor(Math.random() * 6) + 1
        const randomNumber3 = Math.floor(Math.random() * 6) + 1
        const randomNumber4 = Math.floor(Math.random() * 6) + 1

        this.setState(prevState => {
            return {
                numbers: [randomNumber, randomNumber1, randomNumber2, randomNumber3, randomNumber4]
            }
        })
    }

    render() {
        
        const mapNumbers = this.state.numbers.map(number => {
            return (
                <DiceBox numbers={number}/>
            )
        })
        return (
            <div>
                {mapNumbers}
                <button onClick={this.generateNumbers}>Get Numbers</button>
            </div>
        )
    }
}

export default App