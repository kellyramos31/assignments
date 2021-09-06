import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./Faves.css"
import PhotoForm from "./PhotoForm"



function Faves() {
   
    const {myFaves, handleFaveDelete, isChangingPhoto, handlePhotoFormToggle} = useContext(PawsContext) 
    
    return(
        <div>
        <div className="details-list">
            <div className="hide-it">
                <p>HIDE THIS SEARCH BAR!</p>
            </div>

        {myFaves.map((fave, index)=>
            <div key={index} id={fave.id} index={index}>
            <ul className="restaurant-list">
                <li id={fave.id}>
                    <div><strong className="restaurant">{fave.name}</strong> 
                    <br />
                    {fave.address}, {fave.city} 
                    <br/>
                    Phone:  {fave.phone}</div>
                    {fave.myDoggieImage !== ""
                    ?
                    <div>
                    <img key={index} id={fave.id} width="300px" height="200px" src={fave.myDoggieImage} alt=""/>
                    </div>
                    :
                    null
                    }
                    <div>
                    <button key={fave.id} id={fave.id} onClick={(id)=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button>
                    </div>
                    {isChangingPhoto[fave.id]
                    ?
                    <div>
                        <button key={index} id={fave.id} onClick={(id)=>handlePhotoFormToggle(fave.id)}>Cancel Photo</button>
                                  <PhotoForm
                                    key={index}
                                    fave={fave}
                                />
                    </div>    
                    :
                    <div>
                    <button key={index} id={fave.id} index={index} onClick={(id)=>handlePhotoFormToggle(fave.id)}>Click to Add/Edit Your Doggie & Me Photo </button>
                    </div>
                    }
                    {fave.isHearted}
                    
                </li>
            </ul>
        </div>
        )}
    </div>
    </div>
    )}


export default Faves
