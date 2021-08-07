import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"


function Faves() {

    const {myFaves} = useContext(PawsContext) 
    //const favorites = myFaves.map()

//NOTE:  want to have a dog paw icon as bullet for each restaurant

        return(
        
        <div>
            {myFaves.map((fave, index)=>
            <div index={index}>
            <ul>
                <li>
                    <div>{fave.restaurant}</div>
                    <div>{fave.address}</div>
                    <div>{fave.city}</div>
                    <div>{fave.phone}</div>
                </li>

            </ul>
        </div>
        )}
    </div>
    )}



export default Faves