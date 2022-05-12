import React, { useState } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
// import { UserContext} from "../context/UserProvider.js"
// import { PostCommentContext} from "../context/PostCommentProvider.js"


const initInputs = {
  title: "",
  description: "",
  // userIssues: []
//   votes: ""
}

export default function PostForm(props){


  const [inputs, setInputs] = useState(initInputs)
  const { addPost } = props

  // const {
  //   //userIssues,
  //   getUserIssues
  //   } = useContext(UserContext)

  // const {
  //     //addPost
  //     // userIssues
  //   } = useContext(PostCommentContext)

  

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmitPost(e){
    e.preventDefault()
    addPost(inputs)
    console.log("inputs from addPost", inputs)
    setInputs(initInputs)
    // getUserIssues()
    // console.log("issues after handleSubmit for IssueForm", userIssues)
  }

  const { category, title, description } = inputs

  return (
    <form className="add-post-form" onSubmit={handleSubmitPost}>
      {/* <div className="radio-buttons" onChange={handleChange}>
        Select: 
          <input 
            type="radio" 
            name="category" 
            value="Science"
             
          /> Science
          <input 
            type="radio" 
            name="category" 
            value="Tech"
          /> Tech
          <input 
            type="radio" 
            name="category" 
            value="Engineeering"
          /> Engineering
           <input 
            type="radio" 
            name="category" 
            value="Math"
          /> Math
      </div> */}
      <input 
        type="text" 
        name="category" 
        value={category} 
        onChange={handleChange} 
        placeholder="STEM Category"
      />
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
      <button className="add-post-btn">Add Post</button>
    </form>
  )
}