import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import Shark from "./assets/images/1.jpg"
import "./index.sass"

ReactDOM.render(
  <Fragment>
    <h1>Hello world</h1>
    <img src={Shark} alt="鲨鱼" />
  </Fragment>,
  document.getElementById("root")
)
