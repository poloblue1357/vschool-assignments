import React from "react"
import "./styles.css"

function Home() {
    
    return (
        <div className="home">
            <img className="homeCards" src="https://images.pokemontcg.io/dp3/3.png" alt="charizard card"/>
            <p className="home">Welcome to the Greatest Pokemon Fan Page!</p>
            <p className="home">On this site we look at dope Pokemon cards and do awesome searches for our favorite Pokemon.</p>
            <p className="home"> You can also take a quiz to find the best starting Pokemon for your journey!</p>
            <p className="home">Enjoy your stay, and thanks for stopping by!</p>
            <img className="homeCards" src="https://images.pokemontcg.io/base3/2.png" alt="articuno card"/>
        </div>
    )
}

export default Home