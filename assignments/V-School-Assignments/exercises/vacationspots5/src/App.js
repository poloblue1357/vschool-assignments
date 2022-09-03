import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"

function App() {
    const spots = vacationSpots.map(spot => <Spot place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    return (
        <div>
            {spots}
        </div>
    )
}

export default App