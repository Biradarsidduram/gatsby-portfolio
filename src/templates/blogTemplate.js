import React from "react"
import {graphql} from 'gatsby';

export const query = graphql`query($slug:String!){
  sanityBlog(slug:{current:{eq:$slug}}){
    description
    name
    image{
     asset{
      source {
        url
      }
     }
    }
  }
}`;
 

const BlogTemplate = ({data}) => {
  return (
    <div>
        data
    </div>
  )
}

export default BlogTemplate
