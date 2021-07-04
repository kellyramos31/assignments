
import React, { Component } from "react"
import FormUgly from "./FormUgly"
import UglyThingsList from "./UglyThingsList"



class App extends Component {

  render() {

    return (
      <div>
        <FormUgly />
        <UglyThingsList />
      </div>
    )
  }
}

export default App;