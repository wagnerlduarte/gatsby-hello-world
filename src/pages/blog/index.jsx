import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>My Blog Posts</h1>
            {data.allMdx.nodes.map(node => (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
