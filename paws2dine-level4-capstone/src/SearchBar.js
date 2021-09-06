// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
import DropDownMenu from "./DropDownMenu"
import "./SearchBar.css"
// import {useState} from "react"


function SearchBar () {

const {searchBarOnChange} = useContext(PawsContext) 

// const [searchTerm, setSearchTerm] = useState("")


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

