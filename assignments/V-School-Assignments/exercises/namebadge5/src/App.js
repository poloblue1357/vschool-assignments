import React from "react"

class App extends React.Component {
    
    state = {

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App

{(data, loading) =>  loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>}

this.state.children(this.state.data, this.state.loading)