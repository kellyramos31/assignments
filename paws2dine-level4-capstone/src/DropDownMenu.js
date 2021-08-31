import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import "./DropDownMenu.css"


function DropDownMenu() {
    const {dogFriendlyRestaurants} = useContext(PawsContext) 
    return(
        <div className="dropdown-menu">

            <select className="select-menu">
                {dogFriendlyRestaurants.map(restaurant =>(
                <option>
                    {restaurant.name}
                    {restaurant.price}
                    {restaurant.categories[0].title}
                </option>
                ))}
            </select>

           
        </div>


    )
}

export default DropDownMenu