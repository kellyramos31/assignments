import React, {useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"


export default function QuestionChoice(props){

const { question, questionOption } = props

const {
        handleGameAnswerClick,
        // isAnswered
    } = useContext(LearnGameContext)

return(
    <div>
        <h2 key="question.questionOption._id" className="indiv-option" onClick={()=>handleGameAnswerClick(question, questionOption)}>
            {questionOption.questionText}</h2>
    </div>
)}


