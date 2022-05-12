import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function GameScore() {

const {
    getGameQuestions,
    gameScore,
    questionsAnswered,
    questionsCorrect
} = useContext(LearnGameContext)

    return (
        <div className="game-score">
       
            <h2>🌟:{" "}{gameScore}pts{" "}</h2>
            <h2>🙋: {" "}{questionsAnswered}</h2>
            <h2>✅: {" "}{questionsCorrect}</h2>

        {/* represent badges by a number?? */}
            <h2>Badges✨: {" "}  </h2>

            <button className="game-reset-btn" onClick={getGameQuestions}>New Game</button>
       
        </div>
    )
}