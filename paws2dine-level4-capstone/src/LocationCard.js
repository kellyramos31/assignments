// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"



 //Figure out how to incorporate dropdown menu for different possibilities

function LocationCard() {
 
        const {dogFriendlyRestaurants, yelpStars} = useContext(PawsContext) 
        // console.log("This is from LocationCard.js:",   dogFriendlyRestaurants)
 
     return(          
         <div className = "grid-container">
             {dogFriendlyRestaurants.map((business=>
                       <div className="card" key={business.id}>
                            
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
                                Yelp Rating:  {yelpStars(business.rating)}

                                {/* Right now yelpStars function is "UNDEFINED"; if take out the ()=> says "yelpStars not a function" */}
                            </p>
                        </div>
             ))}
                 </div> 
     )}
                     
                
export default LocationCard
