// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"


function LocationCard() {
    const {dogFriendlyRestaurants} = useContext(PawsContext)
    // console.log(dogFriendlyRestaurants)

    const dogGrub = dogFriendlyRestaurants.map((business, index) => {

    return(
       
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
                            {dogGrub}
                </div>
                        
        </div>
    )
    })
}


export default LocationCard
