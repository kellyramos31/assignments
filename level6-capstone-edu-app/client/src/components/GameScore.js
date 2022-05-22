import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function GameScore() {

const {
    gameReset,
    gameScore,
    questionsAnswered,
    questionsCorrect,
    badgeReward
} = useContext(LearnGameContext)

    return (
        <div className="game-score">
       
            <h2>✨Points✨{" "}{gameScore}{" "}{" "}</h2>
            <h2>🙋{" "}{questionsAnswered}</h2>
            <h2>✅{" "}{questionsCorrect}</h2>

        {/* represent badges by a number?? */}
            <h2>✨Badges✨ {" "} {badgeReward} </h2>

            <button className="game-reset-btn" onClick={gameReset}>New Game</button>
            <button className="game-reset-btn">Save My Score</button>
       
        </div>
    )
}