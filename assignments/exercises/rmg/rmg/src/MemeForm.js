import React from "react"
import RenderMeme from "./RenderMeme"

class MemeForm extends React.Component {
    
    state = {
        topText:  '',
        bottomText: '',
        createdMemes: [],
        isEdit: false,
        editTopText: '',
        editBottomText: '',
    }
    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({ 
            [ name ]: value, 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const newMeme = {
                topText: this.state.topText,
                bottomText: this.state.bottomText,
                url: this.props.meme.url,
                
            }
            return {
                topText: '',
                bottomText: '',
                createdMemes: [...prevState.createdMemes, newMeme]
            }
        })
    }
    deleteMeme = (memeIndex) => {
        console.log("delete")
        // const updatedArray = {
        //     createdMemes[index]: '',
        // }
        let filteredMemes = this.state.createdMemes.filter((meme, index)=> index !== memeIndex )

        this.setState({ 
                createdMemes: filteredMemes
            }
        )
    }
    editMeme = (memeIndex) => {
        console.log("edit")
        // let obj = {name: "J"}
        // obj.name = "bob"
        // let findMeme = this.state.createdMemes.find((meme, index) => index === memeIndex)
        // findMeme.topText = this.state.editTopText 
        // findMeme.bottomText = this.state.editBottomText
        // const mapOverMeme = this.state.createdMemes.map((meme, index) => index === memeIndex ? findMeme : meme )
        // this.setState(prevState => {
        //     return {
        //         isEdit: !prevState.isEdit,
        //         createdMemes: mapOverMeme
        //     }
        // })
    }
    submitEdit = (event, memeIndex) => {
        event.preventDefault()
        let findMeme = this.state.createdMemes.find((meme, index) => index === memeIndex)
        findMeme.topText = this.state.editTopText 
        findMeme.bottomText = this.state.editBottomText
        const mapOverMeme = this.state.createdMemes.map((meme, index) => index === memeIndex ? findMeme : meme )
        this.setState(prevState => {
            return {
                createdMemes: mapOverMeme
            }
        })
    }

    render() {
        //console.log("MemeForm Props" + this.props.topText)
        const mapCreatedMemes = this.state.createdMemes.map((meme, index) => {
            return (
                <RenderMeme meme={meme} index={index} key={index} topText={meme.topText} bottomText={meme.bottomText} url={meme.url} editBottomText={this.state.editBottomText} editTopText={this.state.editTopText} isEdit={meme.isEdit} editMeme={this.editMeme} submitEdit={this.submitEdit} deleteMeme={this.deleteMeme} handleChange={this.handleChange}/>
            )
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.meme?.name}</h1>
                    <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                    <br />
                    <br />
                    <h1>{this.state.topText}</h1>
                    <img src={this.props.meme?.url} name="url" value={this.state.url} onChange={this.handleChange} alt=''></img>
                    <h1>{this.state.bottomText}</h1>
                     
                </form>
                {mapCreatedMemes}
            </div>
        )
    }
}

export default MemeForm