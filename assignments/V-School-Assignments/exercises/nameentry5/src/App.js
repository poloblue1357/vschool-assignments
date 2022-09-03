import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            allNames: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                name: '',
                allNames: [...prevState.allNames, this.state.name]
            }
        })
    }
    render() {
        const listOfNames = this.state.allNames.map(name => {
            return <li>{name}</li>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                    <h1>{this.state.name}</h1>
                    <h3>Names Previously Entered</h3>
                    <ol>{listOfNames}</ol>
                </form>
            </div>
        )
    }
}

export default App