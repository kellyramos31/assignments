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
 
        const {dogFriendlyRestaurants, yelpStars, handleFave, buttonTextState} = useContext(PawsContext) 
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
                                {/* {isHearted} */}

                                <button key={business.id} id={business.id}                                                    
                                onClick={()=>handleFave(business.id, business.name, business.location.address1, 
                                    business.location.city, business.display_phone, business.isHearted)}>
                                        {buttonTextState}
                               </button>

                            
                            </div>
                            
                        </div>

                         
              )}
                 </div>
     )}
                     
                
export default LocationCard


//     render() {
//         return (
//             <div >

//                 {this.state.isEditing
//                     ? < div className="meme-listing">
//                         <MemeForm
//                             key={this.props.key}
//                             id={this.props.id}
//                             topText={this.props.topText}
//                             url={this.props.url}
//                             name={this.props.name}
//                             bottomText={this.props.bottomText}
//                             submit={this.props.submit}
//                             editOrNot={this.editOrNot}
//                             isEditing={this.state.isEditing}
//                         />
//                         <button onClick={this.editOrNot} className="cancel">Cancel Edit</button>
//                         {/* <div ref={this.scrollDiv}></div> */}
//                     </div>
//                     :
//                     <div>
//                         <div className="meme-listing" >
//                             <h3 className="top-text" id="black-text2">{this.props.topText}</h3>
//                             <img className="meme-image" width="350px" height="350px" src={this.props.url} alt={this.props.name} />
//                             <h3 className="bottom-text" id="black-text3">{this.props.bottomText}</h3>
//                         </div>
//                         <div className="buttons">
//                             <button type="submit" onClick={this.editOrNot}>Edit Your Meme</button>
//                             <button onClick={this.handleClick}>Delete Your Meme</button>
//                         </div>
//                     </div>
//                 }

//             </div >
//         )
//     }
// }
// export default MemeList