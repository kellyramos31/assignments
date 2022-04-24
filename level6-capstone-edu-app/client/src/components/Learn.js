// import React, { useState, useContext, useEffect } from "react"
import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"
import Flashcard from "./Flashcard.js"




export default function Learn() {

  const {
    getFlashcards,
    flashcardState,
    flashcards
} = useContext(LearnGameContext)

//USEEFFECT
useEffect(() => {
    console.log("useEffect in Learn Component to get Flashcards triggered")
    getFlashcards()
    // console.log("from Profile component flashcards", flashcards)
    // console.log("from Profile component flashcardState", flashcardState)
    // eslint-disable-next-line  
  }, [flashcardState])


//   [isFlipped, setIsFlippedState]=useState("false")
    
  //figure out how to sort the flashcards based on category(maybe)??
  //maybe just put dropdown menu to filter by category??
  //add flipcard feature so that have to flip it to read the text
  //add functionality for teacher/admin to add/delete/edit flashcards???


    return(
        <div className="flashcard-learn">
            {flashcards.map(flashcard=> 
                <Flashcard flashcard={flashcard} key={flashcard._id}/>
            )}
        </div>
            )
    }
         