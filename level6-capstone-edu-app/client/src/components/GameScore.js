import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function GameScore() {

const {
    gameScore,
    questionsAnswered
} = useContext(LearnGameContext)

    return (
        <div className="game-score">
            <h2>Score:{" "}{gameScore}{" "}points</h2>
            <h2>Questions Answered: {" "}{questionsAnswered}</h2>
        </div>
    )
}