// import React from "react"
import React, {useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"




export default function GameTable() {

const {
    // gameState,
    questions
} = useContext(LearnGameContext)

//USEEFFECT
// useEffect(() => {
//     console.log("useEffect in Game Component to get Game Questions triggered")
//     getGameQuestions()
//     // console.log("from Profile component flashcards", flashcards)
//     // console.log("from Profile component flashcardState", flashcardState)
//     // eslint-disable-next-line  
//   }, [gameState])


    return (
        <div>
         <table>
      <thead>
        <tr>
          <th>Science</th>
          <th>Technology</th>
          <th>Engineering</th>
          <th>Mathematics</th>
        </tr>
      </thead>
        <tbody>
           {questions.map(question=> 
                <tr>question={question} key={question._id}</tr>
            )}

        </tbody>
      </table>
    </div>
    )
}
