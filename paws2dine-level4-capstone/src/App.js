import React from "react"
// import React, { useContext} from "react"
// import { PawsContext} from "./PawsContext"
import { Switch, Route, Link } from "react-router-dom"
import SLCMap from "./SLCMap"
import Faves from "./Faves"
import LocationCard from "./LocationCard"
// import Loader from "./Loader"




function App(){
  
   // const {dogFriendlyRestaurants} = useContext(PawsContext)
   // console.log(dogFriendlyRestaurants)
   //above context lines seems to work -- gets the array & console logs it

  
return (
 
  <div>
   
      <nav>
        <Link to="/">MAP HOME</Link>
        <Link to="/details">DETAILS</Link>
        <Link to="/faves">FAVES</Link>
      </nav>
 
      <Switch>
       <Route exact path="/">
          <SLCMap/>
       </Route>
       <Route path="/details">
          <LocationCard />
       </Route>
      <Route path="/faves">
          <Faves />
      </Route>
      </Switch>
 </div>
)
}

export default App;