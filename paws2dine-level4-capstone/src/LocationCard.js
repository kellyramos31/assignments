// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"


function LocationCard() {
 
        const {dogFriendlyRestaurants} = useContext(PawsContext) 
        console.log("This is from LocationCard.js:",   dogFriendlyRestaurants)
 
     return(          
         <div className = "grid-container">
             {dogFriendlyRestaurants.map((business=>
                       <div className="card">
                            
                         <img width="150px" height="150px"src={business.image_url} alt={business.name}/>
                            <p >
                                {business.name}
                                <br/>
                                Address:  {business.location.address}
                                <br/>
                                City:  {business.location.city}
                                <br/>
                                Phone:  {business.phone}
                                <br/>
                                Price:  {business.price}
                                <br/>
                                Yelp Rating:  {business.rating}
                            </p>
                        </div>
             ))}
                 </div> 
     )}
                     
                
export default LocationCard
