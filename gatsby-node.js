exports.createPages = async ({ actions, graphql }) => {
  const {data,error} = await graphql(`{
        allSanityBlog {
          edges {
            node {
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
    if(error){
        throw new Error(error);
    }
    data.allSanityBlog.edges.forEach(({node:blog}) =>{
       actions.createPage({
            path: blog.slug.current,
            component: require.resolve("./src/templates/blogTemplate.js"),
            context: {
              slug: blog.slug.current,
            },
       }) 
    });
}
