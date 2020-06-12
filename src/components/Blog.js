import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    sanityBlog {
      name
      description
      created
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  console.log(data)
  return <div></div>
}

export default Blog
