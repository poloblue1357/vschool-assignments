import React from "react"

import {ThemeContextConsumer} from "./ThemeContext"

function Img() {
    return (
        <ThemeContextConsumer>
            {({handleChange, img}) => (
                <div>
                    <input
                        placeholder="Image Url"
                        name="img"
                        type="text"
                        value={img}
                        onChange={handleChange}
                        alt="Ugly things image url"
                    />
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Img