import React from "react"
// import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function SearchBar(props) {
    const {handleFlashcardSearch} = props

    return (
        <div className="searchbar-posts">
            <div >
              <input
                className="searchbar" 
                type="text" 
                placeholder="Type a Search Term..."
                onChange={(e)=>handleFlashcardSearch(e)}
                />
            </div>
        </div>
    )}


