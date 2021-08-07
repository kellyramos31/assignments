// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./LocationCard.css"
import logo from "./assets/Logo_RGB.png"
// import fourHalf from "./assets/small_4_half.png" -- works to have image show up
// import small_4_half from "./assets/small_4_half.png" -- works to have image show up



 //Figure out how to incorporate dropdown menu for different possibilities

function LocationCard() {
 
        const {dogFriendlyRestaurants, yelpStars, handleFave} = useContext(PawsContext) 
        // console.log("This is from LocationCard.js:",   dogFriendlyRestaurants)
 
     return(          
         <div className = "grid-container">
             {dogFriendlyRestaurants.map((business, index)=>
                       <div className="card" index={index}>
                            
                         <img className="bus-photo" width="235px" height="235px"src={business.image_url} alt={business.name}/>
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
                                <div className="price-rating">Price:  {business.price}</div>
                                
                                {/* <div className="bus-link"> */}
                                    
                                {/* </div>   */}
                                <div>Click the Yelp logo for more restaurant details.</div>
                               <button key={business.id} onClick={()=>handleFave(business.id, business.name, business.location.address1, business.location.city, business.display_phone)}>Add to Faves</button>
                            </div>
                            
                        </div>

                         
             )}
                 </div> 
     )}
                     
                
export default LocationCard



// <Button onClick={() => handleDelete(this.props.item._id)} > Delete This Ugly Thing</Button>