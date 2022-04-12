import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function Learn() {

  const {
    getFlashcards,
    flashcardState,
    flashcards
//     //     issueState,
//     //     // issues,
//     //     userIssues,
//     //     comments,
//     //     getUserIssues,
//     //     getIssues,
//     //     // getComments,
//     //     deleteIssue,
//     //     deleteComment
} = useContext(LearnGameContext)

//USEEFFECT
useEffect(() => {
    console.log("useEffect to get Flashcards triggered")
    getFlashcards()
    // console.log("from Profile component flashcards", flashcards)
    // console.log("from Profile component flashcardState", flashcardState)
    // eslint-disable-next-line  
  }, [flashcardState])


    
    return(
        <div>
            <h1>Hey I'm the Learn component!</h1>
            {flashcards.map(flashcard=>
                <div>
                    <h2>{flashcard.title}</h2>
                    <h2>{flashcard.firstName}</h2>
                    <h2>{flashcard.lastName}</h2>
            </div>
            )}
        </div>
    )
}