import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider.js"


const initInputs = {
  title: "",
  description: "",
//   votes: ""
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {addIssue} = props

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
    console.log("inputs from addIssue", inputs)
    setInputs(initInputs)
    getUserIssues()
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"
      />
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"
      />
      <button className="add-issue-button">Add Issue</button>
    </form>
  )
}