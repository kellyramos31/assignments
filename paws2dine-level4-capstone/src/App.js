import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import Header from "./Header"
import SLCMap from "./SLCMap"
import Faves from "./Faves"
import SearchBar from "./SearchBar"
import LocationCard from "./LocationCard"
import "./App.css"




function App(){
  
return (
 
  <div>
     
     <div>
       <Header/>

      <nav>
         <div>
            <Link to="/">MAP</Link>
        </div>
        <div>
            <Link to="/details">DETAILS</Link>
        </div>
        <div>
            <Link to="/faves">FAVES</Link>
        </div>
      </nav>

         
      </div>

      <Switch>
       <Route exact path="/">
            <SearchBar/>
            <SLCMap/>
       </Route>
       <Route path="/details">
            <SearchBar/>
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

