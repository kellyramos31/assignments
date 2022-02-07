import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider.js"


const initInputs = {
  commentText: ""
}

export default function IssueForm(props){


  const [inputs, setInputs] = useState(initInputs)
  const {addComment} = props

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
    addIssue(inputs)
    console.log("inputs from addComment", inputs)
    setInputs(initInputs)
    getUserIssues()
  }

  const { commentText } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="commentText" 
        value={commentText} 
        onChange={handleChange} 
        placeholder="Title"
      />
      <button className="add-comment-button">Submit Comment</button>
    </form>
  )
}