import React, {useContext} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Auth from "./components/Auth"
import {UserContext} from "./context/UserProvider"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Public from "./components/Public"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
    const { token, logout } = useContext(UserContext)
    return (
        <div>
            { token && <Navbar logout={logout}/>}
            <Switch>
                <Route 
                exact path="/" 
                render={()=> token ? <Redirect to="/profile"/> : <Auth />}
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/public"
                    component={Public}
                    redirectTo="/"
                    token={token}
                />
            </Switch>
        </div>
    )
}

export default App