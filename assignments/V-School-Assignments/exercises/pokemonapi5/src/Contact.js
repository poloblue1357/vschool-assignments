import React, {useState} from "react"
import "./styles.css"

function Contact() {

    const [input, setInput] = useState({
        feedback: ''
    })

    const [feedback, setFeedback] = useState([])

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput(prevInput => ({...prevInput,  [ name ]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFeedback(prevFeedback => ([...prevFeedback, input]))
    }
    
    return (
        <div className="contact">
            <img className="imageContact" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fpikachu-pokemon-portrait_bGVmZWyUmZqaraWkpJRnZWltrWdlaW0.jpg&f=1&nofb=1" alt="pikachu"/>
            <h4>Contact Information: </h4>
            <p>Address: 123 Anywhere Street, SLC, UT 84105</p>
            <p>Email: greatpokemonpage@gmail.com</p>
            <h4>Provide Feedback Below: </h4>
            <form onSubmit={handleSubmit} feedback={feedback}>
                <input type="text" className="inputContact" name="feedback" value={input.feedback} onChange={handleChange} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <img className="imageContact" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F513-5136456_squirtle-pokemon-pokemon-squirtle-with-glasses-hd-png.png&f=1&nofb=1" alt="squirtle"/>
        </div>
    )
}

export default Contact