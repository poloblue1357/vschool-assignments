import React from "react"

import dataArray from "./dataArray"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"
import "./styles.css"

function App() {
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App