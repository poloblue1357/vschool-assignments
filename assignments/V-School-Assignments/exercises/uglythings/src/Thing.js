import React, {useState, useContext} from "react"
import { UglyThingsContext } from "./uglyContext"

function Thing(props) {
    const [isEdit, setIsEdit] = useState(false)
    const context = useContext(UglyThingsContext)
    const [thing, setThing] = useState({
        title: props.thing.title,
        description: props.thing.description,
        imgUrl: props.thing.imgUrl,
    })

    const toggleEdit = () => {
        setIsEdit(prevState => !prevState)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setThing(prevThing => ({...prevThing,  [ name ]: value}))
    }

    return (
        <div>
            {isEdit ? 
                <div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        toggleEdit()
                        context.putThing(props.thing._id, {title: thing.title, description: thing.description, imgUrl: thing.imgUrl
                    })}}>
                        <input placeholder="Image Url" name="imgUrl" value={thing.imgUrl} onChange={handleChange}></input>
                        <input placeholder="Title" name="title" value={thing.title} onChange={handleChange}></input>
                        <input placeholder="Description" name="description" value={thing.description} onChange={handleChange}></input>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => toggleEdit()}>Cancel edit</button>
                </div>
            :
                <div>
                    <h3 style={{color: 'blue'}}>Title: {props.thing.title}</h3>
                    <h5 style={{color: "orange"}}>Description: {props.thing.description}</h5>
                    <img src={props.thing.imgUrl} alt={props.thing.description} style={{height: "300px", width: "300px"}}/>
                    <button onClick={() => toggleEdit()}>Edit</button>
                    <button onClick={() => context.deleteThing(props.thing._id)}>Delete</button>
                    <hr />
                </div>
            }
        </div>
    )
}

export default Thing