// import React from "react"

import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import PriceRatingButtons from "./PriceRatingButtons"
// import MoreRestaurantsButton from "./MoreRestaurantsButton"
import "./SearchBar.css"



function SearchBar () {

const {searchBarOnChange} = useContext(PawsContext) 

    return (
        <div className="searchbar-buttons">
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Search By Name..."
                onChange={(e)=>searchBarOnChange(e.target.value)}
                />
            </div>
            <div className="price-buttons">            
                <PriceRatingButtons />
                {/* <MoreRestaurantsButton /> */}
            </div>

        </div>
    )}

export default SearchBar

