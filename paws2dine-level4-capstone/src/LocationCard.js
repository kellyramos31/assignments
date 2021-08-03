// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"


function LocationCard() {
  
    // console.log(dogFriendlyRestaurants)
    const {dogFriendlyRestaurants} = useContext(PawsContext) 
    const dogGrub = dogFriendlyRestaurants.map((business, index) => {
  
      <div>
                     
                <div className = "grid-container">
                        <div className="card" key={business.id} index={index}>
                            <img width="150px" height="150px"src={business.image_url} alt={business.name}/>
                            <p >
                                {business.name}
                                <br/>
                                Address:  {business.location.address1}
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
                      
                </div>
                 
        </div>
    return dogGrub 
    })}
 


export default LocationCard
