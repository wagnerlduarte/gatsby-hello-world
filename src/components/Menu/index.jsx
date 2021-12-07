import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <Img fixed={logo.childImageSharp.fixed} />
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/using-ssr">
            Using SSR
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
