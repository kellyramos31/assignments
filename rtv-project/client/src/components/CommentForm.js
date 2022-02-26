import React, { useState, useContext } from "react"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"



const initInputs = {
  commentText: ""
}

export default function CommentForm(props){

const [inputs, setInputs] = useState(initInputs)

const { toggleIsCommenting, _issue } = props

const { addComment } = useContext(IssueCommentContext)


  function handleCommentChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }

    
  function handleSubmit(e){
    e.preventDefault()
    const newComment = {
       commentText: inputs,
      _issue: _issue
    }
    addComment(newComment)
    console.log("_issue", _issue)
    console.log("inputs from addIssue", newComment)
    setInputs(initInputs)
  }


 const { commentText } = inputs


return (
    <div>
     <form onSubmit= {handleSubmit}>
        <input 
            type="text" 
            name="commentText" 
            value={commentText} 
            onChange={handleCommentChange} 
            placeholder="Title"
        />
      <button className="add-comment-button">Submit Comment</button>
      <button className="cancel-comment-button" onClick={toggleIsCommenting}>Cancel</button>
    </form>
    </div>
  )
}