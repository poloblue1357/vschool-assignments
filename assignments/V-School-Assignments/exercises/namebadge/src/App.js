import React from "react"

import "./styles.css"

class App extends React.Component {
    constructor() {
    super()
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phoneNumber: '',
        favoriteFood: '',
        completedBadge: '',
    }
    }
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
        // if(text.length < 3) {
        //     console.log("Your text is less than what's required.")
        // }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
           return {
               completedBadge: [prevState.completedBadge]
           }   
        })   
    }
    render() {

        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input minLength="3" required="true" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input minLength="3" required="true" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input minLength="3" required="true" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input  minLength="3" required="true" type="text" name="placeOfBirth" placeholder="Place of Birth" value={this.state.placeOfBirth} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input minLength="3" required="true" type="number" name="phoneNumber" placeholder="Phone- Numbs Only" value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input minLength="3" required="true" type="text" name="favoriteFood" placeholder="Favorite Food" value={this.state.favoriteFood} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <textarea minLength="3" required="true" placeholder="Tell us about yourself" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <button >Submit</button>
                </form>
                <div name="completedBadge">
                    <h1>Badge:</h1>
                    <p>Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Phone: {this.state.phoneNumber}</p>
                    <p>Place of Birth: {this.state.placeOfBirth}</p>
                    <p>Favorite Food: {this.state.favoriteFood}</p>
                    <p>Email: {this.state.email}</p>
                    <textarea value={this.state.value}/>
                </div> 
            </main>

            
        )
    }
}

export default App

