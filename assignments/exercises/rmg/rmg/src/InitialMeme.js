import React from "react"
import MemeForm from "./MemeForm"

class InitialMeme extends React.Component {

    state = {
        memeList: [],
        rNumber: Math.floor(Math.random() * 99),
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => response.data.memes) 
        .then(data => {
            this.setState({
                memeList: data
            })
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const test1 = Math.floor(Math.random() *99)
            return {
                rNumber: test1 
            }
        })
    }
    render() {
        return (
            <div>
                <br />
                <button onClick={this.handleClick}>Next Meme!</button>
                <MemeForm meme={this.state.memeList[this.state.rNumber]} />
            </div>
        )
    }
}

export default InitialMeme