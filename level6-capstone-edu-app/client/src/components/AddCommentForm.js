import React, { useState, useContext } from "react"
//import React, { useState } from "react"
import { PostCommentContext } from "../context/PostCommentProvider.js"
// import { FcCancel } from 'react-icons/fc'


const initInputs = {
  commentText: ""
}


export default function AddCommentForm(props){

const [inputs, setInputs] = useState(initInputs)

// const [issueId, setIssueId] = useState(initInputs._issue)

const { combinedAddComment } = useContext(PostCommentContext)

const { toggleToComment, _post} = props




function handleCommentChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }

 function handleSubmitComment(e){
    e.preventDefault()
    //console.log("_issue:", _issue)
    console.log("inputs", inputs)
    // console.log("_issue", _issue)
    combinedAddComment(commentText, _post)
    setInputs(initInputs)
    toggleToComment()
  }

const { commentText } = inputs


  // function toggleToComment(){
  //   setToggleIsCommenting(prev => !prev)
  // }



return (
    <div className="comment-form">
     <form onSubmit={(e)=>handleSubmitComment(e, commentText, _post)}>
        <input
            _post={_post}
            type="text" 
            name="commentText" 
            value={commentText} 
            onChange={handleCommentChange} 
            placeholder="Comment Text"
        />
        <div className="comment-form-buttons">
            <button className="submit-comment-button">Submit Comment</button>
            <button className="cancel-comment-btn" onClick={toggleToComment}>Cancel</button>
        </div>
      </form>
    </div>
  )
}