// import React from "react"
// import {useState} from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"
import logo from "./assets/Logo_RGB.png"
// import fourHalf from "./assets/small_4_half.png" -- works to have image show up
// import small_4_half from "./assets/small_4_half.png" -- works to have image show up



 //Figure out how to incorporate dropdown menu for different possibilities

function LocationCard() {

        // const [isHearted, setHeart] = useState(null)
        // const {dogFriendlyRestaurants, yelpStars, handleFave, isHearted} = useContext(PawsContext) 
 
        const {dogFriendlyRestaurants, yelpStars, handleFave} = useContext(PawsContext) 
        // console.log("This is from LocationCard.js:",   dogFriendlyRestaurants)
 
     return(          
         <div className = "flex-container">
              {dogFriendlyRestaurants.map((business, index)=>
                       <div className="card" key ={business.id} index={index}>
                         <img className="bus-photo" width="40%" height="250px" src={business.image_url} alt={business.name}/>    
                         {/* <img className="bus-photo" width="250px" height="250px"src={business.image_url} alt={business.name}/>  */}
                            <div className="bus-details">
                                <div className="business-name">{business.name}</div>
                                <div>Address:  {business.location.address1}</div>
                                <div>City:  {business.location.city}</div>
                                <div>Phone:  {business.display_phone}</div>
                                <div>Category: {business.categories[0].title}</div>
                                <a href={business.url}>
                                        <img className="yelp-logo" src={logo} alt="Yelp Logo"/> 
                                    </a>
                                <div>{yelpStars(business.rating)} from {business.review_count} reviews</div>
                                <div className="price-rating"><span>Price Rating:</span>  {business.price}</div>
                                <div>Click the Yelp logo for more restaurant details.</div>
                         
                                <button key={business.id} 
                                    
                                onClick={()=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)}>
                                     {business.isHearted ? "red heart" : "Add to Faves ❤"}
                               </button>

                            
                            </div>
                            
                        </div>

                         
              )}
                 </div> 
     )}
                     
                
export default LocationCard


