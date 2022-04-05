import React, { useState } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
// import { UserContext} from "../context/UserProvider.js"
//import { IssueCommentContext} from "../context/IssueCommentProvider.js"


const initInputs = {
  title: "",
  description: "",
  // userIssues: []
//   votes: ""
}

export default function PostForm(props){


  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  // const {
  //   //userIssues,
  //   getUserIssues
  //   } = useContext(UserContext)

  // const {
  //     getUserIssues,
  //     // userIssues
  //   } = useContext(IssueCommentContext)

  

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmitIssue(e){
    e.preventDefault()
    addIssue(inputs)
    console.log("inputs from addIssue", inputs)
    setInputs(initInputs)
    // getUserIssues()
    // console.log("issues after handleSubmit for IssueForm", userIssues)
  }

  const { title, description } = inputs

  return (
    <form onSubmit={handleSubmitIssue}>
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
      <button className="add-issue-btn">Add Post</button>
    </form>
  )
}