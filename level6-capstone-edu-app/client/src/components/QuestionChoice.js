import React, {useState, useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"


export default function QuestionChoice(props){

const { question, questionOption } = props

const {
        handleGameAnswerClick,
        // isAnswered
    } = useContext(LearnGameContext)

const [isAnswered, setIsAnswered] = useState(false)

return(
    <div className={`indiv-option ${isAnswered ? "answered" : ""}`} onClick={()=>setIsAnswered(!isAnswered)}>
        <h2 key="question.questionOption._id" onClick={()=>handleGameAnswerClick(question._user, question, questionOption)}>
            {questionOption.questionText}</h2>
    </div>
)}


