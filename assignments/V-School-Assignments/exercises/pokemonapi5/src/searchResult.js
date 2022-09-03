import React from "react"
import {useLocation, withRouter} from "react-router-dom"

function SearchResult() {
    let location = useLocation()
    return (
        <div className="searchResult">
            <h3>Name: {location.state.randomOrSearch.name}</h3>
            <h3>HP: {location.state.randomOrSearch.hp}</h3>
            <h3>Types: {location.state.randomOrSearch.types}</h3>
            <h3>Number: {location.state.randomOrSearch.number}</h3>
            <img src={location.state.randomOrSearch.images?.large} alt={location.state.randomOrSearch.name} style={{height: "400px", width: "350px"}}/>
            <br /> 
            <hr />
        </div>
    )
}

export default withRouter(SearchResult)