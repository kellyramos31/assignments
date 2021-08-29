// import React from "react"
// import {useState} from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import Select from "react-select"
// import options from "./options"
import "./LocationCard.css"
import logo from "./assets/Logo_RGB.png"
// import SearchBar from "./SearchBar"
// import fourHalf from "./assets/small_4_half.png" -- works to have image show up
// import small_4_half from "./assets/small_4_half.png" -- works to have image show up



 //Figure out how to incorporate dropdown menu for different possibilities

function LocationCard() {

        
    const {filteredSearchList, yelpStars, handleFave} = useContext(PawsContext) 
      
    return(  
         <div className = "flex-container">
              {filteredSearchList.map((business, index)=>
              <div>                         
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
                                    

                                {business.isHearted 
                                ?
                            
                               <button key={business.id} id={business.id}                                                    
                                onClick={(id)=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)}>
                                         ❤️ 
                               </button>
                                :

                                <button key={business.id} id={business.id}      
                                   onClick={(id)=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)} >
                                      Add to Faves 🤍
                               </button>
                                }                   
                            
                            </div>
        
                        </div>
        
                    </div>
                         
                )}
                 </div>
                
    
    )}
                     
                
export default LocationCard