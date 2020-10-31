/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of this website.",
    keywords: "gatsby, gatsbyjs project, gastby bootstrap",
    image: "/static/fluffy-puppies.jpg",
    url: "https://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `practice.codingsrc.com`,
        //baseUrl: `botanicalsdesign.com`, takes FOREVER to get through auth, but works
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
