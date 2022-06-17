import React, {useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function SearchBar() {
    const {handleFlashcardSearch} = useContext(LearnGameContext) 

    return (
        <div>
            <div >
              <input
                className="searchbar" 
                type="text" 
                placeholder="Search Term..."
                onChange={(e)=>handleFlashcardSearch(e.target.value)}
                />
            </div>
        </div>
    )}


