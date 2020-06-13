import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = () => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          description
          title
          siteDescription
          author {
            firstName
            lastName
          }
        }
      }
    }
  `
  const data = useStaticQuery(query);
  return (
    <Helmet title={data.site.siteMetadata.title}>
      <meta
        name="description"
        content={data.site.siteMetadata.siteDescription}
      />
      <meta name="author" content={data.site.siteMetadata.author.firstName+data.site.siteMetadata.author.lastName} />
      <html lang="en"></html>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
  )
}

export default SEO
