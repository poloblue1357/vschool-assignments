import React, {useState, useEffect} from "react"

const PokemonContext = React.createContext()
const axios = require("axios")

function PokemonContextProvider(props) {

    const [arrayOfPokemon, setArrayOfPokemon] = useState([
        {
            name: 'testing',
            hp: 100,
            supertype: 'testing',
            images: '',
        }
    ])
    useEffect(() => {
        axios.get("https://api.pokemontcg.io/v2/cards/" )
            .then(response => {
                console.log(response.data)
                    setArrayOfPokemon(response.data.data)
            })
    }, [])

    return (
        <PokemonContext.Provider value={{
            arrayOfPokemon, 
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export {PokemonContextProvider, PokemonContext}