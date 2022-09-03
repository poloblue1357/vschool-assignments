import React from "react"

import {ThemeContextConsumer} from "./ThemeContext"

function Title() {
    return (
        <ThemeContextConsumer>
            {({title, handleChange}) => (
                <div>
                    <input
                        placeholder="Title"
                        name="title"
                        type="text"
                        onChange={handleChange}
                        value={title}
                    />
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Title