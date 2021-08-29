import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import {useState} from "react"
import "./Faves.css"



function Faves() {
   
    
    // const [isChangingPhoto, setIsChangingPhoto] = useState(false)
    const {myFaves, isChangingPhoto, togglePhotoEdit, handleFaveDelete, handlePhotoChange, handleMyDogPhotoSubmit, imageUrl} = useContext(PawsContext) 
    
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
                    <button id={fave.id} index={index} onClick={()=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button>
                    {/* <button id={fave.id} index={index} className="add-photo" onClick={(id, index)=>togglePhotoEdit(fave.id, fave.index)}>Add or Edit Doggie & Me Photo</button> */}

                    {/* NOTE PROBLEM:  even though isChangingPhoto is toggling -- form does not show up */}

                    {isChangingPhoto
                    ?
                    <div key={fave.id} id={fave.id} index={index}>
                        <form onSubmit={handleMyDogPhotoSubmit(fave.id, fave.restaurant, fave.address, 
                                    fave.city, fave.phone, fave.isHearted, imageUrl)}>
                            Add an image of you & your dog enjoying this restaurant here:
                            <input
                                type="text"
                                name="imageUrl"
                                value="imageUrl"
                                placeholder="Image URL for your photo..."
                                onChange={handlePhotoChange}
                            />
                         </form>
                        
                        {/* <button id={fave.id} index={index} onClick={()=>setIsChangingPhoto(false)} className="cancel">Cancel Edit</button> */}
                        <button id={fave.id} index={index} onClick={(id)=>togglePhotoEdit(fave.id)} className="cancel">Cancel Edit</button>
                        <button id={fave.id} index={index} className="add-photo">Delete Doggie & Me Photo</button>
                    </div> 
                    :
                    <div key={fave.id} id={fave.id} index={index}>
                        <button id={fave.id} index={index} className="add-photo" onClick={(id, index)=>togglePhotoEdit(fave.id, fave.index)}>Add or Edit Doggie & Me Photo</button>
                    </div> 
                    }

                </li>
            </ul>
        </div>
        )}
    </div>
    )}


export default Faves



// import React, { useContext} from "react"
// import { PawsContext} from "./PawsContext"
// // import {useState} from "react"
// import "./Faves.css"



// function Faves() {
   
    
//     // const [isChangingPhoto, setIsChangingPhoto] = useState(false)
//     const {myFaves, isChangingPhoto, togglePhotoEdit, handleFaveDelete, handlePhotoChange, handleMyDogPhotoSubmit, imageUrl} = useContext(PawsContext) 
    
    
//     return(
//         <div>
//         {myFaves.map((fave, index)=>{

//             <div key={fave.id} id={fave.id} index={index}>
//             <ul className="restaurant-list">
//                 <li key={fave.id} id={fave.id}>
//                     <div><strong className="restaurant">{fave.restaurant}</strong> 
//                     <br />
//                     {fave.address}, {fave.city} 
//                     <br/>
//                     Phone:  {fave.phone}</div>
//                     <button id={fave.id} index={index} onClick={()=>handleFaveDelete(fave.id)} className="delete-button">Delete Fave</button>
                    

//                     {/* NOTE PROBLEM:  even though isChangingPhoto is toggling -- form does not show up */}

//                     {isChangingPhoto
//                     ?
//                     <div key={fave.id} id={fave.id}>
//                         <form onSubmit={handleMyDogPhotoSubmit(fave.id, fave.name, fave.address1, 
//                                     fave.city, fave.display_phone, fave.isHearted, imageUrl)}>
//                             Add an image of you & your dog enjoying this restaurant here:
//                             <input
//                                 type="text"
//                                 name="imageUrl"
//                                 value={imageUrl}
//                                 placeholder="Image URL for your photo..."
//                                 onChange={handlePhotoChange}
//                             />
//                               {/* <button id={fave.id} index={index} onClick={()=>setIsChangingPhoto(false)} className="cancel">Cancel Edit</button> */}
//                          </form>
//                         <button id={fave.id} index={index} onClick={(id)=>togglePhotoEdit(fave.id)} className="cancel">Cancel Edit</button>
//                         <button id={fave.id} index={index} className="add-photo">Delete Doggie & Me Photo</button>
//                     </div>   
//                     :
//                     <div key={fave.id} id={fave.id}>
//                         <button id={fave.id} index={index} className="add-photo" onClick={(id)=>togglePhotoEdit(fave.id)}>Add or Edit Doggie & Me Photo</button>
//                     </div> 
//                     }

//                 </li>
//             </ul>
//         </div>
//             })}
//     </div> 
//  )}


// export default Faves