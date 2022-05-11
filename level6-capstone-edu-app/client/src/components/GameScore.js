import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function GameScore() {

const {
    gameScore,
    questionsAnswered,
    questionsCorrect
} = useContext(LearnGameContext)

    return (
        <div className="game-score">
       
            <h2>Score:{" "}{gameScore}{" "}points</h2>
            <h2>Answered: {" "}{questionsAnswered}</h2>
            <h2>Correct: {" "}{questionsCorrect}</h2>

        {/* represent badges by a number?? */}
            <h2>Badges: {" "}  </h2>
     
        </div>
    )
}