import React from "react"
import { navigate } from "gatsby"

import Header from "../components/Header"

const Test = () => (
  <div>
    <Header title="Header of Test Page" />
    <h1>This is a test page</h1>
    <h2>This is a subheading</h2>
    <button onClick={() => navigate("/")}>Navigate to Home Page</button>
  </div>
)

export default Test
