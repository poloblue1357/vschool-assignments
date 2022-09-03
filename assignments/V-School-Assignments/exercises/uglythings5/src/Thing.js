import React from "react"
import { UglyContextConsumer } from "./uglyContext"

class Thing extends React.Component  {

    state = {
        isEdit: false,
        title: this.props.item.title,
        description: this.props.item.description,
        imgUrl: this.props.item.imgUrl,
    }
    // const {title} = props.item
    toggleEdit = () => {
        this.setState(prevState => {
            return {
                isEdit: !prevState.isEdit
            }
        })
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [ name ]: value})
    }
    render() {
        return (
            <div>
            {/* <UglyContextConsumer>
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
            </UglyContextConsumer> */}
                {this.state.isEdit ? 
                    <UglyContextConsumer>
                        {context => (
                            <div>
                                <form onSubmit={(event) => {
                                    event.preventDefault()
                                    this.toggleEdit()
                                    context.editItem(this.props.item._id, {title: this.state.title, description: this.state.description, imgUrl: this.state.imgUrl
                                })}}>
                                    <input placeholder="Image Url" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}></input>
                                    <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}></input>
                                    <input placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}></input>
                                    <button type="submit">Submit</button>
                                </form>
                                <button onClick={() => this.toggleEdit()}>Cancel edit</button>
                            </div>
                        )}
                    </UglyContextConsumer>
                :
                    <div>
                        <h3 style={{color: 'blue'}}>Title: {this.props.item.title}</h3>
                        <h5 style={{color: "orange"}}>Description: {this.props.item.description}</h5>
                        <img src={this.props.item.imgUrl} alt={this.props.item.description} style={{height: "300px", width: "300px"}}/>
                        <button onClick={() => this.toggleEdit()}>Edit</button>
                        <UglyContextConsumer>
                            {context => {
                                 return <button onClick={() => context.deleteItem(this.props.item._id)}>Delete</button>
                            }}
                        </UglyContextConsumer>
                        <hr />
                    </div>
                }
                
            </div>
        )
    }
}

export default Thing

// may have to manage state here because of the delete/edit buttons, 41 mins in video
// need id to edit. props.item._id
// create form with new edits