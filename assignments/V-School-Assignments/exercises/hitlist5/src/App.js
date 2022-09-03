import React from "react"

import "./App.css"

class App extends React.Component {
    
    state = {
        list: []
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data,
                })
            })
    }
    render() {
        const listOfNames = this.state.list.map((name, index) => {
            return (
                <div className="listItem" key={index}>
                    <p className="names">{name.name}</p>
                    <img className="images" src={name.image} alt=""></img>
                </div>    
            )
        })
        return (
            <div >
                <header className="header1">Don Corleone's Hit List</header>
                <div className="nameContainer">{listOfNames}</div>
            </div>
        )
    }
}

export default App