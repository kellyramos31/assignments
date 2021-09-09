// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import Select from "react-select"
import "./PriceRatingButtons.css"


function PriceRatingButtons() {
    const {handlePriceClickOne, handlePriceClickTwo, handlePriceClickThree, handleClickAll} = useContext(PawsContext) 
    // const [oneDollarSign, setOneDollarSign] = useState([])
    // const createOneDropdown = () => {
        
    //     setOneDollarSign([...oneDollarSign, restaurant])
    // }
   

    return(
        <div>  
            <div className="buttons-title">Dog Friendly Eats by Price Rating</div>
            <div className="price-rating-buttons">
                <button onClick={handlePriceClickOne}>$</button>
                <button onClick={handlePriceClickTwo}>$$</button>
                <button onClick={handlePriceClickThree}>$$$</button>
                <button onClick={handleClickAll}>All</button>
    
            </div>
        </div>

    )
}

export default PriceRatingButtons