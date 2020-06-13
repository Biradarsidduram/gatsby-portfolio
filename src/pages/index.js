import React from "react"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import { graphql } from "gatsby"
import indexCss from "../css/index.module.scss"

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        author {
          firstName
          lastName
        }
      }
    }
  }
`

function Home({ data }) {
  return (
    <div>
      <Layout>
        <Navigation />
        <div className={indexCss.container}>
          <div className={indexCss.about_me}>
            <p className={indexCss.about_me_header}>About me</p>
            <div className={indexCss.about_me_description}>
              {data.site.siteMetadata.description}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
