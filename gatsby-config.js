/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: {
      firstName:"siddu",
      lastName:"Ram"
    },
    description:
      "Hi my name is siddu ram and i'm a front end developer with 1.3 years of experience on front end development.Coding enthusiast, geek and a gamer.",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "zobmbo91",
        dataset: "production",
        graphqlTag: "default",
        overlayDrafts: true,
        wathMode: true,
        token:
          "skQ5ZuVVdchBxxkHZCwyNbZI7cY0N0zY2PKAfHlMXSLEka96KKBo0OKJUOdAdhbJ0SQiS2eHSnOHzEwdfdrfyZkxqIH4SCrkrd6C6c9mRc4UnXDpFRi2mKHPFDNxUR6jLuxDGocPjIZis5JAesqTqs0oWufyUGXquhdgp5ztDAsj0spRuppl",
      },
    },
  ],
}
