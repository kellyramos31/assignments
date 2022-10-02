import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function GameScore() {



const {
    gameReset,
    gameScore,
    questionsAnswered,
    questionsCorrect,
    badgeReward,
    saveMyScore
} = useContext(LearnGameContext)



    return (
      <div className="game-score">
          <div className="game-tally-scores">
            <h2 className="score">✨Points✨ {gameScore} </h2>
            <h2 className="score">🙋 {questionsAnswered}</h2>
            <h2 className="score">✅ {questionsCorrect}</h2>
            <h2 id="new-badges-title">
              ✨New Badges✨ {badgeReward}{" "}
            </h2>
          </div>
          <div className="game-btns">
            <button className="game-reset-btn" onClick={gameReset}>
              New Game
            </button>
            <button
              className="save-game-btn"
              onClick={() => saveMyScore(gameScore)}
            >
              Save My Score
            </button>
          </div>
    
      </div>
    );
}