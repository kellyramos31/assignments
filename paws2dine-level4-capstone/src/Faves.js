import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import {useState} from "react"
import "./Faves.css"
import PhotoForm from "./PhotoForm"



function Faves() {
   
    
    // const [myDoggieImage, setMyDoggieImage] = useState("")
    // const {myFaves, isChangingPhoto, togglePhotoEdit, handleFaveDelete, handlePhotoChange, handleMyDogPhotoSubmit, imageUrl} = useContext(PawsContext) 
    const {myFaves, handleFaveDelete, isChangingPhoto, handlePhotoFormToggle} = useContext(PawsContext) 
    
    return(
    
        <div>

        {myFaves.map((fave, index)=>
            <div key={fave.id} id={fave.id}>
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
                    <button key={index} id={fave.id} onClick={(id)=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button>
                    </div>
                    {isChangingPhoto
                    ?
                    <div>
                        <button key={index} id={fave.id} onClick={(id)=>handlePhotoFormToggle(id)}>Cancel Photo</button>
                                  <PhotoForm
                                    fave={fave}
                                />
                    </div>    
                    :
                    <div>
                    <button key={index} id={fave.id} onClick={(id)=>handlePhotoFormToggle(id)}>Click to Add Your Doggie & Me Photo </button>
                    </div>
                    }
                    {fave.isHearted}
               

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