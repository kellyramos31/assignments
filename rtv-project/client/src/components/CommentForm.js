import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider.js"


const initInputs = {
  commentText: ""
}

export default function CommentForm(props){


  const [inputs, setInputs] = useState(initInputs)
  const {addComment} = props

  const [toggle, setToggle] = useState(false)

  const {
    getUserIssues
    } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment(inputs)
    console.log("inputs from addComment", inputs)
    setInputs(initInputs)
    getUserIssues()
  }

  const { commentText } = inputs

  function toggleForm(){
    setToggle(prev => !prev)
  }


  return (
    <div>
      { toggle ?
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="commentText" 
        value={commentText} 
        onChange={handleChange} 
        placeholder="Title"
      />
      <button className="add-comment-button" onClick={toggleForm}>Submit Comment</button>
    </form>
    :
    null
      }
    </div>
  )
}