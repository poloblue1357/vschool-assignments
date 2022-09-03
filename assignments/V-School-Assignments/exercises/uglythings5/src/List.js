import React from "react"
import {UglyContextConsumer} from "./uglyContext"
import Thing from "./Thing"

function List() {
    return (
        <UglyContextConsumer>
            {context => {
                return context.arrayOfThings.map((item) => <Thing item={item} key={item._id} />)
                
            }}
        </UglyContextConsumer>
        
    )
}

export default List