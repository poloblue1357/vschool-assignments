import React from "react"

import {ThemeContextConsumer} from "./ThemeContext"

function Description() {
    return (
        <ThemeContextConsumer>
            {({handleChange, description}) => (
                <div>
                    <input 
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={handleChange}
                        type="text"
                    />
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Description