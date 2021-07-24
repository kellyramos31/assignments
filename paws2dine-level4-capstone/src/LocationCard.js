import React from "react"
import "./LocationCard.css"
import { PawsContextConsumer } from "./PawsContext"

function LocationCard() {

    return(
        <div>
            <PawsContextConsumer>
                 {
                    ({ dogFriendlyRestaurants }) => {
                        const dogFriendly = dogFriendlyRestaurants.map((business, index) => 
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
                        )
                        return dogFriendly
                    }
                }

                
            </PawsContextConsumer>


        </div>
    )
}


export default LocationCard



//  return (
//         <div>
//             <UglyThingsContextConsumer>
//                 {
//                     ({ uglyThingsList }) => {
//                         const myUglyList = uglyThingsList.map((item, index) =>
//                             <UglyThing
//                                 key={item._id}
//                                 index={index}
//                                 id={item._id}
//                                 item={item}
//                             />
//                         )
//                         return myUglyList
//                     }
//                 }

//             </UglyThingsContextConsumer>
//         </div>
//     )