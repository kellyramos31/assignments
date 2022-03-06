import React, { useState, useContext } from 'react'
import { IssueCommentContext } from "../context/IssueCommentProvider.js"
// import CommentForm from "./CommentForm.js"


const initInputs = {title: "", description: "" }

export default function IssueText(props){

    const {
        deleteIssue,
        editIssue,
        // addComment,
        // upVote,
        // downVote   
    } = useContext(IssueCommentContext)

    //add function to toggle Comment Form on & off
    //add isEditing toggle??

  const [toggleIsEditing, setToggleIsEditing] = useState(false)

  const [inputs, setInputs] = useState(initInputs)

  function toggleToEdit(){
    setToggleIsEditing(prev => !prev)
  }


  function handleEditChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }

  

return (
    
   
    <div>
        { !toggleIsEditing ?
        <div className="user-issue-container" key={props._id} >
        <div className="issue">
          <h1 className="issue-title">Issue: {props.title}</h1>
          <h3 className="issue-description">Description: {props.description}</h3>
          {/* <h3 className="comments">Comments: {props._comments.map(comment=>(<li>{comment.commentText}</li>))}</h3> */}
          <h3 className="user-comments">My Comments on this Issue:{props.userComments.map(comment=>(<li key={comment._id}>{props._user.username}{comment.commentText}</li>))}</h3>
          <h3 className="total-votes">Votes: {props.voteCount}</h3>
          </div>
        <div className="vote-buttons">
          <button className="delete-issue-btn" onClick={() => deleteIssue(props._id)}>Delete Issue</button>
          <button className="edit-issue-btn" onClick={toggleToEdit}>Edit Issue</button>
          {/* <button className="up-vote-btn" onClick={() => upVote(props._id)}>Upvote</button>
          <button className="down-vote-btn" onClick={()=>downVote(props._id)}>Downvote</button> */}
        </div>
        </div>
      :
        <div id={props._id} index={props.index} >
            <form onSubmit={()=>editIssue(inputs, props._id)}>
              <input
                type="text"
                defaultValue={props.title}
                inputs={inputs}
                name="title"
                onChange={handleEditChange}
                placeholder="Title"
              />
              <input
                type="text"
                defaultValue={props.description}
                inputs={inputs}
                name="description"
                onChange={handleEditChange}
                placeholder="Description"
              />
              <button onClick={toggleToEdit}>Cancel Edit</button>
              <button>Submit Edited Issue</button>
            </form>

        </div>
          }
      </div>
)}
    

