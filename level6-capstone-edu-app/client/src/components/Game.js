// import React, { useState, useContext, useEffect } from "react"
import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"
import Question from "./Question.js"
import QuestionOption from "./QuestionChoice.js"
// import GameTable from "./GameTable.js"




export default function Game() {

  const {
    getGameQuestions,
    gameState,
    questions
} = useContext(LearnGameContext)

//USEEFFECT
useEffect(() => {
    console.log("useEffect in Game Component to get Game Questions triggered")
    getGameQuestions()
    // console.log("from Profile component flashcards", flashcards)
    // console.log("from Profile component flashcardState", flashcardState)
    // eslint-disable-next-line  
  }, [gameState])


//   [isFlipped, setIsFlippedState]=useState("false")
    
  //figure out how to sort the flashcards based on category(maybe)??
  //maybe just put dropdown menu to filter by category??
  //add flipcard feature so that have to flip it to read the text
  //add functionality for teacher/admin to add/delete/edit flashcards???


    return(
      <div className="game-container">
        <div className="question-play-container">
          {/* <GameTable/> */}
             {questions.map(question=> 
                <Question question={question} key={question._id}/>
            )}
        </div>
        </div>
            )}