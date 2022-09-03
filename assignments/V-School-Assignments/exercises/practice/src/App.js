import React from "react"
import Description from "./Description"
import Img from "./Img"
import Title from "./Title"
import UploadedInfo from "./UploadedInfo"
import {ThemeContextConsumer} from "./ThemeContext"

class App extends React.Component {
    render() {
        return (
            <div>
                <Description />
                <Img />
                <Title />
                <ThemeContextConsumer>
                    {({handleChange, updateInfo}) => (
                        <button onClick={event => {
                            handleChange(event)
                            updateInfo()
                        }}>Submit</button>    
                    )}
                </ThemeContextConsumer>   
                <UploadedInfo />
            </div>
        )
    }
}

export default App