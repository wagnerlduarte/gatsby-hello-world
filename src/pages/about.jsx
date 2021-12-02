import React from "react"
import CardV2 from "../components/Cardv2"
import Layout from "../components/Layout"

import Seo from "../components/seo"

const About = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur"

  return (
    <Layout>
      <Seo title="About" />

      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardV2
              nameImage="foto1"
              titleCard="Card Title 01"
              textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veniam autem inventore iste at maxime in? Minima at dicta maiores molestias? Adipisci aliquam animi ratione tempore itaque reiciendis, eum nostrum!"
              colorButton="gatsby"
              background="#e3a617"
              primary
            />
          </div>
          <div className="col-4">
            <CardV2
              nameImage="foto2"
              titleCard="Card Title 02"
              textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veniam autem inventore iste at maxime in? Minima at dicta maiores molestias? Adipisci aliquam animi ratione tempore itaque reiciendis, eum nostrum!"
              colorButton="warning"
            />
          </div>
          <div className="col-4">
            <CardV2
              nameImage="foto3"
              titleCard="Card Title 03"
              textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veniam autem inventore iste at maxime in? Minima at dicta maiores molestias? Adipisci aliquam animi ratione tempore itaque reiciendis, eum nostrum!"
              colorButton="danger"
              background="#e3a617"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
