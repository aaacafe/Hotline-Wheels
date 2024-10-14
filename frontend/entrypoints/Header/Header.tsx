import React from "react"
import render from "../application"

const Header = ({ counter, test }) => {
    return (
    <div>
      <h1>Vite + React + Shopify</h1>
      <h1>{test}</h1>
      <p>{counter ?? 0}</p>
    </div>

  )
}

render(Header)