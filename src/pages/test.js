import React from "react"
import { navigate } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Test = () => (
  <div>
    <Header />
    <h1>This is a test page</h1>
    <h2>This is a subheading</h2>
    <button onClick={() => navigate("/")}>Navigate to Home Page</button>
    <Footer />
  </div>
)

export default Test
