// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import Select from "react-select"
import "./PriceRatingButtons.css"


function PriceRatingButtons() {
    const {handlePriceClickOne, handlePriceClickTwo, handleClickAll} = useContext(PawsContext) 
    // const [oneDollarSign, setOneDollarSign] = useState([])
    // const createOneDropdown = () => {
        
    //     setOneDollarSign([...oneDollarSign, restaurant])
    // }
   

    return(
        
        <div className="price-buttons">

            <button onClick={handlePriceClickOne}>$</button>
            <button onClick={handlePriceClickTwo}>$$</button>
            <button onClick={handleClickAll}>All</button>
    
        </div>


    )
}

export default PriceRatingButtons