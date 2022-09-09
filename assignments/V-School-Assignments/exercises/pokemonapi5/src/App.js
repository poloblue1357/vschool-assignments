import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import Home from "./Home"
import Search from "./Search"
import Quiz from "./Quiz"
import Contact from "./Contact"
import "./styles.css"
import SearchResult from "./searchResult"
import QuizResult from "./quizResult"

// testing

function App() {

    return (
        <div>
            <nav className="navbar">
                <h3 className="titleHome">Greatest Pokemon Fan Page!</h3>
                <div>
                    <Link to="/" className="navbarLinks">Home</Link>
                    <Link to="/search" className="navbarLinks">Search</Link>
                    <Link to="/quiz" className="navbarLinks">Quiz</Link>
                    <Link to="/contact" className="navbarLinks">Contact</Link>
                </div>
            </nav>
            <br />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
                <Route exact path="/quiz">
                    <Quiz />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="/search/searchresult">
                    <SearchResult />
                </Route>
                <Route path="/quiz/quizresult">
                    <QuizResult />
                </Route>
            </Switch>
        </div>
    )
}

export default App