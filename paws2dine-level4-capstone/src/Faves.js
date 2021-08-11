import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./Faves.css"


function Faves() {

    const {myFaves, handleFaveDelete} = useContext(PawsContext) 
    //const favorites = myFaves.map()

//NOTE:  want to have a dog paw icon as bullet for each restaurant
//EITHER ADD/EDIT BUTTON for option to add photo of you & your dog to fave restaurant list
//separate map for faves as option?? OR figure out way to change color/highlight faves on main map

        return(
        
        <div>
            {myFaves.map((fave, index)=>
            <div key={fave.id} index={index}>
            <ul className="restaurant-list">
                <li key={fave.id}>
                    <div><strong className="restaurant">{fave.restaurant}</strong> 
                    <br />
                    {fave.address}, {fave.city} 
                    <br/>
                    Phone:  {fave.phone}</div>
                    <button key={fave.id} index={index} onClick={()=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button> 
                    <button id={fave.id} className="add-photo">Add Doggie & Me Photo</button>
                </li>

            </ul>
        </div>
        )}
    </div>
    )}



export default Faves