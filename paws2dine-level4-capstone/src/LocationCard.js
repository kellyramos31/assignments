import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import Select from "react-select"
// import options from "./options"
// import SearchBar from "./SearchBar"
// import PriceRatingButtons from "./PriceRatingButtons"
import "./LocationCard.css"
import logo from "./assets/Logo_RGB.png"


 //Figure out how to incorporate dropdown menu OR buttons for different possibilities (pricing & ratings/categories)

function LocationCard() {

  
    const {filteredSearchList, yelpStars, handleFave} = useContext(PawsContext) 
      
    return(
        <div>
         <div className="detailed-list-items">
         <div className = "flex-container">
            
              {filteredSearchList.map((business, index)=>
              <div key={business.id} index={index} className="detailed-list">                         
                       <div className="card" >
                         <img className="bus-photo" width="50%" height="265px" src={business.image_url} alt={business.name}/>    
                         {/* <img className="bus-photo" width="250px" height="250px"src={business.image_url} alt={business.name}/>  */}
                            <div key={business.id} className="bus-details">
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
                            
                               <button key={business.id} id={business.id} index={index}                                                        
                                onClick={(id, index)=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)}>
                                         ❤️ 
                               </button>
                                :

                                <button key={business.id} id={business.id} index={index}     
                                   onClick={(id, index)=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)} >
                                      Add to Faves 🤍
                               </button>
                                }                   
                            
                            </div>
                              
                        </div>
        
                    </div>
                         
                )}
                 </div>
                 </div>
                 </div>
    )}
                     
                
export default LocationCard