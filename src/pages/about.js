import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-6">
            <h1>About Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              necessitatibus nisi excepturi animi at impedit deserunt error eum
              tempore? Minus sunt nobis placeat odit adipisci provident, ipsa
              officia accusantium sed!Sequi ipsam, saepe incidunt voluptas iure
              sapiente voluptatibus maxime nesciunt dolor minima animi ipsa est
              qui obcaecati aliquam. Praesentium exercitationem aut corporis?
              Deleniti voluptatum natus at aperiam velit, fugiat quaerat?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
