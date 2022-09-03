import React from "react"
import {UglyContextConsumer} from "./uglyContext"

class Inputs extends React.Component {

    state = {
        title: '',
        description: '',
        imgUrl: '',
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [ name ]: value})
    }
    render() {
        return (
            <UglyContextConsumer>
                {(context) => (
                    <form onSubmit={(event) => {
                            event.preventDefault()
                            context.addItemToList({title: this.state.title, description: this.state.description, imgUrl: this.state.imgUrl}
                    )}}>
                        <input placeholder="Image Url" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}></input>
                        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}></input>
                        <input placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}></input>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </UglyContextConsumer>
        )
    }
}

export default Inputs