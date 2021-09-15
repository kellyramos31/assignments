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
                <div className="price-rating-buttons">
                <button className="pricing" onClick={handlePriceClickOne}>$</button>
                <button className="pricing" onClick={handlePriceClickTwo}>$$</button>
                <button className="pricing" onClick={handlePriceClickThree}>$$$</button>
                <button className="pricing" onClick={handleClickAll}>All</button>
    
            </div>
        </div>

    )
}

export default PriceRatingButtons