import React, {useContext} from "react"
import Thing from "./Thing"

import {UglyThingsContext} from "./uglyContext"

function List() {
    const context = useContext(UglyThingsContext)
    const list = context.arrayOfThings.map((thing) => <Thing thing={thing} key={thing._id}/>)
    
    return (
        <div>
            {list}
        </div>
    )
}

export default List