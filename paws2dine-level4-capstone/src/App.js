import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import SLCMap from "./SLCMap"
import Faves from "./Faves"
// import LocationCard from "./LocationCard"




function App(){

return (

  <div>
      <nav>
        <Link to="/">MAP HOME</Link>
        <Link to="/details">DETAILS</Link>
        <Link to="/faves">FAVES</Link>
      </nav>
 
      <Switch>
       <Route exact path="/">
          <SLCMap />
       </Route>
       <Route path="/details">
          {/* <LocationCard /> */}
       </Route>
      <Route path="/faves">
          <Faves />
      </Route>
      </Switch>
 </div>
);
}

export default App;

