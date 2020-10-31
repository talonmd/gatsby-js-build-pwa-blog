import React from "react"
import { graphql } from "gatsby"
//import { Helmet } from "react-helmet"

import PrimaryLayout from "../layouts/PrimaryLayout"

import Post from "../components/Post"

export default function Home({ data }) {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {/* <Helmet>
        <title>Gatsby-Bootstrap | WP Sourced</title>
        <meta
          name="description"
          content="This is the description of our website."
        />
        <meta
          name="keywords"
          content="gatsby, gatsbyjs project, gastby bootstrap"
        />
        {/* index,follow means index it and follow links in the page */}
      {/* noindex,nofollow means DON'T index it and DON'T follow links in the page */}
      {/* <meta name="robots" content="index,follow" />
      </Helmet> */}
      {data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
