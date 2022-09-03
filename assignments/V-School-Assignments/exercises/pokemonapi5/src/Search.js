import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import "./styles.css"
import {PokemonContext} from "./pokemonContext"

function Search(props) {
    const [name, setName] = useState({name: ''})
    const [randomOrSearch, setRandomOrSearch] = useState({name: ''})
    const [error, setError] = useState('')
    const context = useContext(PokemonContext)

    const searchArray = () => {
        let findPokemon = context.arrayOfPokemon.find(card => {
            return (card.name.toLowerCase() === name.name.toLowerCase())
        })
        if(findPokemon === undefined) {
            return setError("Pokemon not found.")
        }
        setError('')
        setRandomOrSearch(findPokemon)
    }

    const randomPokemon = () => {
        let randomNumber = Math.floor(Math.random() * 250)
        console.log(randomNumber)
        let rPokemon = context.arrayOfPokemon[randomNumber]
        setRandomOrSearch(rPokemon)       
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setName(prevInput => ({...prevInput,  [ name ]: value}))
    }
    const location = {
        pathname: "/search/searchresult",
        state: {randomOrSearch}
    }
    
    return (
        <div className="search">
            <img className="pokedexSearch" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3170168.jpg&f=1&nofb=1" alt="pokedex"/>
            {randomOrSearch.name && <img className="searchCard" src={randomOrSearch.images?.large} alt={"okay"}/>}
            <br />
            <br />
            <div className="searchLinkButton">
                <form className="search" onSubmit={(event) => {
                    event.preventDefault()
                    searchArray()
                }}>
                    <input placeholder="Pokemon Name" type="text" name="name" value={name.name.toLowerCase()} onChange={handleChange} />
                    {error.length > 0 && <p style={{color: "red"}}>{error}</p>}
                    <button >Search!</button>
                    <br />
                    <br />
                </form> 
                    <div>
                        <Link className="search" to={location}>Click For More Information On Your Result!</Link>
                        <br />
                    </div> 
                <br />
                <button onClick={() => {randomPokemon()}}>Search for a Random Pokemon!</button>
            </div>
        </div>
    )
}

export default Search