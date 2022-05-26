// import React, { useState, useContext, useEffect } from "react"
import React, { useContext, useEffect } from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"
import Question from "./Question.js"
import GameScore from "./GameScore.js"





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
    // eslint-disable
    // eslint-disable-next-line  
  }, [])


  //add functionality for teacher/admin to add/delete/edit flashcards???


    return(
      <div className="game-container">
       
            <GameScore/>
       
        <div className="question-play-container">
             {questions.map((question, index)=>(
                <Question index={index} question={question} key={question._id}/>
             ))}
        </div>
        
        </div>
            )}