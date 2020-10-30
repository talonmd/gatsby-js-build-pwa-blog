import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-6">
            <Post
              title="This is the first post"
              excerpt="This is a fake excpert writing thingy magig for now"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
