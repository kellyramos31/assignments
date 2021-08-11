import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"


function imageForm () {
    const {imageUrl, handleChange, handleMyDogPhoto, myFaves} = useContext(PawsContext) 

    return (
        <div>
            <form>
                Add an image of you & your dog enjoying this restaurant here:
                <input 
                    name="woofPhoto"
                    imageUrl=""
                />
            </form>

        </div>

    )
}

export default imageForm