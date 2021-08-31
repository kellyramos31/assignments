import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./PhotoForm.css"


function PhotoForm(props) {

const {handleMyDogPhotoSubmit, handlePhotoFormChange, myDoggieImage} = useContext(PawsContext) 
console.log("props:", props)
return(
    <div>
        <form name="photoForm" onSubmit={(id)=>handleMyDogPhotoSubmit(props.id, props.name, props.address, props.city, props.phone, props.isHearted, props.myDoggieImage)}>
            <p>Add URL for image of you & your dog enjoying this restaurant:</p>
                    <input
                        className= "photo-input"
                        type="text"
                        value={myDoggieImage}
                        onChange={(e)=>handlePhotoFormChange(e.target.value)}
                    />
            <button type="submit">Save My Doggie & Me Photo</button>
                        
        </form>
    
        
    </div>
)
}

export default PhotoForm