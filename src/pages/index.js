import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1>First Gatsby Project</h1>
        <Link to="/test/">Navigate to Test Page</Link>
      </div>
      <img
        src="https://i.guim.co.uk/img/media/cc5ff87a032ce6e4144e63a2a1cbe476dbc7cd5a/273_0_3253_1952/master/3253.jpg?width=700&quality=85&auto=format&fit=max&s=71c0169630a7fb2c2cf37b18affc2ead"
        width="780"
        alt="gatsby"
      />
    </div>
  )
}
