// import React, { useContext } from "react"
import React from "react"





export default function Learn(props) {

    const { flashcards } = props
    
//         const {
//         flashcards,
//         // getFlashcards
//     //     issueState,
//     //     // issues,
//     //     userIssues,
//     //     comments,
//     //     getUserIssues,
//     //     getIssues,
//     //     // getComments,
//     //     deleteIssue,
//     //     deleteComment
//    } = useContext(LearnGameContext)




    
    return(
        <div>
            {flashcards.map(flashcard=><h2>{flashcard.firstName}</h2>)}
        </div>
    )
}