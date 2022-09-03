import React from "react"

import Card from "./Card"
import vacationSpots from "./Spots"
import "./styles.css"

function App() {
    const spotsToVacation = vacationSpots.map((card) => {
        return <Card place={card.place} price={card.price} time={card.timeToGo}/>
    })

    return (
        <div>
          {spotsToVacation}
        </div>
    )
}

export default App