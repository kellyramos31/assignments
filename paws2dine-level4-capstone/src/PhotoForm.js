import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./PhotoForm.css"


function PhotoForm() {

const {handlePhotoFormChange, myDoggieImage} = useContext(PawsContext) 

return(
    <div>
        <form name="photoForm">
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