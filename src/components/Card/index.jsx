import React from "react"

import { card, h1 } from "./card.module.scss"

const Card = () => {
  return (
    <div className={card}>
      <h1>Title Card</h1>
      <h1 className={h1}>Title 2 Card</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        fugiat exercitationem rem ipsa ea, ducimus tempore suscipit quo magni
        inventore numquam eos est aliquam dolorum saepe error quae unde! Iure!
      </p>
      <button>Button Card</button>
    </div>
  )
}

export default Card
