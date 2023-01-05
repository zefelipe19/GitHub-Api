import React from "react"
import {BrowserRouter} from "react-router-dom"

import NavBar from "./Components/NavBar/NavBar"
import Router from "./Routes/Index"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
