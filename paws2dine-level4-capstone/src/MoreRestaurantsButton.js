import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"


function PriceRatingButtons() {
    const {handleMoreRestaurants, handleOriginalRestaurantsAgain} = useContext(PawsContext) 
    // const [oneDollarSign, setOneDollarSign] = useState([])
    // const createOneDropdown = () => {
        
    //     setOneDollarSign([...oneDollarSign, restaurant])
    // }
   

    return(
        <div>  
            <div className="buttons-title">Dog Friendly Eats by Price</div>
            <div className="price-rating-buttons">
                <button onClick={handleMoreRestaurants}>See More Restaurants</button>
                {/* <button onClick={handleOriginalRestaurantsAgain}>Back to Original List</button> */}
            </div>
        </div>

    )
}

export default PriceRatingButtons