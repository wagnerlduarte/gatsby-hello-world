import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"

export default function BlogPost({ data }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export async function config() {
  const { data } = graphql`
    {
      allMdx(filter: { frontmatter: { date: { lt: "2021-10-31" } } }) {
        nodes {
          frontmatter {
            title
            date
          }
          slug
        }
      }
    }
  `

  const oldPosts = new Set(data.allMdx.nodes.map(n => n.slug))

  return ({ params }) => {
    return {
      defer: oldPosts.has(params.slug),
    }
  }
}
