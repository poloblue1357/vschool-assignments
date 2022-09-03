import React from "react"

import Blocks from "./Blocks"
import "./styles.css"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            colors: ["black", "white", "white", "black"]
        }
        // this.smallTimeDJ = this.smallTimeDJ.bind(this)
    }
    smallTimeDJ = () => {
        this.setState((prevState) => {
            return {
                colors: prevState.colors.map(color => color === "white" ? "black" : "white")
            }
        })
    } 
    partyDJ = () => {
        this.setState((prevState) => {
           return {
            colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
        } 
        })
        } 
    leftProDJ = () => {
        this.setState( (prevState) => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
    }
    rightProDJ = () => {
        this.setState( (prevState) => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }
    fifthButton = () => {
        this.setState( (prevState) => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "beige" ]
            }
        })
    }
    sixthButton = () => {
        this.setState( (prevState) => {
            return {
                colors: [prevState.colors[0], "red", prevState.colors[2], prevState.colors[3] ]
            }
        })
    }
    seventhButton = () => {
        this.setState( () => {
            return {
                colors: ["white", "white", "white", "white"]
            }
        })
    }
    eighthButton = () => {
        this.setState( () => {
            return {
                colors: ["black", "black", "black", "black" ]
            }
        })
    }      
    render() {
        const changeColors = this.state.colors.map((color) => {
            return <Blocks color={color} />
        })
        return (
            <div className='blocks'>
                {changeColors}
                <button onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button onClick={this.partyDJ}>Party DJ</button>
                <button onClick={this.leftProDJ}>Left Pro DJ</button>
                <button onClick={this.rightProDJ}>Right Pro DJ</button>
                <button onClick={this.fifthButton}>5th Button</button>
                <button onClick={this.sixthButton}>6th Button</button>
                <button onClick={this.seventhButton}>7th Button</button>
                <button onClick={this.eighthButton}>8th Button</button>
            </div>
        )
    }
}

export default App


// import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             gender: '',
//             location: '',
//             dietRestrictions: [],
//             age: '',
//             firstName: '',
//             lastName: '',
//         }
//     }
    
//     handleChange = (event) =>{
//         const {name, value, type, checked } = event.target
//         // type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
//         if(name === 'dietRestrictions'){
//             const copyOfArr = [...this.state.dietRestrictions] 
//             copyOfArr.includes(value) ? copyOfArr.splice(copyOfArr.indexOf(value), 1) : copyOfArr.push(value)
//             this.setState({dietRestrictions: copyOfArr})
//         } else {
//             this.setState({[name]: value})
//         }
//     }
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input type='text' value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
//                     <input type='text' value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br />
//                     <input type='text' value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} /><br />
                    
//                     {/* Create radio buttons for gender here */}
//                     <label>
//                         <input type="radio" name="gender" value="male"  
//                         onChange={this.handleChange} 
//                         /> Male
//                         <br />
//                     </label>
//                     <label>
//                         <input type="radio" name="gender" value="female" 
//                         onChange={this.handleChange}
//                         /> Female
//                         <br />
//                     </label>
//                     {/* Create select box for location here */}
//                         <select name="location" onChange={this.handleChange} value=     {this.state.location} >
//                             <option value="bahamas">Bahamas</option>
//                             <option value="maldives">Maldives</option>
//                             <option value="Bora Bora">Bora Bora</option>
//                             <option value="santorini">Santorini</option>
//                         </select>
//                     <br />
                    
//                     {/* Create check boxes for dietary restrictions here */}
//                     <label>
//                         <input type="checkbox" name="dietRestrictions" value="peanut, " checked={this.state.dietRestrictions.includes('peanut, ')} onChange={this.handleChange} 
//                         /> Peanut
//                         <br />
//                         <input type="checkbox" name="dietRestrictions" value="gluten, " checked={this.state.dietRestrictions.includes('gluten, ')} onChange={this.handleChange} 
//                         /> Gluten
//                         <br />
//                         <input type="checkbox" name="dietRestrictions" value="vegetarian, " checked={this.state.dietRestrictions.includes('vegetarian, ')} onChange={this.handleChange} 
//                         /> Vegetarian
//                         <br />
//                     </label>
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.location}</p>
//                 <p>
//                     Your dietary restrictions: 
//                     {this.state.dietRestrictions}
//                 </p>
//             </main>
//         )
//     }
// }

// export default App
