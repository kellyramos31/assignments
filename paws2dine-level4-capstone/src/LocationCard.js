// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"
// import fourHalf from "./assets/small_4_half.png" -- works to have image show up
// import small_4_half from "./assets/small_4_half.png" -- works to have image show up



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
                                
                                {/* right now is just returning the "alt" value for all */}

                                {/* Yelp Rating:  <img src={()=>yelpStars(business.rating)} alt="rating"/> */}
                              
                            </p>
                        </div>
             ))}
                 </div> 
     )}
                     
                
export default LocationCard



// <Button onClick={() => handleDelete(this.props.item._id)} > Delete This Ugly Thing</Button>