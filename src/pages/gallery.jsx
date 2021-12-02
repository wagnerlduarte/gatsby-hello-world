import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Seo from "../components/seo"

const Gallery = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        sort: {fields: name}
        filter: {
          absolutePath: { regex: "/images/" }
          extension: { eq: "jpg" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Gallery" />

      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb">Gallery</h1>
          </div>
        </div>
        <div className="row">
          {gallery.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Img key={image.id} fluid={image.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
