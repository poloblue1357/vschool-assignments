import React, {useState, useContext} from "react"

import {UglyThingsContext} from "./uglyContext"

function Inputs(props) {
    const initThing = {
        title: '',
        description: '',
        imgUrl: '',
    }
    const [inputData, setInputData] = useState(initThing)

    const context = useContext(UglyThingsContext)

    const handleChange = (event) => {
        const{name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.postThing({title: inputData.title, description: inputData.description, imgUrl: inputData.imgUrl})
            }}>
                <input placeholder="Title" name="title" value={inputData.title} onChange={handleChange}></input>
                <input placeholder="Description" name="description" value={inputData.description} onChange={handleChange}></input>
                <input placeholder="Img Url" name="imgUrl" value={inputData.imgUrl} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default Inputs