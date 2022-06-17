import React from "react"
// import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function SearchBarCards(props) {
    const {handleFlashcardSearch} = props

    return (
        <div className="searchbar-cards">
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


