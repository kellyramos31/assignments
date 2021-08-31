import React, { Component } from "react"
import NavBar from "./NavBar"
import Main from "./Main"
import DropDown from "./DropDown"
import Footer from "./Footer"


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <DropDown />
        <Footer />
      </div>
    )
  }
}

export default App