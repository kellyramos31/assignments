import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"
// import Mae from "../images/mae-jemison.jpg"



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


    
  //figure out how to sort the flashcards based on category(maybe)??
  //maybe just put dropdown menu to filter by category??
  //add flipcard feature so that have to flip it to read the text
  //add functionality for teacher/admin to add/delete/edit flashcards???


    return(
        <div>
            <h1>Hey I'm the Learn component!</h1>
            {flashcards.map(flashcard=>
                <div className="flashcard">
                    <h4 className="flashcard-category">{flashcard.categorySTEM}</h4>
                    <div>
                    <img src={flashcard.imageURL} alt="flashcard" className="flashcard-bio-photo"/>
                    </div>
                    <h2>{flashcard.title}{" "}{flashcard.firstName}{" "}{flashcard.lastName}</h2>
                    <h3>{flashcard.profession1}{" "}{flashcard.profession2}{" "}{flashcard.profession3}</h3>
                    <h3>{flashcard.knownFor}</h3>
                    <h3>{flashcard.born}</h3>
                    <h3>{flashcard.fact1}</h3>
                    <h3>{flashcard.fact2}</h3>
                    <h3>{flashcard.fact3}</h3>
                    <h3>{flashcard.fact4}</h3>
                    <h3>{flashcard.fact5}</h3>
                    <h3>{flashcard.quote1}</h3>
                    <h3>{flashcard.quote2}</h3>
                    <h3>{flashcard.quote3}</h3>
            </div>
            )}
        </div>
    )
}