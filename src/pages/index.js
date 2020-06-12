import React from "react"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
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
  `)
  console.log(data)
  return (
    <div>
      <Layout>
        <Navigation />
         
      </Layout>
    </div>
  )
}
