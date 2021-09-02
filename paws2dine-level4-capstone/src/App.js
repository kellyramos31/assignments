import React from "react"
// import React, { useContext} from "react"
// import { PawsContext} from "./PawsContext"
import { Switch, Route, Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import SLCMap from "./SLCMap"
import Faves from "./Faves"
import SearchBar from "./SearchBar"
import LocationCard from "./LocationCard"
import "./App.css"
import glassesDog from "./assets/sunglasses-dog-cropped.jpg"
import fluffyPuppy from "./assets/fluffy-puppy.jpg"
import dogWaterBottle from "./assets/dog-water-bottle.jpg"




function App(){
  
   // const {dogFriendlyRestaurants} = useContext(PawsContext)
   // console.log(dogFriendlyRestaurants)
   //above context lines seems to work -- gets the array & console logs it

  
return (
 
  <div>
     
     <div className="header-logo">
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
      {/* <div> */}
         <img className="header-dog1" src={glassesDog} alt="glasses dog" />
         <img className="header-dog2"src={fluffyPuppy} alt="fluffy puppy" />
         <img className="header-dog3"src={dogWaterBottle} alt="dog water bottle table"/>
      {/* </div> */}
         <div className="search-bar">
            <SearchBar />
         </div>
      </div>

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
      <Footer/>
 </div>
)
}

export default App;

