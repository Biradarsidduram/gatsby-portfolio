import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import BlogTemplateCss from "../css/blogTemplate.module.scss"
import BackIcon from "../assets/icons/backIcon"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      description
      name
      created
      image {
        asset {
          url
          fluid {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <Navigation />
      <div className={BlogTemplateCss.main_container}>
        <div className={BlogTemplateCss.title}>{data.sanityBlog.name}</div>
        <div className={BlogTemplateCss.dateCreated}>
          Created on: <span>{data.sanityBlog.created}</span>
        </div>
        <div className={BlogTemplateCss.image_container}>
          <Img
            fluid={data.sanityBlog.image.asset.fluid}
            alt={data.sanityBlog.name}
          ></Img>
        </div>
        <div className={BlogTemplateCss.description}>
          {data.sanityBlog.description}
        </div>
        <div className={BlogTemplateCss.back_container}>
          <Link to="/blog">
            <BackIcon className={BlogTemplateCss.back_icon} /> <span>Back</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate
