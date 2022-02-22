import React, { useState, useContext } from 'react'
import CommentForm from './CommentForm.js'
import { UserContext } from "../context/UserProvider.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"

const initInputs = { username: "", password: ""}

export default function Comment(props){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {errMsg} = useContext(UserContext)

  const {addComment } = useContext(IssueCommentContext)

  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleComment(e){
    e.preventDefault()
    addComment(inputs)
  }

//   function handleLogin(e){
//     e.preventDefault()
//     login(inputs)
//   }

  function toggleForm(){
    setToggle(prev => !prev)
    // resetAuthErr()
  }

  return (
    <div className="comment-form-container">
      {/* <h1>RTV App</h1> */}
      { !toggle ?
      <>
         <button onClick={toggleForm}>Leave A Comment</button>
        </>
        :
        <>
          <CommentForm 
            handleChange={handleChange}
            handleComment={handleComment} 
            inputs={inputs}
            btnText="Submit Comment"
            errMsg={errMsg}
          />
          <button onClick={toggleForm}></button>
        </>
      }
    </div>
  )
}