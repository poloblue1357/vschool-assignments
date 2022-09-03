import React from "react"
import {useLocation, withRouter} from "react-router-dom"

function QuizResult() {

    let location = useLocation()
    console.log(location)
    return (
        <div className="quiz">
            <h2>Here is the best starting Pokemon for you! </h2>
            <img src={location.state.imageSrc} alt={location.state.imageAlt} style={{height: "400px", width: "350px"}}/>
        </div>
    )
}

export default withRouter(QuizResult)