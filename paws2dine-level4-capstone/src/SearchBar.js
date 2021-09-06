// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import DropDownMenu from "./DropDownMenu"
import "./SearchBar.css"



function SearchBar () {

const {searchBarOnChange} = useContext(PawsContext) 

    return (
        <div className="searchbar-dropdown">
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Search by Restaurant Name..."
                onChange={(e)=>searchBarOnChange(e.target.value)}
                />
            </div>
            <div className="dropdown">
                <DropDownMenu/>
            </div>
        </div>
    )}

export default SearchBar

