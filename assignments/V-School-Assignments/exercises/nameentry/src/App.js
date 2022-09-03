import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            allNames: [],
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault() 
       //function sets state with prev state
       //function needs to take allNames and push  the name
       //return the new state of all names
       this.setState( prevState => {
           return {
               names: '',
               allNames: [...prevState.allNames, this.state.name]
           }
       })
    }

    render() {
        const listOfNames = this.state.allNames.map((name) => {
            return <li>{name}</li>
        })
        
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.name} placeholder="Name" name="name" onChange={this.handleChange}  />
                        <br />
                    </label>
                    <button>Submit</button>
                    <h1>
                        {this.state.name}
                    </h1>
                    <h2>List of Names Previously Entered:</h2>
                    <ol> 
                        
                           {listOfNames}  
                          
                    </ol>   
                </form>
            </main>
            
        )
    }
}
    

export default App