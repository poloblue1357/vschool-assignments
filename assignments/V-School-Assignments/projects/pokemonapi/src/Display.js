import React, {useContext} from "react"
import { PokemonContext } from "./pokeContext"
import Pokemon from "./Pokemon"

function Display() {
    const context = useContext(PokemonContext)
    const list = context.arrayOfPokemon.map((p, index) => <Pokemon p={p} key={p+index}/>)

    return (
        <div>
            {list}
        </div>
    )
}

export default Display