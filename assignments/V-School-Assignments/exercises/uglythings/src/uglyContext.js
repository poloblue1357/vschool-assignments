import React, {useState, useEffect} from "react"

const UglyThingsContext = React.createContext()
const axios = require("axios")

function UglyContextProvider(props) {

    const [arrayOfThings, setArrayOfThings] = useState([
        {
            title: "Initial", 
            description: "First Item!", 
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.skydiving.co.uk%2Fwp-content%2Fuploads%2Fcharity-tandem-skydiving.jpg&f=1&nofb=1", 
            _id: 1231}
    ])
    const postThing = (newItem) => {
        axios.post("https://api.vschool.io/dan/thing", newItem)
            .then(response => {
                console.log(response.data)
                setArrayOfThings(prevList => {
                    return [response.data, ...prevList]
                })
            })
    }
    const putThing = (_id, editedItem) => {
        axios.put(`https://api.vschool.io/dan/thing/${_id}`, editedItem)
            .then(response => {
                console.log(response.data)
                let editedArray = arrayOfThings.map(thing => thing._id === _id ? response.data : thing)
                setArrayOfThings(editedArray)
            })
    }
    const deleteThing = (_id) => {
        axios.delete(`https://api.vschool.io/dan/thing/${_id}`)
            .then(response => {
                console.log(response.data)
                let filterThing = arrayOfThings.filter(thing => thing._id !== _id)
                setArrayOfThings(filterThing)
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get("https://api.vschool.io/dan/thing/" )
            .then(response => {
                console.log(response.data)
                    setArrayOfThings(response.data)
            })
    }, [])
    return (
        <UglyThingsContext.Provider value={{
            arrayOfThings, 
            postThing, 
            putThing, 
            deleteThing,
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export {UglyContextProvider, UglyThingsContext}