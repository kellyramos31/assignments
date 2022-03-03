import React, { useState, useContext } from "react"
// import React, { useState } from "react"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"



const initInputs = {
  commentText: ""
}

export default function CommentForm(props){

const [inputs, setInputs] = useState(initInputs)

const { addComment } = useContext(IssueCommentContext)

const { _issue, toggleToComment } = props


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
    console.log("newComment", newComment)
    setInputs(initInputs)
  }

  // function toggleToComment(){
  //   setToggleIsCommenting(prev => !prev)
  // }



 const { commentText } = inputs


return (
    <div>
     <form onSubmit= {handleSubmit}>
        <input 
            type="text" 
            name="commentText" 
            value={commentText} 
            onChange={handleCommentChange} 
            toggleToComment={toggleToComment}
            placeholder="Comment Text"
        />
      <button className="add-comment-button" onClick={toggleToComment}>Submit Comment</button>
      {/* <button className="cancel-comment-button" onClick={toggleToComment}>Cancel</button> */}
    </form>
    </div>
  )
}