import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>SSR page</h1>
            <img
              style={{ width: "300px" }}
              alt="A random dog"
              src={serverData.message}
            />
            <p>
              Welcome to a server side rendered page with a random dog photo
            </p>
            <p>
              To learn more, head over to our{" "}
              <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
                documentation about Server Side Rendering
              </a>
              .
            </p>
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}
