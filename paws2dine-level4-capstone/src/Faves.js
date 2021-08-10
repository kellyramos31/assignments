import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./Faves.css"


function Faves() {

    const {myFaves} = useContext(PawsContext) 
    //const favorites = myFaves.map()

//NOTE:  want to have a dog paw icon as bullet for each restaurant
//EITHER ADD/EDIT BUTTON for option to add photo of you & your dog to fave restaurant list
//separate map for faves as option?? OR figure out way to change color/highlight faves on main map

        return(
        
        <div>
            {myFaves.map((fave, index)=>
            <div index={index}>
            <ul className="restaurant-list">
                <li >
                    <div><strong className="restaurant">{fave.restaurant}</strong> 
                    <br />
                    {fave.address}, {fave.city} 
                    <br/>
                    Phone:  {fave.phone}</div>
                </li>

            </ul>
        </div>
        )}
    </div>
    )}



export default Faves