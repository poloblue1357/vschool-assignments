import React from "react"

const {Provider, Consumer} = React.createContext()
const axios = require("axios")

class UglyContextProvider extends React.Component {

    state = {
        arrayOfThings: [
            {
                title: 'Ugly Thing Example',
                description: 'Some Description of Item',
                imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ocAHxrS81iOfPRNuzEAieQHaDt%26pid%3DApi&f=1",
                _id: 1231 
            }
        ],
    }
    addItemToList = (newItem) => { 
        axios.post("https://api.vschool.io/dan/thing", newItem)
            .then(response => {
                console.log(response.data)
                this.setState(prevState => {
                    return {
                        arrayOfThings: [response.data, ...prevState.arrayOfThings],
                    }
                })
            })
            .catch(error => {
                console.log(error)       
        })// make a post request here so it's saved to backend, then make get request
    }
    axiosGet = (event) => {
        event.preventDefault()
        axios.get("https://api.vschool.io/dan/thing")
            .then(
                (result) => {
                    this.setState({
                        arrayOfThings: result.data
                    })
                }
            )
    }
    editItem = (_id, editedItem) => {
        console.log(_id)
        axios.put(`https://api.vschool.io/dan/thing/${_id}`, editedItem)
            .then(response => {
                console.log(response.data)
                this.setState(prevState => {
                    let arrayOfThings = prevState.arrayOfThings.map((thing) => thing._id === _id ? response.data : thing)
                    return {arrayOfThings}
                })
            })       
        } 
        // let map = this.state.arrayOfThings.map(item => item)
        // return map
        // axios.get("https://api.vschool.io/dan/thing/" )
        // .then(
        //     (result) => {
        //         this.setState({
        //             arrayOfThings: result.data
        //         })
        //     }
        // )
    deleteItem = ( _id) => {
        axios.delete(`https://api.vschool.io/dan/thing/${_id}`)
            .then(response => {
                console.log(response.data)
                let filterThing = this.state.arrayOfThings.filter((thing) => thing._id !== _id)
                
                this.setState({
                    arrayOfThings: filterThing
                })})
                .catch(error => console.log(error)) 
                
            //     axios.get("https://api.vschool.io/dan/thing/" )
            //         .then(
            //             (result) => {
            //                 this.setState({
            //                     arrayOfThings: result.data
            //                 })
            //             }
            //         )
            // })
}
  // filter
    componentDidMount = () => {
        axios.get("https://api.vschool.io/dan/thing/" )
            .then(
                (result) => {
                    this.setState({
                        arrayOfThings: result.data
                    })
                }
            )
    }
    // componentDidUpdate = () => {
    //     axios.get("https://api.vschool.io/dan/thing/" )
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     arrayOfThings: result.data
    //                 })
    //             }
    //         )
    // }
    // have this be a function, call whenever i update things. for my .post request, have the .then call the function
    render() {
        return (
            <Provider value={{
                addItemToList: this.addItemToList,
                arrayOfThings: this.state.arrayOfThings,
                editItem: this.editItem,
                deleteItem: this.deleteItem,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


export {UglyContextProvider, Consumer as UglyContextConsumer}