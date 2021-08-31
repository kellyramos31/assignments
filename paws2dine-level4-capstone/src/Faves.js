import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import {useState} from "react"
import "./Faves.css"
import PhotoForm from "./PhotoForm"



function Faves() {
   
    
    // const [myDoggieImage, setMyDoggieImage] = useState("")
    // const {myFaves, isChangingPhoto, togglePhotoEdit, handleFaveDelete, handlePhotoChange, handleMyDogPhotoSubmit, imageUrl} = useContext(PawsContext) 
    const {myFaves, handleFaveDelete, handleMyDogPhotoSubmit, myDoggieImage} = useContext(PawsContext) 
    
    return(
        
        <div>

        {myFaves.map((fave, index)=>
            <div key={fave.id} id={fave.id} index={index}>
            <ul className="restaurant-list">
                <li key={fave.id} id={fave.id}>
                    <div><strong className="restaurant">{fave.restaurant}</strong> 
                    <br />
                    {fave.address}, {fave.city} 
                    <br/>
                    Phone:  {fave.phone}</div>
                    <img width="200px" heigh="200px" src={myDoggieImage} alt=""/>
                    <div>
                    <button id={fave.id} index={index} onClick={(id)=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button>
                    </div>
                <PhotoForm 
                    onSubmit={(id)=>handleMyDogPhotoSubmit(fave.id, fave.restaurant, fave.address, fave.city, fave.phone, fave.isHearted, fave.myDoggieImage)}
                />

                </li>
            </ul>
        </div>
        )}
    </div>
    )}


export default Faves




                    // <form name="photoForm" onSubmit={(e)=>handleMyDogPhotoSubmit(fave.id, fave.restaurant, fave.address, fave.city, fave.phone, fave.isHearted )}>
                    //     <p>Add URL for image of you & your dog enjoying this restaurant:</p>
                    //         <input
                    //             className= "photo-input"
                    //             type="text"         
                    //             // value={myDoggieImage}
                    //             // name="myDoggieImage"
                    //             onChange={(e)=>handlePhotoFormChange(e.target.value)}
                    //         />
                    // <button type="submit">Save My Doggie & Me Photo</button>
                    // </form>








    //    <button id={fave.id} index={index} className="add-photo" onClick={(id, index)=>togglePhotoEdit(fave.id, fave.index)}>Add or Edit Doggie & Me Photo</button> */}

    //                 {/* NOTE PROBLEM:  even though isChangingPhoto is toggling -- form does not show up */}

    //                 {/* {isChangingPhoto
    //                 ?
    //                 <div key={fave.id} id={fave.id} index={index}>
    //                     <form onSubmit={handleMyDogPhotoSubmit(fave.id, fave.restaurant, fave.address, 
    //                                 fave.city, fave.phone, fave.isHearted, imageUrl)}>
    //                         Add an image of you & your dog enjoying this restaurant here:
    //                         <input
    //                             type="text"
    //                             name="imageUrl"
    //                             value="imageUrl"
    //                             placeholder="Image URL for your photo..."
    //                             onChange={handlePhotoChange}
    //                         />
    //                      </form>
                        
    //                     {/* <button id={fave.id} index={index} onClick={()=>setIsChangingPhoto(false)} className="cancel">Cancel Edit</button> */}
    //                     <button id={fave.id} index={index} onClick={(id)=>togglePhotoEdit(fave.id)} className="cancel">Cancel Edit</button>
    //                     <button id={fave.id} index={index} className="add-photo">Delete Doggie & Me Photo</button>
    //                 </div> 
    //                 :
    //                 <div key={fave.id} id={fave.id} index={index}>
    //                     <button id={fave.id} index={index} className="add-photo" onClick={(id, index)=>togglePhotoEdit(fave.id, fave.index)}>Add or Edit Doggie & Me Photo</button>
    //                 </div> 
    //                 {/* } 