// import React from "react"
import React, { useContext} from "react"
import { PawsContext} from "./PawsContext"
// import {useState} from "react"


function SearchBar () {

const {searchBarOnChange} = useContext(PawsContext) 

// const [searchTerm, setSearchTerm] = useState("")


    return (
        <div>
            <form>
              <input 
                type="text" 
                placeholder="Search..."
                onChange={(e)=>searchBarOnChange(e.target.value)}
                />
                </form>
                
            {/* {dogFriendlyRestaurants.filter((item)=>{   
            if(searchText === ""){
                return( 
                    <p>{item}</p>
                )
            }else if(item.toLowerCase().includes(searchText.toLowerCase())){

            }
        }).map((item, key)=>{
                return( 
                <div key={key}>
                    <p>{item.name}</p>
                </div>
    )
    })} */}
    </div>
    )}

export default SearchBar

