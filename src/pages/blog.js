import React from "react"
import { graphql, Link } from "gatsby"
import Navigation from "../components/Navigation"
import Layout from "../components/Layout"
import BlogCss from "../css/blog.module.scss"

export const query = graphql`
  query {
    allSanityBlog {
      edges {
        node {
          id
          slug {
            current
          }
          description
          created
          name
          image {
            asset {
              id
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
const Blog = ({ data }) => {
  return (
    <Layout>
      <Navigation />
      <div className={BlogCss.main_container}>
        {data.allSanityBlog.edges.map(({ node: blog }) => (
          <div key={blog.slug.current} className={BlogCss.blogWrapper}>
            <Link to={`/${blog.slug.current}`}>
              <div className={BlogCss.image_Container}>
                <img
                  key={blog.image.asset.id}
                  src={blog.image.asset.fluid.src}
                  alt={blog.name}
                ></img>
              </div>
              <div className={BlogCss.details_container}>
                <p>{blog.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
