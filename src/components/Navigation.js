import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import NavigatonCss from './navigation.module.scss'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          author{
            firstName
            lastName
          }
        }
      }
    }
  `)
  return (
    <div className={NavigatonCss.navigation_container}>
      <div>
        <Link to="/" className={NavigatonCss.logo}>{data.site.siteMetadata.author.firstName}<span>{data.site.siteMetadata.author.lastName}</span></Link>
      </div>
      <div
        component="nav"
        variant="dense"
        className={NavigatonCss.main_content}
      >
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  )
}
export default Navigation
