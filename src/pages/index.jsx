import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>Home</h1>
          <p>Welcome to your new Gatsby site.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
