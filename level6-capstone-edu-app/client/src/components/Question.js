import React, {useState, useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"



export default function Question(props){

const { question } = props

const [flip, setFlip]=useState(false)

   const {
        handleGameAnswerClick
    } = useContext(LearnGameContext)

return(
    <div className={`questionCard ${flip ? "questionFlip" : ""}`} onClick={()=>setFlip(!flip)}>
    {/* // <div className="flashcard-container" onClick={()=>setFlipcard(!flipcard)}> */}
        {!flip ?
            <div className="question-card-front">
                {question.categorySTEM==="Science" ? "🔬"
                :
                question.categorySTEM==="Tech" ? "💻"
                :
                question.categorySTEM==="Engineering" ? "⚙️"
                : 
                "➗"
                }
    
            </div>
            :
                <div className="question-card-back" key={question._id}>
                    <h4>{question.value}{" "}points</h4>
                    <h4 className="question-category">{question.categorySTEM}</h4>
                    <h3>{question.answer} </h3>
                    <div className="question-options">
                        {question.questionOptions.map(questionOption=>
                            <h2 className="indiv-option" onClick={()=>handleGameAnswerClick(question._id, questionOption)}>{questionOption.questionText}</h2>
                    )}
                    </div>
            </div>
        }
        </div>

)}
