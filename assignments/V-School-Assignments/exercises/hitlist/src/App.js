import React from "react"

import './styles.css'

import axios from "axios"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',

        }
    }
    
    componentDidMount () {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
        .then(response => {
            this.setState({
                name: response.data.name,
            })
        })
    }

    render() {
            // const map = this.state.people.map( (person) => {
            //     return person
            // })
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
    
}

export default App