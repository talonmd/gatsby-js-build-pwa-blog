import React from "react"

import PrimaryLayout from "../layouts/PrimaryLayout"

import Post from "../components/Post"

export default function Home() {
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is the first post"
        excerpt="This is a fake excpert writing thingy magig for now"
      />
      <Post
        title="This is the first post"
        excerpt="This is a fake excpert writing thingy magig for now"
      />
      <Post
        title="This is the first post"
        excerpt="This is a fake excpert writing thingy magig for now"
      />
      <Post
        title="This is the first post"
        excerpt="This is a fake excpert writing thingy magig for now"
      />
    </PrimaryLayout>
  )
}
