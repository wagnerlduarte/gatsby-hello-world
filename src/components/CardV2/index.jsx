import React from "react"
import { CardV2Wrapper } from "./styled"
import Images from "../Images"

const CardV2 = props => {
  const { titleCard, textCard, colorButton = "primary", nameImage } = props

  return (
    <CardV2Wrapper className="card" {...props}>
      <Images name={nameImage} />
      <div className="card-body">
        <h5 className="card-title">{titleCard}</h5>
        <p className="card-text">{textCard}</p>
        <button className={`btn btn-${colorButton}`}>Go somewhere</button>
      </div>
    </CardV2Wrapper>
  )
}

export default CardV2
