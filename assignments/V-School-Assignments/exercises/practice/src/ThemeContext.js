import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        img: '',
        title: '',
        description: '',
        todos: [],
        text: ''
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    updateInfo = () => {
        this.setState(prevState => {
            const newTodo = {
                img: prevState.img,
                title: prevState.title,
                description: prevState.description,
                _id: Math.floor(Math.random() * 1000)
            }
            return {
                img: '',
                title: '',
                description: '',
                todos: [newTodo, ...prevState.todos]
            }
        })
    }
    deleteInfo = (_id) => {
        this.setState(prevState => {
            //filter out the deleted todo
            //pass it into the list of todos in state
            const updatedList = prevState.todos.filter(todo => {
                return todo._id !== _id 
            })

            return {
                todos: updatedList
            } 
        })
    }
    handleOnAccept = (text) => {
        this.setState({text})
    }

    render() {
        return (
            <Provider value={{handleChange:this.handleChange, updateInfo: this.updateInfo, deleteInfo: this.deleteInfo, ...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}