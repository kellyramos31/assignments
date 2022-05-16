import React, { useState } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
// import { UserContext} from "../context/UserProvider.js"
// import { PostCommentContext} from "../context/PostCommentProvider.js"


const initInputs = {
  title: "",
  description: "",
  category: ""
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

  const { title, description } = inputs

  return (
    <form className="add-post-form" onSubmit={handleSubmitPost}>
      <div className="category-radio-buttons" >
        Category: 
          <input 
            type="radio" 
            id="Science"
            name="category" 
            checked={inputs.category === "Science"}
            value="Science"
            onChange={handleChange}
          /> Science
          <input 
            type="radio" 
            id="Tech"
            name="category" 
            checked={inputs.category === "Tech"}
            value="Tech"
            onChange={handleChange}
          /> Tech
          <input 
            type="radio" 
            id="Engineering"
            name="category" 
            checked={inputs.category === "Engineering"}
            value="Engineering"
            onChange={handleChange}
          /> Engineering
           <input 
            type="radio" 
            id="Math"
            name="category" 
            checked={inputs.category === "Math"}
            value="Math"
            onChange={handleChange}
          /> Math
      </div>
      {/* <input 
        type="text" 
        name="category" 
        value={category} 
        onChange={handleChange} 
        placeholder="STEM Category"
      /> */}
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