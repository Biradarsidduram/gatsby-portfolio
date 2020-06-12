import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  console.log(data.site.siteMetadata)
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>Portfolio</title>
      </Helmet>
      <div className="main-container">{children}</div>
    </>
  )
}

export default Layout
