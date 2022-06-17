// import React, { useState, useContext, useEffect } from "react"
import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"
import Flashcard from "./Flashcard.js"
import DropMenuFlashcards from "./DropMenuFlashcards.js"




export default function Learn(props) {

  const {
    getFlashcards,
    flashcardState,
    flashcards
} = useContext(LearnGameContext)

//USEEFFECT
useEffect(() => {
    console.log("useEffect in Learn Component to get Flashcards triggered")
    getFlashcards()
    // eslint-disable-next-line  
  }, [])



    
 //add functionality for teacher/admin to add/delete/edit flashcards???


    return(
      <div className="learn-container">
        <div className="dropdown-flashcards">
          <DropMenuFlashcards/>
        </div>

        {/* <div className="searchbar-flashcards">
          <SearchBar/>
        </div> */}
    

        <div className="flashcard-learn-container">
            {flashcards.map(flashcard=> 
                <Flashcard flashcard={flashcard} key={flashcard._id}/>
            )}
        </div>
        </div>
            )
    }
        
         