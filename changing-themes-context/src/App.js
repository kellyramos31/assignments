import React, { Component } from "react"
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"


//should this be class component instead??

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App