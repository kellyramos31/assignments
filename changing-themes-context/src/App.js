import React from "react"
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"


class App extends React.Component {
  state = {

  }

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
