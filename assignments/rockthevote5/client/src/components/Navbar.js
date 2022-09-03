import React from "react"
import { Link } from "react-router-dom"

function Navbar(props) {
    const { logout } = props
    return (
        <div>
            {/* <Link to="/">Login Page</Link> */}
            <Link to="/profile" style={{padding: "5px"}}>Profile Page</Link>
            <Link to="/public" style={{padding: "5px"}}>All Issues</Link>
            <button onClick={logout} style={{padding: "5px"}}>Logout</button>
        </div>
    )
}

export default Navbar