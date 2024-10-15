import React from "react"
import render from "../app"

const Header = ({ counter, test }) => {
    return (
    <div>
      <h1>Vite + React + Shopify</h1>
      <h1>{test ? "true" : "false"}</h1>
      <p>{counter ?? 0}</p>
    </div>

  )
}

render(Header)