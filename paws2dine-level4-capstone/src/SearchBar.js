// import React from "react"

import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import PriceRatingButtons from "./PriceRatingButtons"
import "./SearchBar.css"



function SearchBar () {

const {searchBarOnChange} = useContext(PawsContext) 

    return (
        <div className="searchbar-buttons">
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Search by Restaurant Name..."
                onChange={(e)=>searchBarOnChange(e.target.value)}
                />
            </div>
            {/* <div className="price-buttons">
                <PriceRatingButtons/>
            </div> */}
        </div>
    )}

export default SearchBar

