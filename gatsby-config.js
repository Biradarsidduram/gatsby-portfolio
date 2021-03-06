/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "portfolio",
    siteDescription: "This site is about the portfolio of sidduram.",
    author: {
      firstName: "siddu",
      lastName: "Ram",
    },
    description:
      "Hello, there my name is siddu ram and I am a self-taught developer with a decent knowledge of javascript having 1.3 years of Front End Web Development experience. I get to know about programming in my first semester of B.Tech in C Programming lecture and that's where my quest for programming begins After B.Tech, i started teaching myself coding took a CS50 Harvard Full-Stack web Development course(JavaScript + Ruby on Rails) but failed to complete. But the learning didn't stop, took a deep dive into the JavaScript world. Recently I started learning python3(yet another awesome thing in my life), Gatsby, Vue, many more will comes. On the road to becoming a Full-stack Developer where learning never stops.",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "zobmbo91",
        dataset: "production",
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
        token:
          "skVQQz46QYUVJAHQlqdfZPvppyO73l6Go44GKS9looEJiDbRwvgsMCzTpyOrvEBLkgtm2TV1wVfFPXvP54UeELS5lSIKY5NxhQ2Au2XBvZZqP1xbUqd4FMQuXrF4VhXkFiznQrTMVpTGKEJQlGgKUoqBWnEZZUTrR1nRtlFoIuopIf3XVNM0",
      },
    },
  ],
}
