import React from "react"

class RenderMeme extends React.Component {

    state = {
        isEdit: false
    }
    toggleEdit = () => {
        this.setState(prevState => {
            return {
                isEdit: !prevState.isEdit
            }
        })
    }
    
    render() {
        return (
            <div>
            <h1>Created Meme: </h1> 
                {this.state.isEdit ?
                    <div>
                        <form onSubmit={(event) => {
                                this.props.submitEdit(event, this.props.index)
                                return this.toggleEdit()
                            }}>
                            <input type="text" placeholder="Edit Top Text" name="editTopText" value={this.props.editTopText} onChange={this.props.handleChange}/>
                            <input type="text" placeholder="Edit Bottom Text" name="editBottomText" value={this.props.editBottomText} onChange={this.props.handleChange}/>
                            <button >Submit Edit</button>
                        </form> 
                        <button onClick={() => this.toggleEdit()}>Cancel Edit</button>
                        <h3>{this.props.editTopText}</h3>
                        <img src={this.props.url} alt=''></img>
                        <h3>{this.props.editBottomText}</h3>
                    </div>
                    :
                    <div>
                        <h3>{this.props.topText}</h3>
                        <img src={this.props.url} alt=''></img>
                        <h3>{this.props.bottomText}</h3>
                        <button onClick={()=> this.props.deleteMeme(this.props.index)}>Delete</button>
                        <button onClick={() => this.toggleEdit()}>Edit</button>
                    </div> 
                }
            </div>
        )
    }  
}

export default RenderMeme