import React from 'react';
import {graphql,Link} from 'gatsby';


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
                }
              }
            }
          }
        }
    }
 `

const Blog = ({data}) =>{
    return(
        <div>
            {
                data.allSanityBlog.edges.map(({node:blog}) =>(
                    <div key={blog.slug.current}>
                        <div>{blog.name}</div>
                        <Link to={blog.slug.current} className="active">click to see full page</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Blog;